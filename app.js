let activeFilter='all';
const answers={};

function showTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('on'));
  if(id==='guideTab') guideNav.classList.add('on');
  if(id==='checkTab') checkNav.classList.add('on');
  if(id==='resourcesTab') resourcesNav.classList.add('on');
}

function categoryLabel(cat){
  return cat==='vehicle'?'Vehicle'
    :cat==='phone'?'Phone'
    :cat==='public'?'Public Space'
    :'Data Trail';
}

function renderCards(){
  const q=(search.value||'').toLowerCase().trim();
  const data=GUIDE_CARDS.filter(card=>{
    const matchesFilter=activeFilter==='all'||card.category===activeFilter;
    const haystack=(card.title+' '+card.summary+' '+card.risk+' '+card.collects.join(' ')+' '+card.habits.join(' ')).toLowerCase();
    return matchesFilter && (!q || haystack.includes(q));
  });

  resultCount.textContent=`${data.length} card${data.length===1?'':'s'}`;
  cards.innerHTML='';

  data.forEach(card=>{
    const el=document.createElement('div');
    el.className=`guideCard ${card.category}`;
    el.innerHTML=`
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
      <div class="badgeRow">
        <span class="badge ${card.category}">${categoryLabel(card.category)}</span>
        <span class="risk">${card.risk}</span>
      </div>
      <span class="chev">›</span>
    `;
    el.onclick=()=>openCard(card);
    cards.appendChild(el);
  });
}

function openCard(card){
  sheetBackdrop.classList.add('open');
  sheet.classList.add('open');
  sheetBody.innerHTML=`
    <span class="badge ${card.category}">${categoryLabel(card.category)}</span>
    <h2>${card.title}</h2>
    <p>${card.summary}</p>
    <hr>
    <h3>What it may collect</h3>
    <ul>${card.collects.map(x=>`<li>${x}</li>`).join('')}</ul>
    <h3>Practical privacy habits</h3>
    <ul>${card.habits.map(x=>`<li>${x}</li>`).join('')}</ul>
    ${card.note?`<p><b>Note:</b> ${card.note}</p>`:''}
  `;
}

function closeSheet(){
  sheet.classList.remove('open');
  sheetBackdrop.classList.remove('open');
}

document.querySelectorAll('.filterChip').forEach(btn=>{
  btn.onclick=()=>{
    activeFilter=btn.dataset.filter;
    document.querySelectorAll('.filterChip').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
  };
});

search.oninput=renderCards;

function renderQuiz(){
  quiz.innerHTML='';
  QUESTIONS.forEach(q=>{
    const wrap=document.createElement('div');
    wrap.className='question';
    wrap.innerHTML=`
      <h3>${q.q}</h3>
      <p>Select the closest answer.</p>
      <div class="options">
        ${q.options.map((o,i)=>`<button data-q="${q.id}" data-score="${o.score}" data-index="${i}">${o.label}</button>`).join('')}
      </div>
    `;
    quiz.appendChild(wrap);
  });

  quiz.querySelectorAll('button').forEach(btn=>{
    btn.onclick=()=>{
      const qid=btn.dataset.q;
      answers[qid]=Number(btn.dataset.score);
      quiz.querySelectorAll(`button[data-q="${qid}"]`).forEach(x=>x.classList.remove('selected'));
      btn.classList.add('selected');
      updateScore();
    };
  });

  updateScore();
}

function updateScore(){
  const max=QUESTIONS.length*2;
  const raw=Object.values(answers).reduce((a,b)=>a+b,0);
  const score=Math.round((raw/max)*100);
  scoreValue.textContent=score;

  let label='Low';
  let text='Your current answers suggest a smaller everyday data trail.';
  let recs=[
    'Keep app location permissions tight.',
    'Use strong account privacy settings.',
    'Avoid posting live location clues.'
  ];

  if(score>=35 && score<70){
    label='Moderate';
    text='Your answers suggest a normal but noticeable everyday data trail.';
    recs=[
      'Review “Always” location permissions.',
      'Check account-level location sharing.',
      'Reduce public social media location clues.',
      'Use masked emails or aliases for nonessential accounts.'
    ];
  }

  if(score>=70){
    label='High';
    text='Your answers suggest a larger, more linkable everyday data trail.';
    recs=[
      'Audit phone location, Bluetooth, and app permissions.',
      'Turn off unnecessary live location sharing.',
      'Opt out of major data broker and people-search sites.',
      'Tighten social media visibility and remove old public posts.',
      'Separate personal accounts from throwaway signups.'
    ];
  }

  scoreLabel.textContent=label;
  scoreText.textContent=text;
  recommendations.innerHTML=`<ul>${recs.map(x=>`<li>${x}</li>`).join('')}</ul>`;
}

renderCards();
renderQuiz();
showTab('guideTab');
