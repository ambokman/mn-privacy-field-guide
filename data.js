const GUIDE_CARDS=[
  {
    id:'lpr',
    title:'License Plate Readers',
    category:'vehicle',
    risk:'High visibility trail',
    summary:'Roadside or vehicle-mounted cameras record plates, time, and location.',
    collects:['Plate number','Vehicle image','Timestamp','Camera location','Possible travel pattern history'],
    habits:['Know where public records show deployments','Avoid unnecessary routine sharing of vehicle location','Review state retention rules and agency reports'],
    note:'Good for a civic-awareness site, but exact pins require verified coordinates.'
  },
  {
    id:'phone-location',
    title:'Phone Location Sharing',
    category:'phone',
    risk:'Continuous personal trail',
    summary:'Apps, carriers, and account features can create a detailed location history.',
    collects:['GPS location','Cell tower proximity','Wi‑Fi/Bluetooth signals','Device identifiers','Account-level location sharing'],
    habits:['Audit app location permissions','Use “While Using” instead of “Always” when possible','Check family/account location sharing settings','Disable precise location for apps that do not need it']
  },
  {
    id:'geofence',
    title:'Geofence Warrants',
    category:'phone',
    risk:'Area-based data search',
    summary:'A legal process that can request device records for everyone in a defined place and time window.',
    collects:['Device identifiers within an area','Location history records','Time-window presence data'],
    habits:['Limit unnecessary location history','Reduce app-level location collection','Understand that location history can become searchable data']
  },
  {
    id:'data-brokers',
    title:'Data Broker Profiles',
    category:'data',
    risk:'Invisible profile building',
    summary:'Companies aggregate public records, purchases, devices, and online behavior into searchable profiles.',
    collects:['Names and aliases','Addresses','Phone numbers','Interests','Consumer segments','Device and ad IDs'],
    habits:['Opt out from major people-search sites','Use masked emails and phone numbers when possible','Limit loyalty-card and app data sharing']
  },
  {
    id:'public-cameras',
    title:'Public Camera Networks',
    category:'public',
    risk:'Public movement context',
    summary:'Traffic cams, retail cameras, and neighborhood systems can document presence in public spaces.',
    collects:['Video footage','Vehicle or person images','Time and place','Sometimes plate or face metadata'],
    habits:['Understand camera-heavy locations','Separate privacy concerns from normal public visibility','Use public-records requests for civic accountability']
  },
  {
    id:'facial-recognition',
    title:'Facial Recognition',
    category:'public',
    risk:'Identity matching',
    summary:'Software can compare a face from an image or camera feed against other image databases.',
    collects:['Face templates','Image metadata','Candidate identity matches','Camera source data'],
    habits:['Reduce unnecessary face-tagging online','Lock down public social photos','Know whether local agencies have policies or vendor contracts']
  },
  {
    id:'social-osint',
    title:'Social Media OSINT',
    category:'data',
    risk:'Self-published intelligence',
    summary:'Public posts, photos, friends, comments, and check-ins can reveal more than intended.',
    collects:['Location clues','Relationships','Schedule patterns','Photos','Workplace and hobby details'],
    habits:['Remove public check-ins','Delay location posts','Limit profile visibility','Search your own name periodically']
  },
  {
    id:'wifi-bluetooth',
    title:'Wi‑Fi and Bluetooth Beacons',
    category:'phone',
    risk:'Passive device signals',
    summary:'Phones and accessories may broadcast signals that can be used for proximity analytics.',
    collects:['Nearby device signals','MAC/randomized identifiers','Dwell time','Repeat visits'],
    habits:['Keep device software updated','Use MAC randomization','Turn off Bluetooth when not needed','Limit unnecessary companion apps']
  },
  {
    id:'transit-airport',
    title:'Transit and Airport Sensors',
    category:'public',
    risk:'High-density tracking zone',
    summary:'Airports, transit centers, parking areas, and terminals combine cameras, access systems, and payment trails.',
    collects:['Camera footage','Ticket/payment records','Vehicle entry and exit','Time and route clues'],
    habits:['Know high-surveillance environments','Use privacy-preserving payment where available','Avoid oversharing travel plans publicly']
  },
  {
    id:'smart-home',
    title:'Doorbell and Smart Home Cameras',
    category:'public',
    risk:'Neighborhood network visibility',
    summary:'Private cameras can create broad neighborhood coverage when many homes participate.',
    collects:['Street-facing video','Motion events','Audio in some cases','Visitor and vehicle presence'],
    habits:['Aim your own cameras responsibly','Review sharing settings','Avoid posting identifiable footage unnecessarily']
  }
];

const QUESTIONS=[
  {
    id:'loc',
    q:'How many apps have “Always” location access?',
    options:[
      {label:'None or almost none',score:0},
      {label:'A few',score:1},
      {label:'Many',score:2},
      {label:'Not sure',score:2}
    ]
  },
  {
    id:'share',
    q:'Do you share live location with another person or account?',
    options:[
      {label:'No',score:0},
      {label:'Sometimes',score:1},
      {label:'Constantly',score:2},
      {label:'Not sure',score:2}
    ]
  },
  {
    id:'social',
    q:'How public are your social profiles?',
    options:[
      {label:'Mostly private',score:0},
      {label:'Mixed',score:1},
      {label:'Mostly public',score:2},
      {label:'I do not know',score:2}
    ]
  },
  {
    id:'accounts',
    q:'Do you reuse the same email/phone number everywhere?',
    options:[
      {label:'Rarely',score:0},
      {label:'Sometimes',score:1},
      {label:'Usually',score:2},
      {label:'Always',score:2}
    ]
  },
  {
    id:'vehicle',
    q:'How often do you pass predictable same-route camera-heavy roads?',
    options:[
      {label:'Rarely',score:0},
      {label:'Sometimes',score:1},
      {label:'Daily',score:2},
      {label:'Multiple times daily',score:2}
    ]
  }
];
