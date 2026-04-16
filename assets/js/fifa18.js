
const TEAMS=[
{n:"Boca Juniors",s:3.5,l:"Argentina - Primera División"},
{n:"River Plate",s:3.5,l:"Argentina - Primera División"},
{n:"Racing Club",s:3.0,l:"Argentina - Primera División"},
{n:"Independiente",s:3.0,l:"Argentina - Primera División"},
{n:"San Lorenzo",s:3.0,l:"Argentina - Primera División"},
{n:"Estudiantes",s:3.0,l:"Argentina - Primera División"},
{n:"Vélez Sarsfield",s:2.5,l:"Argentina - Primera División"},
{n:"Lanús",s:2.5,l:"Argentina - Primera División"},
{n:"Talleres",s:2.5,l:"Argentina - Primera División"},
{n:"Rosario Central",s:2.5,l:"Argentina - Primera División"},
{n:"Newell's Old Boys",s:2.5,l:"Argentina - Primera División"},
{n:"Huracán",s:2.5,l:"Argentina - Primera División"},
{n:"Argentinos Jrs.",s:2.0,l:"Argentina - Primera División"},
{n:"Arsenal (ARG)",s:2.0,l:"Argentina - Primera División"},
{n:"Atlético Tucumán",s:2.0,l:"Argentina - Primera División"},
{n:"Banfield",s:2.0,l:"Argentina - Primera División"},
{n:"Belgrano",s:2.0,l:"Argentina - Primera División"},
{n:"Colón",s:2.0,l:"Argentina - Primera División"},
{n:"Defensa y Justicia",s:2.0,l:"Argentina - Primera División"},
{n:"Gimnasia LP",s:2.0,l:"Argentina - Primera División"},
{n:"Godoy Cruz",s:2.0,l:"Argentina - Primera División"},
{n:"Olimpo",s:2.0,l:"Argentina - Primera División"},
{n:"Patronato",s:1.5,l:"Argentina - Primera División"},
{n:"San Martín (SJ)",s:1.5,l:"Argentina - Primera División"},
{n:"Temperley",s:1.5,l:"Argentina - Primera División"},
{n:"Tigre",s:2.0,l:"Argentina - Primera División"},
{n:"Unión Santa Fe",s:2.0,l:"Argentina - Primera División"},
{n:"Villa Maipú",s:1.5,l:"Argentina - Primera División"},
{n:"Adelaide United",s:2.0,l:"Australia - A-League"},
{n:"Brisbane Roar",s:2.0,l:"Australia - A-League"},
{n:"Central Coast Mariners",s:1.5,l:"Australia - A-League"},
{n:"Melbourne Victory",s:2.5,l:"Australia - A-League"},
{n:"Melbourne City",s:2.5,l:"Australia - A-League"},
{n:"Newcastle Jets",s:1.5,l:"Australia - A-League"},
{n:"Perth Glory",s:2.0,l:"Australia - A-League"},
{n:"Sydney FC",s:2.5,l:"Australia - A-League"},
{n:"Wellington Phoenix",s:1.5,l:"Australia - A-League"},
{n:"Western Sydney Wanderers",s:2.0,l:"Australia - A-League"},
{n:"RB Salzburg",s:3.5,l:"Austria - Bundesliga"},
{n:"SK Rapid Wien",s:3.0,l:"Austria - Bundesliga"},
{n:"FK Austria Wien",s:3.0,l:"Austria - Bundesliga"},
{n:"SK Sturm Graz",s:2.5,l:"Austria - Bundesliga"},
{n:"LASK Linz",s:2.0,l:"Austria - Bundesliga"},
{n:"Rheindorf Altach",s:2.0,l:"Austria - Bundesliga"},
{n:"SCR Altach",s:2.0,l:"Austria - Bundesliga"},
{n:"Wolfsberger AC",s:2.0,l:"Austria - Bundesliga"},
{n:"SV Mattersburg",s:2.0,l:"Austria - Bundesliga"},
{n:"SV Ried",s:1.5,l:"Austria - Bundesliga"},
{n:"Club Brugge",s:3.5,l:"Belgium - Pro League"},
{n:"RSC Anderlecht",s:3.5,l:"Belgium - Pro League"},
{n:"Standard Liège",s:3.0,l:"Belgium - Pro League"},
{n:"KAA Gent",s:3.0,l:"Belgium - Pro League"},
{n:"R. Charleroi SC",s:2.5,l:"Belgium - Pro League"},
{n:"KRC Genk",s:2.5,l:"Belgium - Pro League"},
{n:"Zulte Waregem",s:2.5,l:"Belgium - Pro League"},
{n:"KV Kortrijk",s:2.0,l:"Belgium - Pro League"},
{n:"KV Mechelen",s:2.0,l:"Belgium - Pro League"},
{n:"KV Oostende",s:2.0,l:"Belgium - Pro League"},
{n:"OH Leuven",s:2.0,l:"Belgium - Pro League"},
{n:"Mouscron",s:2.0,l:"Belgium - Pro League"},
{n:"Sint-Truiden VV",s:2.0,l:"Belgium - Pro League"},
{n:"Sporting Lokeren",s:2.0,l:"Belgium - Pro League"},
{n:"KAS Eupen",s:1.5,l:"Belgium - Pro League"},
{n:"Waasland-Beveren",s:1.5,l:"Belgium - Pro League"},
{n:"Grêmio",s:3.5,l:"Brazil - Brasileirão"},
{n:"São Paulo",s:3.0,l:"Brazil - Brasileirão"},
{n:"Atlético Mineiro",s:3.5,l:"Brazil - Brasileirão"},
{n:"Palmeiras",s:3.5,l:"Brazil - Brasileirão"},
{n:"Santos",s:3.5,l:"Brazil - Brasileirão"},
{n:"Fluminense",s:3.5,l:"Brazil - Brasileirão"},
{n:"Cruzeiro",s:3.5,l:"Brazil - Brasileirão"},
{n:"Botafogo",s:3.5,l:"Brazil - Brasileirão"},
{n:"Sport Recife",s:3.5,l:"Brazil - Brasileirão"},
{n:"Coritiba",s:3.5,l:"Brazil - Brasileirão"},
{n:"Ponte Preta",s:3.0,l:"Brazil - Brasileirão"},
{n:"Vitória (BRA)",s:2.5,l:"Brazil - Brasileirão"},
{n:"Atlético Goianiense",s:2.5,l:"Brazil - Brasileirão"},
{n:"Avaí",s:3.0,l:"Brazil - Brasileirão"},
{n:"Chapecoense",s:3.0,l:"Brazil - Brasileirão"},
{n:"Atlético Paranaense",s:3.0,l:"Brazil - Brasileirão"},
{n:"Universidad de Chile",s:3.0,l:"Chile - Primera División"},
{n:"Colo-Colo",s:3.0,l:"Chile - Primera División"},
{n:"Uni. Católica (CHI)",s:3.0,l:"Chile - Primera División"},
{n:"Audax Italiano",s:2.0,l:"Chile - Primera División"},
{n:"CD Antofagasta",s:2.0,l:"Chile - Primera División"},
{n:"CD Huachipato",s:2.0,l:"Chile - Primera División"},
{n:"CD O'Higgins",s:2.0,l:"Chile - Primera División"},
{n:"CD Palestino",s:2.0,l:"Chile - Primera División"},
{n:"Curicó Unido",s:1.5,l:"Chile - Primera División"},
{n:"Depor. Iquique",s:2.0,l:"Chile - Primera División"},
{n:"Deportes Temuco",s:1.5,l:"Chile - Primera División"},
{n:"Everton de Viña",s:2.0,l:"Chile - Primera División"},
{n:"San Luis (CHI)",s:1.5,l:"Chile - Primera División"},
{n:"Uni. Concepción",s:1.5,l:"Chile - Primera División"},
{n:"Unión Española",s:2.0,l:"Chile - Primera División"},
{n:"Santiago Wanderers",s:2.0,l:"Chile - Primera División"},
{n:"Atlético Nacional",s:3.0,l:"Colombia - Liga BetPlay"},
{n:"Millonarios",s:3.0,l:"Colombia - Liga BetPlay"},
{n:"Ind. Santa Fe",s:3.0,l:"Colombia - Liga BetPlay"},
{n:"Deportivo Cali",s:2.5,l:"Colombia - Liga BetPlay"},
{n:"Junior",s:2.5,l:"Colombia - Liga BetPlay"},
{n:"Indep. Medellín",s:2.5,l:"Colombia - Liga BetPlay"},
{n:"Deportes Tolima",s:2.0,l:"Colombia - Liga BetPlay"},
{n:"América de Cali",s:2.0,l:"Colombia - Liga BetPlay"},
{n:"Al. Petrolera",s:2.0,l:"Colombia - Liga BetPlay"},
{n:"Atl. Bucaramanga",s:2.0,l:"Colombia - Liga BetPlay"},
{n:"Atlético Huila",s:2.0,l:"Colombia - Liga BetPlay"},
{n:"Once Caldas",s:2.0,l:"Colombia - Liga BetPlay"},
{n:"Cortuluá",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"Deportivo Pasto",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"Envigado",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"Jaguares",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"La Equidad",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"Patriotas",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"Rionegro Águilas",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"Tigres (COL)",s:1.5,l:"Colombia - Liga BetPlay"},
{n:"FC København",s:3.5,l:"Denmark - Superliga"},
{n:"FC Midtjylland",s:3.0,l:"Denmark - Superliga"},
{n:"Brøndby IF",s:3.0,l:"Denmark - Superliga"},
{n:"Aalborg BK",s:2.5,l:"Denmark - Superliga"},
{n:"Aarhus GF",s:2.5,l:"Denmark - Superliga"},
{n:"FC Nordsjælland",s:2.5,l:"Denmark - Superliga"},
{n:"AC Horsens",s:2.0,l:"Denmark - Superliga"},
{n:"FC Helsingør",s:2.0,l:"Denmark - Superliga"},
{n:"Hobro IK",s:2.0,l:"Denmark - Superliga"},
{n:"Lyngby BK",s:2.0,l:"Denmark - Superliga"},
{n:"Odense BK",s:2.0,l:"Denmark - Superliga"},
{n:"Randers FC",s:2.0,l:"Denmark - Superliga"},
{n:"Silkeborg IF",s:2.0,l:"Denmark - Superliga"},
{n:"SønderjyskE",s:2.0,l:"Denmark - Superliga"},
{n:"Manchester City",s:5.0,l:"England - Premier League"},
{n:"Chelsea",s:5.0,l:"England - Premier League"},
{n:"Arsenal",s:5.0,l:"England - Premier League"},
{n:"Manchester United",s:5.0,l:"England - Premier League"},
{n:"Liverpool",s:4.5,l:"England - Premier League"},
{n:"Tottenham Hotspur",s:4.5,l:"England - Premier League"},
{n:"Everton",s:4.0,l:"England - Premier League"},
{n:"Leicester City",s:4.0,l:"England - Premier League"},
{n:"West Ham United",s:3.5,l:"England - Premier League"},
{n:"Southampton",s:3.5,l:"England - Premier League"},
{n:"Crystal Palace",s:3.0,l:"England - Premier League"},
{n:"Watford",s:3.0,l:"England - Premier League"},
{n:"Stoke City",s:3.0,l:"England - Premier League"},
{n:"Swansea City",s:3.0,l:"England - Premier League"},
{n:"Burnley",s:3.0,l:"England - Premier League"},
{n:"Brighton",s:3.0,l:"England - Premier League"},
{n:"Huddersfield Town",s:3.0,l:"England - Premier League"},
{n:"Newcastle United",s:3.0,l:"England - Premier League"},
{n:"West Brom",s:3.0,l:"England - Premier League"},
{n:"Bournemouth",s:3.0,l:"England - Premier League"},
{n:"Aston Villa",s:3.0,l:"England - Championship"},
{n:"Wolves",s:3.0,l:"England - Championship"},
{n:"Fulham",s:3.0,l:"England - Championship"},
{n:"Leeds United",s:3.0,l:"England - Championship"},
{n:"Derby County",s:2.5,l:"England - Championship"},
{n:"Middlesbrough",s:2.5,l:"England - Championship"},
{n:"Cardiff City",s:2.5,l:"England - Championship"},
{n:"Sheffield Wednesday",s:2.5,l:"England - Championship"},
{n:"Norwich City",s:2.5,l:"England - Championship"},
{n:"Hull City",s:2.5,l:"England - Championship"},
{n:"Sheffield United",s:2.5,l:"England - Championship"},
{n:"Nott'm Forest",s:2.5,l:"England - Championship"},
{n:"Barnsley",s:2.0,l:"England - Championship"},
{n:"Birmingham City",s:2.0,l:"England - Championship"},
{n:"Bolton Wanderers",s:2.0,l:"England - Championship"},
{n:"Brentford",s:2.0,l:"England - Championship"},
{n:"Bristol City",s:2.0,l:"England - Championship"},
{n:"Burton Albion",s:2.0,l:"England - Championship"},
{n:"Ipswich Town",s:2.0,l:"England - Championship"},
{n:"Millwall",s:2.0,l:"England - Championship"},
{n:"Preston North End",s:2.0,l:"England - Championship"},
{n:"QPR",s:2.0,l:"England - Championship"},
{n:"Reading",s:2.0,l:"England - Championship"},
{n:"Sunderland",s:2.0,l:"England - Championship"},
{n:"Blackburn Rovers",s:2.0,l:"England - League One"},
{n:"Wigan Athletic",s:2.0,l:"England - League One"},
{n:"Bradford City",s:2.0,l:"England - League One"},
{n:"Portsmouth",s:2.0,l:"England - League One"},
{n:"AFC Wimbledon",s:1.5,l:"England - League One"},
{n:"Blackpool",s:1.5,l:"England - League One"},
{n:"Bristol Rovers",s:1.5,l:"England - League One"},
{n:"Bury",s:1.5,l:"England - League One"},
{n:"Charlton Athletic",s:1.5,l:"England - League One"},
{n:"Doncaster Rovers",s:1.5,l:"England - League One"},
{n:"Fleetwood Town",s:1.5,l:"England - League One"},
{n:"Gillingham",s:1.5,l:"England - League One"},
{n:"MK Dons",s:1.5,l:"England - League One"},
{n:"Northampton Town",s:1.5,l:"England - League One"},
{n:"Oldham Athletic",s:1.5,l:"England - League One"},
{n:"Oxford United",s:1.5,l:"England - League One"},
{n:"Peterborough Utd",s:1.5,l:"England - League One"},
{n:"Plymouth Argyle",s:1.5,l:"England - League One"},
{n:"Rochdale",s:1.5,l:"England - League One"},
{n:"Rotherham United",s:1.5,l:"England - League One"},
{n:"Scunthorpe United",s:1.5,l:"England - League One"},
{n:"Shrewsbury Town",s:1.5,l:"England - League One"},
{n:"Southend United",s:1.5,l:"England - League One"},
{n:"Walsall",s:1.5,l:"England - League One"},
{n:"Coventry City",s:1.5,l:"England - League Two"},
{n:"Luton Town",s:1.5,l:"England - League Two"},
{n:"Swindon Town",s:1.5,l:"England - League Two"},
{n:"Wycombe Wanderers",s:1.5,l:"England - League Two"},
{n:"Accrington Stanley",s:1.0,l:"England - League Two"},
{n:"Barnet",s:1.0,l:"England - League Two"},
{n:"Cambridge United",s:1.0,l:"England - League Two"},
{n:"Carlisle United",s:1.0,l:"England - League Two"},
{n:"Cheltenham Town",s:1.0,l:"England - League Two"},
{n:"Chesterfield",s:1.0,l:"England - League Two"},
{n:"Colchester United",s:1.0,l:"England - League Two"},
{n:"Crawley Town",s:1.0,l:"England - League Two"},
{n:"Crewe Alexandra",s:1.0,l:"England - League Two"},
{n:"Exeter City",s:1.0,l:"England - League Two"},
{n:"Forest Green Rovers",s:1.0,l:"England - League Two"},
{n:"Grimsby Town",s:1.0,l:"England - League Two"},
{n:"Lincoln City",s:1.0,l:"England - League Two"},
{n:"Mansfield Town",s:1.0,l:"England - League Two"},
{n:"Morecambe",s:1.0,l:"England - League Two"},
{n:"Newport County",s:1.0,l:"England - League Two"},
{n:"Notts County",s:1.0,l:"England - League Two"},
{n:"Port Vale",s:1.0,l:"England - League Two"},
{n:"Stevenage",s:1.0,l:"England - League Two"},
{n:"Yeovil Town",s:1.0,l:"England - League Two"},
{n:"Paris Saint-Germain",s:5.0,l:"France - Ligue 1"},
{n:"AS Monaco",s:4.5,l:"France - Ligue 1"},
{n:"Olympique Lyon",s:4.5,l:"France - Ligue 1"},
{n:"Olympique Marseille",s:4.0,l:"France - Ligue 1"},
{n:"OGC Nice",s:3.5,l:"France - Ligue 1"},
{n:"LOSC Lille",s:3.0,l:"France - Ligue 1"},
{n:"Stade Rennais",s:3.0,l:"France - Ligue 1"},
{n:"Montpellier HSC",s:3.0,l:"France - Ligue 1"},
{n:"AS Saint-Étienne",s:3.0,l:"France - Ligue 1"},
{n:"Girondins de Bordeaux",s:3.0,l:"France - Ligue 1"},
{n:"EA Guingamp",s:2.5,l:"France - Ligue 1"},
{n:"RC Strasbourg",s:2.5,l:"France - Ligue 1"},
{n:"FC Nantes",s:2.5,l:"France - Ligue 1"},
{n:"Toulouse FC",s:2.5,l:"France - Ligue 1"},
{n:"Amiens SC",s:2.0,l:"France - Ligue 1"},
{n:"Angers SCO",s:2.0,l:"France - Ligue 1"},
{n:"Dijon FCO",s:2.0,l:"France - Ligue 1"},
{n:"ESTAC Troyes",s:2.0,l:"France - Ligue 1"},
{n:"FC Metz",s:2.0,l:"France - Ligue 1"},
{n:"SM Caen",s:2.0,l:"France - Ligue 1"},
{n:"RC Lens",s:2.0,l:"France - Ligue 2"},
{n:"AJ Auxerre",s:2.0,l:"France - Ligue 2"},
{n:"Stade de Reims",s:2.0,l:"France - Ligue 2"},
{n:"FC Lorient",s:2.0,l:"France - Ligue 2"},
{n:"Havre AC",s:2.0,l:"France - Ligue 2"},
{n:"Nîmes Olympique",s:2.0,l:"France - Ligue 2"},
{n:"AC Ajaccio",s:1.5,l:"France - Ligue 2"},
{n:"Stade Brestois 29",s:1.5,l:"France - Ligue 2"},
{n:"ASNL Nancy",s:1.5,l:"France - Ligue 2"},
{n:"Bourg en Bresse",s:1.5,l:"France - Ligue 2"},
{n:"Chamois Niortais",s:1.5,l:"France - Ligue 2"},
{n:"Clermont Foot",s:1.5,l:"France - Ligue 2"},
{n:"FCSM Sochaux",s:1.5,l:"France - Ligue 2"},
{n:"Gazélec Ajaccio",s:1.5,l:"France - Ligue 2"},
{n:"La Berrichonne",s:1.5,l:"France - Ligue 2"},
{n:"Paris FC",s:1.5,l:"France - Ligue 2"},
{n:"Quevilly Rouen",s:1.5,l:"France - Ligue 2"},
{n:"Tours FC",s:1.5,l:"France - Ligue 2"},
{n:"US Orléans",s:1.5,l:"France - Ligue 2"},
{n:"Valenciennes FC",s:1.5,l:"France - Ligue 2"},
{n:"Bayern Munich",s:5.0,l:"Germany - 1. Bundesliga"},
{n:"Borussia Dortmund",s:5.0,l:"Germany - 1. Bundesliga"},
{n:"Schalke 04",s:4.0,l:"Germany - 1. Bundesliga"},
{n:"Bayer Leverkusen",s:4.0,l:"Germany - 1. Bundesliga"},
{n:"RB Leipzig",s:4.0,l:"Germany - 1. Bundesliga"},
{n:"Borussia Mönchengladbach",s:3.5,l:"Germany - 1. Bundesliga"},
{n:"Wolfsburg",s:3.5,l:"Germany - 1. Bundesliga"},
{n:"Hoffenheim",s:3.5,l:"Germany - 1. Bundesliga"},
{n:"Eintracht Frankfurt",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"Hertha Berlin",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"Hamburger SV",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"Mainz 05",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"VfB Stuttgart",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"SC Freiburg",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"FC Augsburg",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"FC Köln",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"Werder Bremen",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"Hannover 96",s:3.0,l:"Germany - 1. Bundesliga"},
{n:"Fortuna Düsseldorf",s:2.5,l:"Germany - 2. Bundesliga"},
{n:"Holstein Kiel",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"1. FC Nürnberg",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"1. FC Kaiserslautern",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"Arminia Bielefeld",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"VfL Bochum",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"FC St. Pauli",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"Dynamo Dresden",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"1. FC Union Berlin",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"Greuther Fürth",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"Erzgebirge Aue",s:2.0,l:"Germany - 2. Bundesliga"},
{n:"FC Ingolstadt",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"1. FC Heidenheim",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"SV Darmstadt 98",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"SV Sandhausen",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"Eintracht Braunschweig",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"Jahn Regensburg",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"SC Paderborn 07",s:1.5,l:"Germany - 2. Bundesliga"},
{n:"1. FC Magdeburg",s:1.5,l:"Germany - 3. Liga"},
{n:"Karlsruher SC",s:1.5,l:"Germany - 3. Liga"},
{n:"Hansa Rostock",s:1.5,l:"Germany - 3. Liga"},
{n:"Hallescher FC",s:1.0,l:"Germany - 3. Liga"},
{n:"Carl Zeiss Jena",s:1.0,l:"Germany - 3. Liga"},
{n:"Chemnitzer FC",s:1.0,l:"Germany - 3. Liga"},
{n:"Fortuna Köln",s:1.0,l:"Germany - 3. Liga"},
{n:"FSV Zwickau",s:1.0,l:"Germany - 3. Liga"},
{n:"Preußen Münster",s:1.0,l:"Germany - 3. Liga"},
{n:"Rot-Weiß Erfurt",s:1.0,l:"Germany - 3. Liga"},
{n:"SG Großaspach",s:1.0,l:"Germany - 3. Liga"},
{n:"Sportfreunde Lotte",s:1.0,l:"Germany - 3. Liga"},
{n:"SV Meppen",s:1.0,l:"Germany - 3. Liga"},
{n:"SV Wehen Wiesbaden",s:1.0,l:"Germany - 3. Liga"},
{n:"SpVgg Unterhaching",s:1.0,l:"Germany - 3. Liga"},
{n:"VfL Osnabrück",s:1.0,l:"Germany - 3. Liga"},
{n:"VfR Aalen",s:1.0,l:"Germany - 3. Liga"},
{n:"Werder Bremen II",s:1.0,l:"Germany - 3. Liga"},
{n:"Würzburger Kickers",s:1.0,l:"Germany - 3. Liga"},
{n:"Ajax",s:4.5,l:"Holland - Eredivisie"},
{n:"PSV Eindhoven",s:4.5,l:"Holland - Eredivisie"},
{n:"Feyenoord",s:4.0,l:"Holland - Eredivisie"},
{n:"AZ Alkmaar",s:3.5,l:"Holland - Eredivisie"},
{n:"FC Utrecht",s:3.0,l:"Holland - Eredivisie"},
{n:"Vitesse",s:3.0,l:"Holland - Eredivisie"},
{n:"SC Heerenveen",s:2.5,l:"Holland - Eredivisie"},
{n:"FC Groningen",s:2.5,l:"Holland - Eredivisie"},
{n:"FC Twente",s:2.5,l:"Holland - Eredivisie"},
{n:"ADO Den Haag",s:2.0,l:"Holland - Eredivisie"},
{n:"Excelsior",s:2.0,l:"Holland - Eredivisie"},
{n:"Heracles Almelo",s:2.0,l:"Holland - Eredivisie"},
{n:"NAC Breda",s:2.0,l:"Holland - Eredivisie"},
{n:"PEC Zwolle",s:2.0,l:"Holland - Eredivisie"},
{n:"Roda JC",s:2.0,l:"Holland - Eredivisie"},
{n:"Sparta Rotterdam",s:2.0,l:"Holland - Eredivisie"},
{n:"VVV-Venlo",s:1.5,l:"Holland - Eredivisie"},
{n:"Willem II",s:2.0,l:"Holland - Eredivisie"},
{n:"Juventus",s:5.0,l:"Italy - Serie A"},
{n:"AS Roma",s:4.5,l:"Italy - Serie A"},
{n:"Napoli",s:4.5,l:"Italy - Serie A"},
{n:"Inter Milan",s:4.5,l:"Italy - Serie A"},
{n:"AC Milan",s:4.0,l:"Italy - Serie A"},
{n:"Lazio",s:4.0,l:"Italy - Serie A"},
{n:"Fiorentina",s:3.5,l:"Italy - Serie A"},
{n:"Atalanta",s:3.5,l:"Italy - Serie A"},
{n:"Sampdoria",s:3.5,l:"Italy - Serie A"},
{n:"Torino",s:3.0,l:"Italy - Serie A"},
{n:"Sassuolo",s:3.0,l:"Italy - Serie A"},
{n:"Udinese",s:3.0,l:"Italy - Serie A"},
{n:"Genoa",s:2.5,l:"Italy - Serie A"},
{n:"Cagliari",s:2.5,l:"Italy - Serie A"},
{n:"Bologna",s:2.5,l:"Italy - Serie A"},
{n:"Chievo Verona",s:2.5,l:"Italy - Serie A"},
{n:"Hellas Verona",s:2.0,l:"Italy - Serie A"},
{n:"Benevento",s:2.0,l:"Italy - Serie A"},
{n:"Crotone",s:2.0,l:"Italy - Serie A"},
{n:"SPAL",s:2.0,l:"Italy - Serie A"},
{n:"Empoli",s:2.5,l:"Italy - Serie B"},
{n:"Bari",s:2.0,l:"Italy - Serie B"},
{n:"Brescia",s:2.0,l:"Italy - Serie B"},
{n:"Palermo",s:2.0,l:"Italy - Serie B"},
{n:"Parma",s:2.0,l:"Italy - Serie B"},
{n:"Pescara",s:2.0,l:"Italy - Serie B"},
{n:"Frosinone",s:2.0,l:"Italy - Serie B"},
{n:"Venezia",s:2.0,l:"Italy - Serie B"},
{n:"Ascoli",s:1.5,l:"Italy - Serie B"},
{n:"Avellino",s:1.5,l:"Italy - Serie B"},
{n:"Carpi",s:1.5,l:"Italy - Serie B"},
{n:"Cesena",s:1.5,l:"Italy - Serie B"},
{n:"Cittadella",s:1.5,l:"Italy - Serie B"},
{n:"Cremonese",s:1.5,l:"Italy - Serie B"},
{n:"Foggia",s:1.5,l:"Italy - Serie B"},
{n:"Novara",s:1.5,l:"Italy - Serie B"},
{n:"Perugia",s:1.5,l:"Italy - Serie B"},
{n:"Pro Vercelli",s:1.5,l:"Italy - Serie B"},
{n:"Salernitana",s:1.5,l:"Italy - Serie B"},
{n:"Spezia",s:1.5,l:"Italy - Serie B"},
{n:"Ternana",s:1.5,l:"Italy - Serie B"},
{n:"Virtus Entella",s:1.5,l:"Italy - Serie B"},
{n:"Kashima Antlers",s:3.0,l:"Japan - J1 League"},
{n:"Urawa Reds",s:3.0,l:"Japan - J1 League"},
{n:"Kawasaki Frontale",s:3.0,l:"Japan - J1 League"},
{n:"Gamba Osaka",s:3.0,l:"Japan - J1 League"},
{n:"Cerezo Osaka",s:2.5,l:"Japan - J1 League"},
{n:"Yokohama F. Marinos",s:2.5,l:"Japan - J1 League"},
{n:"Albirex Niigata",s:2.0,l:"Japan - J1 League"},
{n:"F.C. Tokyo",s:2.5,l:"Japan - J1 League"},
{n:"Júbilo Iwata",s:2.0,l:"Japan - J1 League"},
{n:"Kashiwa Reysol",s:2.5,l:"Japan - J1 League"},
{n:"Omiya Ardija",s:2.0,l:"Japan - J1 League"},
{n:"Sagan Tosu",s:2.0,l:"Japan - J1 League"},
{n:"Sanfrecce Hiroshima",s:2.5,l:"Japan - J1 League"},
{n:"Shimizu S-Pulse",s:2.0,l:"Japan - J1 League"},
{n:"Vegalta Sendai",s:2.0,l:"Japan - J1 League"},
{n:"Ventforet Kofu",s:1.5,l:"Japan - J1 League"},
{n:"Vissel Kobe",s:2.0,l:"Japan - J1 League"},
{n:"Hokkaido Consadole",s:1.5,l:"Japan - J1 League"},
{n:"FC Seoul",s:2.5,l:"Korea - K League 1"},
{n:"Jeonbuk Hyundai Motors",s:3.0,l:"Korea - K League 1"},
{n:"Ulsan Hyundai",s:2.5,l:"Korea - K League 1"},
{n:"Daegu FC",s:2.0,l:"Korea - K League 1"},
{n:"Gangwon FC",s:2.0,l:"Korea - K League 1"},
{n:"Gyeongnam FC",s:2.0,l:"Korea - K League 1"},
{n:"Incheon United",s:2.0,l:"Korea - K League 1"},
{n:"Jeju United",s:2.0,l:"Korea - K League 1"},
{n:"Jeonnam Dragons",s:2.0,l:"Korea - K League 1"},
{n:"Pohang Steelers",s:2.0,l:"Korea - K League 1"},
{n:"Sangju Sangmu",s:2.0,l:"Korea - K League 1"},
{n:"Seongnam FC",s:2.0,l:"Korea - K League 1"},
{n:"América",s:3.5,l:"Mexico - Liga MX"},
{n:"Chivas Guadalajara",s:3.5,l:"Mexico - Liga MX"},
{n:"Cruz Azul",s:3.0,l:"Mexico - Liga MX"},
{n:"Tigres UANL",s:3.5,l:"Mexico - Liga MX"},
{n:"Monterrey",s:3.5,l:"Mexico - Liga MX"},
{n:"UNAM Pumas",s:3.0,l:"Mexico - Liga MX"},
{n:"Atlas",s:2.5,l:"Mexico - Liga MX"},
{n:"Deportivo Toluca",s:3.0,l:"Mexico - Liga MX"},
{n:"Tijuana",s:2.5,l:"Mexico - Liga MX"},
{n:"Santos Laguna",s:3.0,l:"Mexico - Liga MX"},
{n:"Pachuca",s:3.0,l:"Mexico - Liga MX"},
{n:"León",s:2.5,l:"Mexico - Liga MX"},
{n:"Necaxa",s:2.0,l:"Mexico - Liga MX"},
{n:"Lobos BUAP",s:2.0,l:"Mexico - Liga MX"},
{n:"Morelia",s:2.5,l:"Mexico - Liga MX"},
{n:"Puebla",s:2.5,l:"Mexico - Liga MX"},
{n:"Querétaro",s:2.0,l:"Mexico - Liga MX"},
{n:"Veracruz",s:2.0,l:"Mexico - Liga MX"},
{n:"Rosenborg BK",s:3.0,l:"Norway - Eliteserien"},
{n:"Molde FK",s:3.0,l:"Norway - Eliteserien"},
{n:"Brann",s:2.5,l:"Norway - Eliteserien"},
{n:"Stabæk",s:2.5,l:"Norway - Eliteserien"},
{n:"Vålerenga",s:2.5,l:"Norway - Eliteserien"},
{n:"IK Start",s:2.0,l:"Norway - Eliteserien"},
{n:"Odd BK",s:2.0,l:"Norway - Eliteserien"},
{n:"Sarpsborg 08",s:2.0,l:"Norway - Eliteserien"},
{n:"Strømsgodset",s:2.0,l:"Norway - Eliteserien"},
{n:"Tromsø IL",s:2.0,l:"Norway - Eliteserien"},
{n:"Viking FK",s:2.5,l:"Norway - Eliteserien"},
{n:"Haugesund",s:2.0,l:"Norway - Eliteserien"},
{n:"Kristiansund BK",s:1.5,l:"Norway - Eliteserien"},
{n:"Lillestrøm SK",s:2.0,l:"Norway - Eliteserien"},
{n:"Mjøndalen",s:1.5,l:"Norway - Eliteserien"},
{n:"Sandefjord",s:1.5,l:"Norway - Eliteserien"},
{n:"Legia Warszawa",s:3.5,l:"Poland - Ekstraklasa"},
{n:"Lech Poznań",s:3.0,l:"Poland - Ekstraklasa"},
{n:"Wisła Kraków",s:3.0,l:"Poland - Ekstraklasa"},
{n:"Lechia Gdańsk",s:2.5,l:"Poland - Ekstraklasa"},
{n:"Cracovia",s:2.5,l:"Poland - Ekstraklasa"},
{n:"Zagłębie Lubin",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Jagiellonia",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Śląsk Wrocław",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Arka Gdynia",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Korona Kielce",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Piast Gliwice",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Pogoń Szczecin",s:2.0,l:"Poland - Ekstraklasa"},
{n:"Sandecja Nowy Sącz",s:1.5,l:"Poland - Ekstraklasa"},
{n:"Termalica",s:1.5,l:"Poland - Ekstraklasa"},
{n:"Wisła Płock",s:1.5,l:"Poland - Ekstraklasa"},
{n:"Górnik Zabrze",s:2.0,l:"Poland - Ekstraklasa"},
{n:"FC Porto",s:4.5,l:"Portugal - Primeira Liga"},
{n:"SL Benfica",s:4.5,l:"Portugal - Primeira Liga"},
{n:"Sporting CP",s:4.0,l:"Portugal - Primeira Liga"},
{n:"SC Braga",s:3.5,l:"Portugal - Primeira Liga"},
{n:"Vitória Guimarães",s:3.0,l:"Portugal - Primeira Liga"},
{n:"Rio Ave",s:2.5,l:"Portugal - Primeira Liga"},
{n:"CD Aves",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Boavista",s:2.5,l:"Portugal - Primeira Liga"},
{n:"Estoril Praia",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Feirense",s:2.0,l:"Portugal - Primeira Liga"},
{n:"GD Chaves",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Marítimo",s:2.5,l:"Portugal - Primeira Liga"},
{n:"Moreirense FC",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Nacional",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Paços de Ferreira",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Portimonense",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Setúbal",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Tondela",s:2.0,l:"Portugal - Primeira Liga"},
{n:"Dundalk",s:2.5,l:"Ireland - SSE Airtricity"},
{n:"Cork City",s:2.0,l:"Ireland - SSE Airtricity"},
{n:"Shamrock Rovers",s:2.0,l:"Ireland - SSE Airtricity"},
{n:"Bohemian",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Derry City",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Drogheda United",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Finn Harps",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Galway United",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Limerick",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Longford Town",s:1.0,l:"Ireland - SSE Airtricity"},
{n:"St. Patrick's",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"Sligo Rovers",s:1.5,l:"Ireland - SSE Airtricity"},
{n:"CSKA Moscú",s:4.0,l:"Russia - Premier Liga"},
{n:"Spartak Moscú",s:4.0,l:"Russia - Premier Liga"},
{n:"Zenit S.Petersburgo",s:4.0,l:"Russia - Premier Liga"},
{n:"Lokomotiv Moscú",s:3.5,l:"Russia - Premier Liga"},
{n:"Krasnodar",s:3.5,l:"Russia - Premier Liga"},
{n:"Dynamo Moscú",s:3.0,l:"Russia - Premier Liga"},
{n:"Rubin Kazan",s:3.0,l:"Russia - Premier Liga"},
{n:"CSKA Moscú II",s:2.5,l:"Russia - Premier Liga"},
{n:"FK Ufa",s:2.0,l:"Russia - Premier Liga"},
{n:"Akhmat Grozny",s:2.0,l:"Russia - Premier Liga"},
{n:"Arsenal Tula",s:2.0,l:"Russia - Premier Liga"},
{n:"Amkar Perm",s:2.0,l:"Russia - Premier Liga"},
{n:"Ural Ekaterinburg",s:2.0,l:"Russia - Premier Liga"},
{n:"FK Tosno",s:2.0,l:"Russia - Premier Liga"},
{n:"Rostov",s:3.0,l:"Russia - Premier Liga"},
{n:"Terek",s:2.5,l:"Russia - Premier Liga"},
{n:"Al Hilal",s:3.0,l:"Saudi Arabia - Pro League"},
{n:"Al Ittihad",s:2.5,l:"Saudi Arabia - Pro League"},
{n:"Al Ahli",s:2.5,l:"Saudi Arabia - Pro League"},
{n:"Al Nassr",s:2.5,l:"Saudi Arabia - Pro League"},
{n:"Al Batin",s:1.5,l:"Saudi Arabia - Pro League"},
{n:"Al Faisaly",s:1.5,l:"Saudi Arabia - Pro League"},
{n:"Al Fateh",s:2.0,l:"Saudi Arabia - Pro League"},
{n:"Al Fayha",s:1.5,l:"Saudi Arabia - Pro League"},
{n:"Al Qadisiyah",s:1.5,l:"Saudi Arabia - Pro League"},
{n:"Al Raed",s:1.5,l:"Saudi Arabia - Pro League"},
{n:"Al Shabab (KSA)",s:2.0,l:"Saudi Arabia - Pro League"},
{n:"Al Taawoun",s:2.0,l:"Saudi Arabia - Pro League"},
{n:"Ettifaq FC",s:2.0,l:"Saudi Arabia - Pro League"},
{n:"Ohod Club",s:1.5,l:"Saudi Arabia - Pro League"},
{n:"Celtic FC",s:4.0,l:"Scotland - Premiership"},
{n:"Rangers FC",s:3.5,l:"Scotland - Premiership"},
{n:"Aberdeen FC",s:3.0,l:"Scotland - Premiership"},
{n:"Hearts FC",s:2.5,l:"Scotland - Premiership"},
{n:"Hibernian",s:2.5,l:"Scotland - Premiership"},
{n:"Kilmarnock",s:2.0,l:"Scotland - Premiership"},
{n:"Motherwell",s:2.0,l:"Scotland - Premiership"},
{n:"Partick Thistle",s:2.0,l:"Scotland - Premiership"},
{n:"Ross County",s:1.5,l:"Scotland - Premiership"},
{n:"St. Johnstone",s:2.0,l:"Scotland - Premiership"},
{n:"Dundee FC",s:2.0,l:"Scotland - Premiership"},
{n:"Hamilton Academical",s:1.5,l:"Scotland - Premiership"},
{n:"Real Madrid",s:5.0,l:"Spain - La Liga"},
{n:"FC Barcelona",s:5.0,l:"Spain - La Liga"},
{n:"Atlético de Madrid",s:5.0,l:"Spain - La Liga"},
{n:"Sevilla FC",s:4.5,l:"Spain - La Liga"},
{n:"Villarreal CF",s:4.0,l:"Spain - La Liga"},
{n:"Valencia CF",s:4.0,l:"Spain - La Liga"},
{n:"Athletic Club",s:3.5,l:"Spain - La Liga"},
{n:"Real Sociedad",s:3.5,l:"Spain - La Liga"},
{n:"Celta de Vigo",s:3.5,l:"Spain - La Liga"},
{n:"Real Betis",s:3.5,l:"Spain - La Liga"},
{n:"Málaga CF",s:3.0,l:"Spain - La Liga"},
{n:"Deportivo Alavés",s:3.0,l:"Spain - La Liga"},
{n:"RCD Espanyol",s:3.0,l:"Spain - La Liga"},
{n:"SD Eibar",s:3.0,l:"Spain - La Liga"},
{n:"Girona FC",s:3.0,l:"Spain - La Liga"},
{n:"Getafe CF",s:2.5,l:"Spain - La Liga"},
{n:"CD Leganés",s:2.5,l:"Spain - La Liga"},
{n:"Levante UD",s:2.5,l:"Spain - La Liga"},
{n:"UD Las Palmas",s:2.5,l:"Spain - La Liga"},
{n:"RC Deportivo",s:2.5,l:"Spain - La Liga"},
{n:"FC Barcelona B",s:2.5,l:"Spain - Segunda División"},
{n:"Sevilla Atlético",s:2.5,l:"Spain - Segunda División"},
{n:"Real Sporting (Gijón)",s:2.5,l:"Spain - Segunda División"},
{n:"Real Valladolid",s:2.5,l:"Spain - Segunda División"},
{n:"Real Zaragoza",s:2.0,l:"Spain - Segunda División"},
{n:"Rayo Vallecano",s:2.0,l:"Spain - Segunda División"},
{n:"SD Huesca",s:2.0,l:"Spain - Segunda División"},
{n:"AD Alcorcón",s:2.0,l:"Spain - Segunda División"},
{n:"Albacete BP",s:2.0,l:"Spain - Segunda División"},
{n:"CA Osasuna",s:2.0,l:"Spain - Segunda División"},
{n:"Cádiz CF",s:2.0,l:"Spain - Segunda División"},
{n:"CD Tenerife",s:2.0,l:"Spain - Segunda División"},
{n:"Granada CF",s:2.0,l:"Spain - Segunda División"},
{n:"UD Almería",s:2.0,l:"Spain - Segunda División"},
{n:"Real Oviedo",s:2.0,l:"Spain - Segunda División"},
{n:"CD Lugo",s:1.5,l:"Spain - Segunda División"},
{n:"CD Numancia",s:1.5,l:"Spain - Segunda División"},
{n:"CF Reus",s:1.5,l:"Spain - Segunda División"},
{n:"Córdoba CF",s:1.5,l:"Spain - Segunda División"},
{n:"Cultural Leonesa",s:1.5,l:"Spain - Segunda División"},
{n:"Lorca FC",s:1.5,l:"Spain - Segunda División"},
{n:"Nàstic de Tarragona",s:1.5,l:"Spain - Segunda División"},
{n:"IFK Göteborg",s:3.0,l:"Sweden - Allsvenskan"},
{n:"Malmö FF",s:3.0,l:"Sweden - Allsvenskan"},
{n:"AIK",s:2.5,l:"Sweden - Allsvenskan"},
{n:"IF Elfsborg",s:2.5,l:"Sweden - Allsvenskan"},
{n:"IFK Norrköping",s:2.5,l:"Sweden - Allsvenskan"},
{n:"AFC Eskilstuna",s:2.0,l:"Sweden - Allsvenskan"},
{n:"BK Häcken",s:2.0,l:"Sweden - Allsvenskan"},
{n:"Djurgårdens IF",s:2.5,l:"Sweden - Allsvenskan"},
{n:"GIF Sundsvall",s:2.0,l:"Sweden - Allsvenskan"},
{n:"Halmstads BK",s:2.0,l:"Sweden - Allsvenskan"},
{n:"Hammarby IF",s:2.5,l:"Sweden - Allsvenskan"},
{n:"IK Sirius",s:2.0,l:"Sweden - Allsvenskan"},
{n:"J-Södra",s:1.5,l:"Sweden - Allsvenskan"},
{n:"Kalmar FF",s:2.0,l:"Sweden - Allsvenskan"},
{n:"Örebro SK",s:2.0,l:"Sweden - Allsvenskan"},
{n:"Östersunds FK",s:2.5,l:"Sweden - Allsvenskan"},
{n:"FC Basel",s:4.0,l:"Switzerland - Super League"},
{n:"BSC Young Boys",s:3.0,l:"Switzerland - Super League"},
{n:"Grasshopper Club",s:2.5,l:"Switzerland - Super League"},
{n:"FC Zürich",s:2.5,l:"Switzerland - Super League"},
{n:"FC Lausanne-Sport",s:2.0,l:"Switzerland - Super League"},
{n:"FC Lugano",s:2.0,l:"Switzerland - Super League"},
{n:"FC Luzern",s:2.0,l:"Switzerland - Super League"},
{n:"FC Sion",s:2.0,l:"Switzerland - Super League"},
{n:"FC St. Gallen",s:2.0,l:"Switzerland - Super League"},
{n:"FC Thun",s:2.0,l:"Switzerland - Super League"},
{n:"Beşiktaş",s:4.0,l:"Turkey - Süper Lig"},
{n:"Fenerbahçe",s:4.0,l:"Turkey - Süper Lig"},
{n:"Galatasaray",s:4.0,l:"Turkey - Süper Lig"},
{n:"Başakşehir",s:3.0,l:"Turkey - Süper Lig"},
{n:"Trabzonspor",s:3.0,l:"Turkey - Süper Lig"},
{n:"Bursaspor",s:2.5,l:"Turkey - Süper Lig"},
{n:"Akhisarspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Alanyaspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Antalyaspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Gençlerbirliği",s:2.0,l:"Turkey - Süper Lig"},
{n:"Göztepe",s:2.0,l:"Turkey - Süper Lig"},
{n:"Karabükspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Kasımpaşa",s:2.0,l:"Turkey - Süper Lig"},
{n:"Kayserispor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Konyaspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Osmanlıspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Sivasspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"Yeni Malatyaspor",s:2.0,l:"Turkey - Süper Lig"},
{n:"LA Galaxy",s:3.5,l:"USA/Canada - MLS"},
{n:"Toronto FC",s:3.5,l:"USA/Canada - MLS"},
{n:"Seattle Sounders",s:3.0,l:"USA/Canada - MLS"},
{n:"Atlanta United",s:3.0,l:"USA/Canada - MLS"},
{n:"New York City FC",s:3.0,l:"USA/Canada - MLS"},
{n:"NY Red Bulls",s:3.0,l:"USA/Canada - MLS"},
{n:"Portland Timbers",s:2.5,l:"USA/Canada - MLS"},
{n:"Sporting KC",s:2.5,l:"USA/Canada - MLS"},
{n:"Chicago Fire",s:2.5,l:"USA/Canada - MLS"},
{n:"Colorado Rapids",s:2.0,l:"USA/Canada - MLS"},
{n:"Columbus Crew SC",s:2.5,l:"USA/Canada - MLS"},
{n:"D.C. United",s:2.0,l:"USA/Canada - MLS"},
{n:"FC Dallas",s:2.5,l:"USA/Canada - MLS"},
{n:"Houston Dynamo",s:2.5,l:"USA/Canada - MLS"},
{n:"Impact Montréal",s:2.0,l:"USA/Canada - MLS"},
{n:"Minnesota United",s:2.0,l:"USA/Canada - MLS"},
{n:"New England Revolution",s:2.0,l:"USA/Canada - MLS"},
{n:"Orlando City",s:2.0,l:"USA/Canada - MLS"},
{n:"Philadelphia Union",s:2.0,l:"USA/Canada - MLS"},
{n:"Real Salt Lake",s:2.5,l:"USA/Canada - MLS"},
{n:"SJ Earthquakes",s:2.0,l:"USA/Canada - MLS"},
{n:"Vancouver Whitecaps",s:2.0,l:"USA/Canada - MLS"},
{n:"Shakhtar Donetsk",s:4.0,l:"Rest of the World"},
{n:"AEK Athens",s:2.5,l:"Rest of the World"},
{n:"Olympiakos CFP",s:3.0,l:"Rest of the World"},
{n:"Panathinaikos",s:2.5,l:"Rest of the World"},
{n:"PAOK",s:2.5,l:"Rest of the World"},
{n:"Sparta Praha",s:2.5,l:"Rest of the World"},
{n:"HJK Helsinki",s:2.0,l:"Rest of the World"},
{n:"Kaizer Chiefs",s:2.0,l:"Rest of the World"},
{n:"Orlando Pirates",s:2.0,l:"Rest of the World"},
{n:"Alemania",s:5.0,l:"Selecciones Nacionales"},
{n:"Brasil",s:5.0,l:"Selecciones Nacionales"},
{n:"Argentina",s:5.0,l:"Selecciones Nacionales"},
{n:"Francia",s:4.5,l:"Selecciones Nacionales"},
{n:"España",s:4.5,l:"Selecciones Nacionales"},
{n:"Bélgica",s:4.5,l:"Selecciones Nacionales"},
{n:"Portugal",s:4.5,l:"Selecciones Nacionales"},
{n:"Colombia",s:4.0,l:"Selecciones Nacionales"},
{n:"Uruguay",s:4.0,l:"Selecciones Nacionales"},
{n:"Chile",s:4.0,l:"Selecciones Nacionales"},
{n:"Italia",s:4.0,l:"Selecciones Nacionales"},
{n:"Inglaterra",s:4.5,l:"Selecciones Nacionales"},
{n:"Croacia",s:3.5,l:"Selecciones Nacionales"},
{n:"México",s:3.5,l:"Selecciones Nacionales"},
{n:"Perú",s:3.5,l:"Selecciones Nacionales"},
{n:"Suiza",s:3.5,l:"Selecciones Nacionales"},
{n:"Suecia",s:3.5,l:"Selecciones Nacionales"},
{n:"Dinamarca",s:3.5,l:"Selecciones Nacionales"},
{n:"Polonia",s:3.5,l:"Selecciones Nacionales"},
{n:"Holanda",s:4.0,l:"Selecciones Nacionales"},
{n:"Estados Unidos",s:3.0,l:"Selecciones Nacionales"},
{n:"Gales",s:3.5,l:"Selecciones Nacionales"},
{n:"Austria",s:3.0,l:"Selecciones Nacionales"},
{n:"Costa Rica",s:3.0,l:"Selecciones Nacionales"},
{n:"Ecuador",s:3.0,l:"Selecciones Nacionales"},
{n:"Escocia",s:3.0,l:"Selecciones Nacionales"},
{n:"Ghana",s:3.0,l:"Selecciones Nacionales"},
{n:"Hungría",s:3.0,l:"Selecciones Nacionales"},
{n:"Irlanda",s:3.0,l:"Selecciones Nacionales"},
{n:"Islandia",s:3.0,l:"Selecciones Nacionales"},
{n:"Japón",s:3.0,l:"Selecciones Nacionales"},
{n:"Corea del Sur",s:3.0,l:"Selecciones Nacionales"},
{n:"Marruecos",s:3.0,l:"Selecciones Nacionales"},
{n:"Nigeria",s:3.0,l:"Selecciones Nacionales"},
{n:"Paraguay",s:3.0,l:"Selecciones Nacionales"},
{n:"Rep. Checa",s:3.0,l:"Selecciones Nacionales"},
{n:"Rumanía",s:3.0,l:"Selecciones Nacionales"},
{n:"Rusia",s:3.5,l:"Selecciones Nacionales"},
{n:"Senegal",s:3.0,l:"Selecciones Nacionales"},
{n:"Turquía",s:3.0,l:"Selecciones Nacionales"},
{n:"Argelia",s:2.5,l:"Selecciones Nacionales"},
{n:"Arabia Saudita",s:2.5,l:"Selecciones Nacionales"},
{n:"Australia",s:2.5,l:"Selecciones Nacionales"},
{n:"Bolivia",s:2.5,l:"Selecciones Nacionales"},
{n:"Camerún",s:2.5,l:"Selecciones Nacionales"},
{n:"Costa de Marfil",s:2.5,l:"Selecciones Nacionales"},
{n:"Egipto",s:2.5,l:"Selecciones Nacionales"},
{n:"Eslovenia",s:2.5,l:"Selecciones Nacionales"},
{n:"Grecia",s:2.5,l:"Selecciones Nacionales"},
{n:"Irán",s:2.5,l:"Selecciones Nacionales"},
{n:"Jamaica",s:2.0,l:"Selecciones Nacionales"},
{n:"Noruega",s:2.5,l:"Selecciones Nacionales"},
{n:"Nueva Zelanda",s:2.0,l:"Selecciones Nacionales"},
{n:"Panamá",s:2.0,l:"Selecciones Nacionales"},
{n:"Venezuela",s:2.5,l:"Selecciones Nacionales"},
{n:"China",s:2.0,l:"Selecciones Nacionales"},
{n:"India",s:1.5,l:"Selecciones Nacionales"},
{n:"Zambia",s:1.5,l:"Selecciones Nacionales"}
];

// Scoring por estrellas oficiales FIFA 18
// Victoria base: 3pts | Empate: 1pt | Derrota: 0pts
// Por cada 1.5★ que el ganador tenga MENOS que el perdedor: +0.5pts
// Diferencia de 3+ goles: +0.5pts extra

// ══════════════════════════════════════════════════════════════
// WORKER — único punto de conexión, todas las keys son secretas
// Reemplazá TU_WORKER_URL con la URL de tu Worker de Cloudflare
// Ejemplo: https://tpc-worker.tuusuario.workers.dev
// ══════════════════════════════════════════════════════════════
const WORKER_URL = 'https://tpc-worker.aburgos-44f.workers.dev';

// ── Estado local ─────────────────────────────────────────────
let state = { players: [], matches: [] };
let _temporadaId = 1;
let _jugadoresMap = {};

// ── Carga inicial — al abrir la página ───────────────────────
async function initSupabase() {
  try {
    const data = await apiGet('/api/estado');
    state.players   = data.players   || [];
    state.matches   = data.matches   || [];
    _temporadaId    = data.temporadaId || 1;
    _jugadoresMap   = data.jugadoresMap || {};
    localStorage.setItem('fifa18_v2', JSON.stringify(state));
    renderAll();
  } catch(e) {
    console.warn('Worker error, usando localStorage:', e.message);
    const local = localStorage.getItem('fifa18_v2');
    state = local ? JSON.parse(local) : { players: [], matches: [] };
    renderAll();
  }
}

// ── Helpers de fetch al Worker ────────────────────────────────
async function apiGet(path) {
  const r = await fetch(WORKER_URL + path);
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

async function apiPost(path, body) {
  const r = await fetch(WORKER_URL + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

async function apiDelete(path, body) {
  const r = await fetch(WORKER_URL + path, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

// ── Cargar datos ──────────────────────────────────────────────
async function _cargarDatos() {
  try {
    const data = await apiGet('/api/estado');
    state.players   = data.players   || [];
    state.matches   = data.matches   || [];
    _temporadaId    = data.temporadaId || 1;
    _jugadoresMap   = data.jugadoresMap || {};
    localStorage.setItem('fifa18_v2', JSON.stringify(state));
    renderAll();
  } catch(e) {
    console.warn('Error cargando datos:', e.message);
    renderAll();
  }
}

// ── Guardar jugador ───────────────────────────────────────────
async function savePlayer(nombre, password) {
  const data = await apiPost('/api/jugadores', { nombre, password });
  if (data.jugador) _jugadoresMap[nombre] = data.jugador.id;
}

// ── Eliminar jugador ──────────────────────────────────────────
async function removePlayerDB(nombre, password) {
  const id = _jugadoresMap[nombre];
  if (!id) return;
  await apiDelete(`/api/jugadores/${id}`, { password });
  delete _jugadoresMap[nombre];
}

// ── Guardar partido ───────────────────────────────────────────
async function saveMatch(m, password) {
  return apiPost('/api/partidos', {
    ...m,
    temporadaId: _temporadaId,
    jugadoresMap: _jugadoresMap,
    password
  });
}

// ── Eliminar partido ──────────────────────────────────────────
async function deleteMatchDB(id, password) {
  return apiDelete(`/api/partidos/${id}`, { password });
}

// ── YouTube (via Worker) ──────────────────────────────────────
async function fetchYouTubeVideos(latest = false) {
  return apiGet(latest ? '/api/youtube/latest' : '/api/youtube');
}

// ── Scan de foto (via Worker) ─────────────────────────────────
async function scanImage(image_base64, media_type, team_list) {
  return apiPost('/api/scan', { image_base64, media_type, team_list });
}
function save() {
  // localStorage como respaldo
  localStorage.setItem('fifa18_v2', JSON.stringify(state));
}

// Arrancar
initSupabase();

function calcPts(winner, loser, gd){
  // starsDiff > 0 significa que el ganador tiene MENOS estrellas (upet → bonus)
  const starsDiff = loser.s - winner.s;
  let pts = 3;
  if(starsDiff > 0){
    // +0.5 por cada 1.5 estrellas de diferencia (redondeado hacia abajo)
    pts += Math.floor(starsDiff / 1.5) * 0.5;
  }
  if(gd >= 3) pts += 0.5;
  return Math.round(pts * 10) / 10;
}
function calcDrawPts(t1, t2){
  // Empate: 1pt fijo para ambos
  return [1, 1];
}

document.querySelectorAll('.nav-tab').forEach(tab=>{
  tab.addEventListener('click',function(){
    // Ignorar el dropdown trigger — tiene su propio handler
    if(this.id === 'admin-trigger') return;
    const pageId = 'page-' + this.dataset.page;
    const pageEl = document.getElementById(pageId);
    if(!pageEl) return;
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
    document.getElementById('admin-menu')?.classList.remove('open');
    pageEl.classList.add('active');
    this.classList.add('active');
    renderAll();
  });
});

function renderAll(){
  renderStats();renderLadder();renderRecentMatches();
  renderPlayersList();renderAllMatches();renderTeamsPage();
  populatePlayerSelects();populateCountryLeagueFilters();
}

function buildLadder(){
  const m={};
  state.players.forEach(p=>{m[p]={name:p,pts:0,w:0,l:0,d:0,gf:0,ga:0,played:0,form:[]}});
  state.matches.forEach(x=>{
    [x.p1,x.p2].forEach(p=>{if(!m[p])m[p]={name:p,pts:0,w:0,l:0,d:0,gf:0,ga:0,played:0,form:[]}});
    m[x.p1].gf+=x.g1;m[x.p1].ga+=x.g2;m[x.p1].played++;
    m[x.p2].gf+=x.g2;m[x.p2].ga+=x.g1;m[x.p2].played++;
    if(x.g1>x.g2){
      m[x.p1].pts+=x.pts1;m[x.p1].w++;m[x.p1].form.push('V');
      m[x.p2].l++;m[x.p2].form.push('D');
    } else if(x.g2>x.g1){
      m[x.p2].pts+=x.pts2;m[x.p2].w++;m[x.p2].form.push('V');
      m[x.p1].l++;m[x.p1].form.push('D');
    } else {
      m[x.p1].pts+=x.pts1;m[x.p1].d++;m[x.p1].form.push('E');
      m[x.p2].pts+=x.pts2;m[x.p2].d++;m[x.p2].form.push('E');
    }
  });
  return Object.values(m).map(p=>({
    ...p,
    avg: p.played>0 ? Math.round((p.pts/p.played)*100)/100 : 0,
    recentForm: p.form.slice(-5)
  })).sort((a,b)=>b.avg-a.avg||(b.gf-b.ga)-(a.gf-a.ga));
}

// Genera badge de estrellas. Acepta objeto equipo o número de estrellas.
function tb(teamOrStars){
  const s = typeof teamOrStars === 'object' ? teamOrStars.s : teamOrStars;
  const full = Math.floor(s);
  const half = (s % 1) >= 0.5 ? 1 : 0;
  const stars = '★'.repeat(full) + (half ? '½' : '');
  // Color según rango
  let cls = s >= 4.5 ? 'tier-S' : s >= 3.5 ? 'tier-A' : s >= 2.5 ? 'tier-B' : 'tier-C';
  return `<span class="tier-badge ${cls}">${stars}</span>`;
}

function renderStats(){
  const el=document.getElementById('stats-grid');if(!el)return;
  const l=buildLadder();const tg=state.matches.reduce((s,m)=>s+m.g1+m.g2,0);
  const leader=l.find(p=>p.played>=15);
  el.innerHTML=`<div class="stat-card"><div class="stat-val">${state.matches.length}</div><div class="stat-label">Partidos</div></div>
    <div class="stat-card"><div class="stat-val">${state.players.length}</div><div class="stat-label">Jugadores</div></div>
    <div class="stat-card"><div class="stat-val">${tg}</div><div class="stat-label">Goles</div></div>
    <div class="stat-card"><div class="stat-val" style="font-size:1.2rem;color:var(--gold)">${leader?leader.name:'—'}</div><div class="stat-label">Líder</div></div>`;
}

function formBadge(r){
  const cfg={V:{bg:'rgba(0,230,118,.18)',color:'#00e676'},D:{bg:'rgba(255,82,82,.18)',color:'#ff5252'},E:{bg:'rgba(255,171,64,.18)',color:'#ffab40'}};
  const c=cfg[r]||{bg:'rgba(255,255,255,.1)',color:'#fff'};
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:3px;font-family:'Barlow Condensed',sans-serif;font-size:.65rem;font-weight:700;background:${c.bg};color:${c.color};border:1px solid ${c.color}40">${r}</span>`;
}
function renderLadder(){
  const el = document.getElementById('ladder-body');
  if (!el) return;
  const todos = buildLadder();
  if (!todos.length) {
    el.innerHTML = '<div class="ldr-empty">Sin jugadores registrados</div>';
    return;
  }

  const MIN = 15;
  const clasificados   = todos.filter(p => p.played >= MIN);
  const noClasificados = todos.filter(p => p.played <  MIN);

  function formaHTML(form) {
    if (!form || !form.length) return '<span style="color:var(--gray2);font-size:.8rem">—</span>';
    return form.map(r => {
      const cfg = {
        V: {bg:'rgba(0,200,83,.22)',  c:'#00e676'},
        D: {bg:'rgba(255,82,82,.22)', c:'#ff5252'},
        E: {bg:'rgba(255,171,64,.22)',c:'#ffab40'}
      };
      const s = cfg[r] || {bg:'rgba(150,150,150,.2)',c:'#aaa'};
      return `<span class="ldr-fbadge" style="background:${s.bg};color:${s.c}">${r}</span>`;
    }).join('');
  }

  function rowClasificado(p, i) {
    const medal = ['🥇','🥈','🥉'][i] || '';
    return `<div class="ldr-row${i<3?' ldr-top':''}">
      <div class="ldr-c-pos">${medal ? `<span class="ldr-medal">${medal}</span>` : `<span class="ldr-num">${i+1}</span>`}</div>
      <div class="ldr-c-info">
        <span class="ldr-name">${p.name}</span>
        <span class="ldr-meta">${p.played}PJ &middot; ${p.w}V ${p.d}E ${p.l}D</span>
      </div>
      <div class="ldr-c-prom">
        <span class="ldr-prom">${p.avg.toFixed(2)}</span>
        <span class="ldr-prom-lbl">prom</span>
      </div>
      <div class="ldr-c-forma">${formaHTML(p.recentForm)}</div>
    </div>`;
  }

  function rowUnranked(p) {
    return `<div class="ldr-row ldr-unranked">
      <div class="ldr-c-pos"><span class="ldr-num" style="color:var(--gray2);opacity:.5">—</span></div>
      <div class="ldr-c-info">
        <span class="ldr-name" style="color:var(--gray)">${p.name}</span>
        <span class="ldr-meta" style="color:rgba(186,120,101,.4)">
          ${p.played}<span class="ldr-meta-lbl">PJ</span>
          &nbsp;
          <span class="ldr-ved ldr-v" style="opacity:.5">${p.w}V</span>
          <span class="ldr-ved ldr-e" style="opacity:.5">${p.d}E</span>
          <span class="ldr-ved ldr-d" style="opacity:.5">${p.l}D</span>
        </span>
      </div>
      <div class="ldr-c-prom">
        <span class="ldr-prom" style="font-size:.85rem;-webkit-text-fill-color:var(--gray2);color:var(--gray2)">${p.avg > 0 ? p.avg.toFixed(2) : '—'}</span>
        <span class="ldr-prom-lbl">prom</span>
      </div>
      <div class="ldr-c-forma">${formaHTML(p.recentForm)}</div>
    </div>`;
  }

  let out = `<div class="ldr-thead">
    <div class="ldr-c-pos">#</div>
    <div class="ldr-c-info">Jugador</div>
    <div class="ldr-c-prom">Prom</div>
    <div class="ldr-c-forma">Forma</div>
  </div>`;

  if (!clasificados.length) {
    out += `<div class="ldr-empty">Ningún jugador tiene ${MIN}+ partidos aún</div>`;
  } else {
    out += clasificados.map((p,i) => rowClasificado(p,i)).join('');
  }

  if (noClasificados.length) {
    out += `<div class="ldr-sep"><span>⏳ Sin clasificar — mín. ${MIN} partidos</span></div>`;
    out += noClasificados.map(p => rowUnranked(p)).join('');
  }

  el.innerHTML = out;
}


function renderRecentMatches(){
  const el=document.getElementById('recent-matches');if(!el)return;
  const r=[...state.matches].reverse().slice(0,5);
  if(!r.length){el.innerHTML='<div class="empty-state"><span class="big">⚽</span>Sin partidos</div>';return;}
  el.innerHTML=r.map(m=>{
    const r1=m.g1>m.g2?'win':m.g1<m.g2?'loss':'draw';
    return`<div class="match-card">
      <div class="match-teams">
        <div style="margin-bottom:.2rem"><strong>${m.p1}</strong> <span style="color:var(--muted);font-size:.75rem">${m.t1}</span> ${tb(m.tr1)}</div>
        <div><strong>${m.p2}</strong> <span style="color:var(--muted);font-size:.75rem">${m.t2}</span> ${tb(m.tr2)}</div>
      </div>
      <div class="match-score">${m.g1}—${m.g2}</div>
      <div class="match-pts-awarded"><div class="match-date">${new Date(m.date).toLocaleDateString('es-AR')}</div>
        <span class="tag tag-${r1}">${r1==='win'?'V':r1==='loss'?'D':'E'}</span>
        <div style="margin-top:.2rem">+<span style="color:var(--accent)">${m.pts1}</span>/<span style="color:var(--accent)">${m.pts2}</span></div>
      </div></div>`;
  }).join('');
}

function populatePlayerSelects(){
  ['p1-player','p2-player'].forEach(id=>{
    const s=document.getElementById(id);if(!s)return;
    const v=s.value;
    s.innerHTML='<option value="">— Seleccionar —</option>'+state.players.map(p=>`<option value="${p}">${p}</option>`).join('');
    s.value=v;
  });
}

function renderPlayersList(){
  const el=document.getElementById('players-list');if(!el)return;
  if(!state.players.length){el.innerHTML='<div style="color:var(--muted);font-size:.85rem">Sin jugadores.</div>';return;}
  el.innerHTML=state.players.map(p=>`<span class="player-chip">${p}<span class="del" onclick="removePlayer('${p}')">✕</span></span>`).join('');
}

function renderAllMatches(){
  const el=document.getElementById('all-matches');if(!el)return;
  if(!state.matches.length){el.innerHTML='<div class="empty-state"><span class="big">⚽</span>Sin partidos</div>';return;}
  el.innerHTML=[...state.matches].reverse().map((m,ri)=>{
    const idx=state.matches.length-1-ri;
    const r1=m.g1>m.g2?'win':m.g1<m.g2?'loss':'draw';
    const r2=m.g2>m.g1?'win':m.g2<m.g1?'loss':'draw';
    return`<div class="match-card">
      <div class="match-teams">
        <div style="margin-bottom:.2rem"><strong>${m.p1}</strong> <span style="color:var(--muted);font-size:.75rem">${m.t1}</span> ${tb(m.tr1)} <span class="tag tag-${r1}">${r1==='win'?'VICTORIA':r1==='loss'?'DERROTA':'EMPATE'}</span> <span style="color:var(--accent);font-size:.8rem">+${m.pts1}pts</span></div>
        <div><strong>${m.p2}</strong> <span style="color:var(--muted);font-size:.75rem">${m.t2}</span> ${tb(m.tr2)} <span class="tag tag-${r2}">${r2==='win'?'VICTORIA':r2==='loss'?'DERROTA':'EMPATE'}</span> <span style="color:var(--accent);font-size:.8rem">+${m.pts2}pts</span></div>
      </div>
      <div class="match-score">${m.g1}—${m.g2}</div>
      <div class="match-pts-awarded"><div class="match-date">${new Date(m.date).toLocaleDateString('es-AR')}</div>
        <button class="btn btn-danger btn-sm" style="margin-top:.4rem" onclick="deleteMatch(${idx})">Borrar</button>
      </div></div>`;
  }).join('');
}

// Extrae el país de la liga (formato "País - Liga")
function getCountry(league){return league.split(' - ')[0]||league;}

function populateCountryLeagueFilters(){
  // Página equipos
  const countryEl=document.getElementById('country-filter');
  const leagueEl=document.getElementById('league-filter');
  if(countryEl){
    const countries=[...new Set(TEAMS.map(t=>getCountry(t.l)))].sort();
    const cv=countryEl.value;
    countryEl.innerHTML='<option value="">Todos los países</option>'+countries.map(c=>`<option value="${c}">${c}</option>`).join('');
    countryEl.value=cv;
  }
  // Actualizar ligas según país seleccionado
  if(leagueEl){
    const selectedCountry=countryEl?.value||'';
    const leagues=[...new Set(TEAMS.filter(t=>!selectedCountry||getCountry(t.l)===selectedCountry).map(t=>t.l))].sort();
    const lv=leagueEl.value;
    leagueEl.innerHTML='<option value="">Todas las ligas</option>'+leagues.map(l=>`<option value="${l}">${l.includes(' - ')?l.split(' - ').slice(1).join(' - '):l}</option>`).join('');
    // restaurar valor si sigue disponible
    if(leagues.includes(lv))leagueEl.value=lv;else leagueEl.value='';
  }
  // Cargar partido: dropdowns de país para p1 y p2
  [1,2].forEach(p=>{
    const ce=document.getElementById(`p${p}-country-filter`);
    const le=document.getElementById(`p${p}-league-filter`);
    if(ce){
      const countries=[...new Set(TEAMS.map(t=>getCountry(t.l)))].sort();
      const cv=ce.value;
      ce.innerHTML='<option value="">🌍 Todos los países</option>'+countries.map(c=>`<option value="${c}">${c}</option>`).join('');
      ce.value=cv;
    }
    if(le&&ce){
      const sc=ce.value;
      const leagues=[...new Set(TEAMS.filter(t=>!sc||getCountry(t.l)===sc).map(t=>t.l))].sort();
      const lv=le.value;
      le.innerHTML='<option value="">Todas las ligas</option>'+leagues.map(l=>`<option value="${l}">${l.includes(' - ')?l.split(' - ').slice(1).join(' - '):l}</option>`).join('');
      if(leagues.includes(lv))le.value=lv;else le.value='';
    }
  });
}

function onCountryChange(){
  // Al cambiar país en página equipos, resetear liga y re-renderizar
  populateCountryLeagueFilters();
  renderTeamsPage();
}

function onTeamCountryChange(p){
  // Al cambiar país en cargar partido, actualizar ligas
  const ce=document.getElementById(`p${p}-country-filter`);
  const le=document.getElementById(`p${p}-league-filter`);
  if(!ce||!le)return;
  const sc=ce.value;
  const leagues=[...new Set(TEAMS.filter(t=>!sc||getCountry(t.l)===sc).map(t=>t.l))].sort();
  le.innerHTML='<option value="">Todas las ligas</option>'+leagues.map(l=>`<option value="${l}">${l.includes(' - ')?l.split(' - ').slice(1).join(' - '):l}</option>`).join('');
  filterTeams(p);
}

function renderTeamsPage(){
  const el=document.getElementById('teams-by-tier');if(!el)return;
  const q=(document.getElementById('team-filter')?.value||'').toLowerCase();
  const tf=document.getElementById('tier-filter')?.value||'';
  const cf=document.getElementById('country-filter')?.value||'';
  const lf=document.getElementById('league-filter')?.value||'';
  const filtered=TEAMS.filter(t=>{
    if(tf&&String(t.s)!==tf)return false;
    if(cf&&getCountry(t.l)!==cf)return false;
    if(lf&&t.l!==lf)return false;
    if(q&&!t.n.toLowerCase().includes(q)&&!t.l.toLowerCase().includes(q))return false;
    return true;
  });
  document.getElementById('teams-count').textContent=`Mostrando ${filtered.length} de ${TEAMS.length} equipos`;
  if(!filtered.length){el.innerHTML='<div class="empty-state"><span class="big">🔍</span>Sin resultados</div>';return;}
  const byLeague={};
  filtered.forEach(t=>{if(!byLeague[t.l])byLeague[t.l]=[];byLeague[t.l].push(t)});
  el.innerHTML=Object.entries(byLeague).sort(([a],[b])=>a.localeCompare(b)).map(([league,teams])=>`
    <div class="league-section">
      <div class="league-header"><span class="league-name">${league}</span><span style="color:var(--muted);font-size:.75rem">${teams.length} equipos</span></div>
      <div class="teams-chips">${teams.map(t=>`<div class="team-chip-display" style="cursor:pointer" onclick="editTeamStars('${t.n.replace(/'/g,"\\'")}',${t.s})">${tb(t)}<span>${t.n}</span><span style="margin-left:.3rem;color:var(--gray);font-size:.65rem">✏️</span></div>`).join('')}</div>
    </div>`).join('');
}

// TEAM SEARCH
let p1Team=null,p2Team=null;
function filterTeams(p){showTeamList(p,document.getElementById(`p${p}-team-search`).value.toLowerCase())}
function showTeamList(p,q=''){
  const re=document.getElementById(`p${p}-team-results`);
  const f=TEAMS.filter(t=>!q||t.n.toLowerCase().includes(q)||t.l.toLowerCase().includes(q));
  if(!f.length){re.style.display='none';return;}
  re.style.display='block';
  re.innerHTML=f.slice(0,50).map(t=>`<div class="team-option" onclick="selectTeam(${p},'${t.n.replace(/'/g,"\\'")}')"><span>${t.n} <span style="color:var(--muted);font-size:.72rem">${t.l}</span></span>${tb(t)}</div>`).join('');
  const close=e=>{
    if(!e.target.closest(`#p${p}-team-results`)&&!e.target.closest(`#p${p}-team-search`)){re.style.display='none';document.removeEventListener('click',close)}
  };
  setTimeout(()=>document.addEventListener('click',close),10);
}
function selectTeam(p,name){
  const team=TEAMS.find(t=>t.n===name);if(!team)return;
  if(p===1)p1Team=team;else p2Team=team;
  document.getElementById(`p${p}-team-search`).value='';
  document.getElementById(`p${p}-team-results`).style.display='none';
  const d=document.getElementById(`p${p}-team-display`);
  d.style.display='flex';
  d.innerHTML=`<span><strong>${team.n}</strong> <span style="color:var(--muted);font-size:.78rem">${team.l}</span></span>${tb(team)}`;
}

function previewMatch(){
  const p1=document.getElementById('p1-player').value,p2=document.getElementById('p2-player').value;
  const g1=parseInt(document.getElementById('p1-goals').value)||0,g2=parseInt(document.getElementById('p2-goals').value)||0;
  if(!p1||!p2||!p1Team||!p2Team){notify('Completá todos los campos',true);return;}
  if(p1===p2){notify('No pueden ser el mismo jugador',true);return;}
  let pts1=0,pts2=0;const gd=Math.abs(g1-g2);
  if(g1>g2)pts1=calcPts(p1Team,p2Team,gd);else if(g2>g1)pts2=calcPts(p2Team,p1Team,gd);else[pts1,pts2]=calcDrawPts(p1Team,p2Team);
  document.getElementById('match-preview').style.display='block';
  document.getElementById('match-preview-body').innerHTML=`<div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
    <div style="text-align:center"><div style="font-family:'Barlow Condensed',sans-serif;color:var(--muted);font-size:.8rem">${p1} · ${p1Team.n} ${tb(p1Team)}</div><div style="font-family:'Bebas Neue',cursive;font-size:2.5rem;color:var(--accent)">${pts1} pts</div></div>
    <div style="font-family:'Bebas Neue',cursive;font-size:1.8rem;color:var(--border)">VS</div>
    <div style="text-align:center"><div style="font-family:'Barlow Condensed',sans-serif;color:var(--muted);font-size:.8rem">${p2} · ${p2Team.n} ${tb(p2Team)}</div><div style="font-family:'Bebas Neue',cursive;font-size:2.5rem;color:var(--accent)">${pts2} pts</div></div>
  </div>`;
}

// ── Helper: verificar contraseña con SHA-256 ─────────────────
async function hashPwd(pwd){
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(pwd));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function checkPwd(pwd){
  return (await hashPwd(pwd))==='2a08d18203b1bad3c6516d07de69d946fc9fdb677c3806d5e8cbcc1a1bcc628e';
}

// ── Modal de contraseña genérico ──────────────────────────────
function askPassword(title, onSuccess){
  // Crear overlay
  const overlay = document.createElement('div');
  overlay.id = 'pwd-modal-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:8000;
    background:rgba(0,0,0,.7);
    display:flex;align-items:center;justify-content:center;
    animation:fadeIn .15s ease;
  `;
  overlay.innerHTML = `
    <div style="
      background:var(--surface);border:1px solid var(--border2);
      border-top:3px solid var(--green);border-radius:6px;
      padding:2rem 2.5rem;min-width:320px;max-width:90vw;
      animation:slideUp .2s cubic-bezier(.16,1,.3,1);
      position:relative;
    ">
      <div style="font-family:'Anton',sans-serif;font-size:1.2rem;letter-spacing:2px;color:var(--white);margin-bottom:.4rem">${title}</div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:.7rem;letter-spacing:2px;color:var(--gray);text-transform:uppercase;margin-bottom:1.2rem">Ingresá la contraseña para continuar</div>
      <input type="password" id="pwd-modal-input" placeholder="Contraseña..."
        style="width:100%;margin-bottom:1rem;font-size:1rem;padding:.7rem 1rem;
               background:var(--bg2);border:1px solid var(--border);color:var(--white);
               border-radius:3px;outline:none;font-family:'Barlow',sans-serif;"
        autocomplete="off">
      <div style="display:flex;gap:.7rem">
        <button id="pwd-modal-confirm" class="btn btn-primary" style="flex:1">CONFIRMAR</button>
        <button id="pwd-modal-cancel" class="btn btn-ghost" style="flex:0 0 auto">CANCELAR</button>
      </div>
      <div id="pwd-modal-error" style="color:#ff5252;font-family:'Barlow Condensed',sans-serif;
           font-size:.75rem;letter-spacing:1px;margin-top:.6rem;display:none;text-align:center">
        ❌ Contraseña incorrecta
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const input   = document.getElementById('pwd-modal-input');
  const confirm = document.getElementById('pwd-modal-confirm');
  const cancel  = document.getElementById('pwd-modal-cancel');
  const errMsg  = document.getElementById('pwd-modal-error');

  input.focus();

  function closeModal(){
    overlay.style.animation='fadeOut .15s ease forwards';
    setTimeout(()=>overlay.remove(), 150);
  }

  async function doConfirm(){
    const pwd = input.value;
    if(!pwd){ input.style.borderColor='#ff5252'; return; }
    confirm.textContent='...';confirm.disabled=true;
    closeModal();
    onSuccess(pwd);
    return;
    if(false){
      errMsg.style.display='block';
      input.value='';input.focus();
      input.style.borderColor='#ff5252';
      confirm.textContent='CONFIRMAR';confirm.disabled=false;
    }
  }

  confirm.addEventListener('click', doConfirm);
  cancel.addEventListener('click', closeModal);
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') doConfirm(); if(e.key==='Escape') closeModal(); });
  overlay.addEventListener('click', e=>{ if(e.target===overlay) closeModal(); });
}

async function submitMatch(){
  const pwd=document.getElementById('match-password').value;
  // La validación de contraseña se hace en el Worker
  // Solo verificamos que no esté vacía en el front
  const p1=document.getElementById('p1-player').value,p2=document.getElementById('p2-player').value;
  const g1=parseInt(document.getElementById('p1-goals').value)||0,g2=parseInt(document.getElementById('p2-goals').value)||0;
  if(!p1||!p2){notify('Seleccioná los dos jugadores',true);return;}
  if(!p1Team||!p2Team){notify('Seleccioná los equipos',true);return;}
  if(p1===p2){notify('No pueden ser el mismo jugador',true);return;}
  let pts1=0,pts2=0;const gd=Math.abs(g1-g2);
  if(g1>g2)pts1=calcPts(p1Team,p2Team,gd);else if(g2>g1)pts2=calcPts(p2Team,p1Team,gd);else[pts1,pts2]=calcDrawPts(p1Team,p2Team);
  const newMatch={p1,p2,t1:p1Team.n,t2:p2Team.n,tr1:p1Team.s,tr2:p2Team.s,g1,g2,pts1,pts2,date:new Date().toISOString()};
  await saveMatch(newMatch, pwd);
  state.matches.push(newMatch);
  save();notify('✅ Partido registrado!');
  document.getElementById('match-password').value='';
  p1Team=null;p2Team=null;
  ['p1-player','p2-player'].forEach(id=>document.getElementById(id).value='');
  ['p1-goals','p2-goals'].forEach(id=>document.getElementById(id).value=0);
  ['p1-team-display','p2-team-display'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById('match-preview').style.display='none';
  renderAll();
}

function addPlayer(){
  const name=document.getElementById('new-player-name').value.trim();
  if(!name){notify('Ingresá un nombre',true);return;}
  if(state.players.includes(name)){notify('Ya existe',true);return;}
  askPassword('AGREGAR JUGADOR', async (pwd)=>{
    await savePlayer(name, pwd);
    await _cargarDatos();
    document.getElementById('new-player-name').value='';
    notify(`✅ ${name} agregado`);
  });
}
function removePlayer(name){
  askPassword('ELIMINAR JUGADOR', async (pwd)=>{
    await removePlayerDB(name, pwd);
    await _cargarDatos();
    notify(`✅ ${name} eliminado`);
  });
}
function deleteMatch(idx){
  askPassword('ELIMINAR PARTIDO', async (pwd)=>{
    const match = state.matches[idx];
    const matchId = match._id || match.id;
    if(matchId) await deleteMatchDB(matchId, pwd);
    await _cargarDatos();
    notify('✅ Partido eliminado');
  });
}
function notify(msg,err=false){
  const el=document.getElementById('notification');el.textContent=msg;el.className='show'+(err?' error':'');
  setTimeout(()=>el.className='',2500);
}

document.getElementById('new-player-name').addEventListener('keydown',e=>{if(e.key==='Enter')addPlayer()});

// Compensar altura del nav fixed
function adjustNavPadding() {
  const navH = document.querySelector('nav')?.offsetHeight || 0;
  document.body.style.paddingTop = navH + 'px';
}
adjustNavPadding();
window.addEventListener('resize', adjustNavPadding);

// Arrancar — initSupabase carga datos y llama renderAll cuando termina
initSupabase();


// ══════════════════════════════════════════════════════════════
// ESCANEO DE FOTO — via Cloudflare Worker (proxy seguro)
// La API key de Anthropic vive en el Worker, nunca en el browser
// ══════════════════════════════════════════════════════════════
// WORKER_URL ya declarado arriba — ruta /api/scan para Anthropic

let _scanData = null;

function openScanModal() {
  document.getElementById('scan-modal-overlay').style.display = 'flex';
  document.getElementById('scan-result').style.display = 'none';
  document.getElementById('scan-confirm-btn').style.display = 'none';
  document.getElementById('scan-error').style.display = 'none';
  document.getElementById('scan-loading').style.display = 'none';
  document.getElementById('scan-preview').style.display = 'none';
  document.getElementById('scan-file-input').value = '';
  _scanData = null;
  // Poblar selects de jugadores
  const opts = '<option value="">— Seleccionar —</option>' +
    state.players.map(j => `<option value="${j}">${j}</option>`).join('');
  document.getElementById('scan-player1').innerHTML = opts;
  document.getElementById('scan-player2').innerHTML = opts;
}

function closeScanModal() {
  document.getElementById('scan-modal-overlay').style.display = 'none';
  _scanData = null;
}

function handleScanOverlayClick(e) {
  if (e.target === document.getElementById('scan-modal-overlay')) closeScanModal();
}

function handleScanFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const preview = document.getElementById('scan-preview');
    preview.src = ev.target.result;
    preview.style.display = 'block';
    analyzeMatchImage(ev.target.result);
  };
  reader.readAsDataURL(file);
}

async function analyzeMatchImage(dataUrl) {
  document.getElementById('scan-loading').style.display = 'block';
  document.getElementById('scan-result').style.display = 'none';
  document.getElementById('scan-error').style.display = 'none';
  document.getElementById('scan-confirm-btn').style.display = 'none';

  try {
    const base64 = dataUrl.split(',')[1];
    const mediaType = dataUrl.split(';')[0].split(':')[1];

    // Pasar lista de equipos para cotejo exacto
    const teamList = TEAMS.map(t => t.n).join('\n');

    const response = await fetch(WORKER_URL + '/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image_base64: base64,
        media_type:   mediaType,
        team_list:    teamList
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `Error ${response.status}`);
    }

    const data = await response.json();
    const text = data.content[0].text.trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No se pudo parsear la respuesta');

    const result = JSON.parse(jsonMatch[0]);

    // Buscar los equipos en la DB
    const team1Obj = TEAMS.find(t => t.n === result.team1_match)
                  || TEAMS.find(t => t.n.toLowerCase().includes(result.team1_match?.toLowerCase()))
                  || { n: result.team1_match, s: 2.5, l: 'Desconocido' };
    const team2Obj = TEAMS.find(t => t.n === result.team2_match)
                  || TEAMS.find(t => t.n.toLowerCase().includes(result.team2_match?.toLowerCase()))
                  || { n: result.team2_match, s: 2.5, l: 'Desconocido' };

    _scanData = {
      team1: team1Obj,
      team2: team2Obj,
      goals1: parseInt(result.goals1) || 0,
      goals2: parseInt(result.goals2) || 0
    };

    // Mostrar resultado detectado
    document.getElementById('scan-team1-name').textContent = result.team1_raw || result.team1_match;
    document.getElementById('scan-team1-matched').textContent =
      TEAMS.find(t => t.n === team1Obj.n) ? `✅ ${team1Obj.n} (${team1Obj.s}★)` : `⚠️ ${team1Obj.n} — verificar`;
    document.getElementById('scan-score').textContent = `${result.goals1}  —  ${result.goals2}`;
    document.getElementById('scan-team2-name').textContent = result.team2_raw || result.team2_match;
    document.getElementById('scan-team2-matched').textContent =
      TEAMS.find(t => t.n === team2Obj.n) ? `✅ ${team2Obj.n} (${team2Obj.s}★)` : `⚠️ ${team2Obj.n} — verificar`;

    document.getElementById('scan-loading').style.display = 'none';
    document.getElementById('scan-result').style.display = 'block';
    document.getElementById('scan-confirm-btn').style.display = 'block';

  } catch(e) {
    document.getElementById('scan-loading').style.display = 'none';
    const errEl = document.getElementById('scan-error');
    errEl.textContent = '❌ ' + e.message;
    errEl.style.display = 'block';
    console.error('Scan error:', e);
  }
}

async function confirmScanMatch() {
  const p1 = document.getElementById('scan-player1').value;
  const p2 = document.getElementById('scan-player2').value;
  if (!p1 || !p2) { notify('Seleccioná los dos jugadores', true); return; }
  if (p1 === p2)  { notify('No pueden ser el mismo jugador', true); return; }
  if (!_scanData) { notify('No hay datos escaneados', true); return; }

  askPassword('CARGAR PARTIDO ESCANEADO', async () => {
    const { team1, team2, goals1, goals2 } = _scanData;
    const gd = Math.abs(goals1 - goals2);
    let pts1 = 0, pts2 = 0;
    if (goals1 > goals2)      { pts1 = calcPts(team1, team2, gd); pts2 = 0; }
    else if (goals2 > goals1) { pts2 = calcPts(team2, team1, gd); pts1 = 0; }
    else                      { pts1 = 1; pts2 = 1; }

    const newMatch = {
      p1, p2,
      t1: team1.n, t2: team2.n,
      tr1: team1.s, tr2: team2.s,
      g1: goals1, g2: goals2,
      pts1, pts2,
      date: new Date().toISOString()
    };

    await saveMatch(newMatch);
    state.matches.push(newMatch);
    save();
    closeScanModal();
    notify('✅ Partido escaneado y cargado!');
    await _cargarDatos();
  });
}

// ── Editar estrellas de equipo ─────────────────────────────────
function editTeamStars(teamName, currentStars) {
  askPassword('EDITAR ESTRELLAS', () => {
    // Crear modal inline
    const overlay = document.createElement('div');
    overlay.id = 'edit-stars-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;padding:1rem';
    
    const starOptions = [1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0];
    
    overlay.innerHTML = `
      <div style="background:var(--surface);border:1px solid var(--border2);border-top:3px solid var(--green);border-radius:6px;padding:1.8rem;width:100%;max-width:380px;animation:slideUp .2s cubic-bezier(.16,1,.3,1)">
        <div style="font-family:'Anton',sans-serif;font-size:1.2rem;letter-spacing:2px;color:var(--white);margin-bottom:.3rem;text-transform:uppercase">EDITAR ESTRELLAS</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:.75rem;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:1.2rem">${teamName}</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:.65rem;letter-spacing:2px;color:var(--gray);text-transform:uppercase;margin-bottom:.6rem">Estrellas actuales: <strong style="color:var(--white)">${currentStars}★</strong></div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:.65rem;letter-spacing:2px;color:var(--gray);text-transform:uppercase;margin-bottom:.5rem">Nuevas estrellas:</div>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.3rem">
          ${starOptions.map(s => `
            <button onclick="selectStarEdit(this,${s})" 
              style="padding:.4rem .7rem;border-radius:3px;border:1px solid ${s===currentStars?'var(--green)':'var(--border)'};
                     background:${s===currentStars?'rgba(0,200,83,.15)':'var(--bg2)'};
                     color:${s===currentStars?'var(--green)':'var(--gray)'};
                     font-family:'Barlow Condensed',sans-serif;font-size:.8rem;font-weight:700;cursor:pointer;
                     transition:all .15s"
              data-stars="${s}">${s}★</button>
          `).join('')}
        </div>
        <div style="display:flex;gap:.7rem">
          <button class="btn btn-primary" style="flex:1" onclick="confirmEditStars('${teamName.replace(/'/g,"\'")}')">✅ GUARDAR</button>
          <button class="btn btn-ghost" onclick="document.getElementById('edit-stars-overlay').remove()">CANCELAR</button>
        </div>
      </div>`;
    
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if(e.target===overlay) overlay.remove(); });
  });
}

let _selectedStars = null;

function selectStarEdit(btn, stars) {
  _selectedStars = stars;
  // Resetear todos
  btn.closest('div').querySelectorAll('button').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.background = 'var(--bg2)';
    b.style.color = 'var(--gray)';
  });
  // Marcar seleccionado
  btn.style.borderColor = 'var(--green)';
  btn.style.background = 'rgba(0,200,83,.15)';
  btn.style.color = 'var(--green)';
}

function confirmEditStars(teamName) {
  if (_selectedStars === null) { notify('Seleccioná las estrellas', true); return; }
  
  // Actualizar en el array TEAMS en memoria
  const team = TEAMS.find(t => t.n === teamName);
  if (!team) { notify('Equipo no encontrado', true); return; }
  
  const oldStars = team.s;
  team.s = _selectedStars;
  
  // Cerrar modal
  document.getElementById('edit-stars-overlay')?.remove();
  _selectedStars = null;
  
  notify(`✅ ${teamName}: ${oldStars}★ → ${team.s}★`);
  renderTeamsPage();
}

// ══════════════════════════════════════════════════════════════
// SECCIÓN PÚSKAS — YouTube Data API v3
// ══════════════════════════════════════════════════════════════
// YouTube keys movidas al Worker (seguras)
let _puskasLoaded = false;

async function loadPuskasVideos() {
  const grid    = document.getElementById('puskas-grid');
  const loading = document.getElementById('puskas-loading');
  const errEl   = document.getElementById('puskas-error');
  const empty   = document.getElementById('puskas-empty');

  grid.innerHTML = '';
  loading.style.display = 'block';
  errEl.style.display   = 'none';
  empty.style.display   = 'none';

  try {
    // 1. Buscar videos del canal ordenados por fecha (más nuevo primero)
    const res = await fetch(WORKER_URL + '/api/youtube');

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || `Error ${res.status}`);
    }

    const data = await res.json();
    const videos = data.items || [];

    loading.style.display = 'none';

    if (!videos.length) {
      empty.style.display = 'block';
      return;
    }

    // 2. Renderizar cards de videos
    // Separar el primero como destacado y el resto como grilla
    const first = videos[0];
    const rest  = videos.slice(1);

    function videoCard(v, featured = false) {
      const videoId = v.id.videoId;
      const title   = v.snippet.title;
      const date    = new Date(v.snippet.publishedAt).toLocaleDateString('es-AR', {
        day: '2-digit', month: 'short', year: 'numeric'
      });
      if (featured) {
        return `
          <div class="puskas-card puskas-featured">
            <div style="padding:.6rem 1rem .4rem;background:linear-gradient(90deg,rgba(255,224,0,.15),transparent);border-bottom:1px solid rgba(255,224,0,.2);display:flex;align-items:center;gap:.6rem">
              <span style="font-size:1.1rem">🏆</span>
              <span style="font-family:'Anton',sans-serif;font-size:.85rem;letter-spacing:2px;color:var(--yellow);text-transform:uppercase">Último gol destacado</span>
            </div>
            <div class="puskas-iframe-wrap" style="padding-bottom:52%">
              <iframe
                src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
                title="${title.replace(/"/g,'&quot;')}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="puskas-info">
              <span class="puskas-badge">⚽ GOL TPC</span>
              <div class="puskas-title" style="font-size:1.1rem">${title}</div>
              <div class="puskas-date">📅 ${date}</div>
            </div>
          </div>`;
      }
      return `
        <div class="puskas-card">
          <div class="puskas-iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
              title="${title.replace(/"/g,'&quot;')}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="puskas-info">
            <span class="puskas-badge">⚽ GOL TPC</span>
            <div class="puskas-title">${title}</div>
            <div class="puskas-date">📅 ${date}</div>
          </div>
        </div>`;
    }

    // Armar el HTML: destacado arriba, grilla abajo
    let html_out = '';
    if (first) {
      html_out += `<div style="margin-bottom:1.2rem;grid-column:1/-1">${videoCard(first, true)}</div>`;
    }
    if (rest.length) {
      html_out += `
        <div style="margin-bottom:.6rem;grid-column:1/-1">
          <div style="font-family:'Anton',sans-serif;font-size:1rem;letter-spacing:2px;color:var(--white);text-transform:uppercase">TODOS LOS <span style="color:var(--green)">GOLES</span></div>
        </div>`;
      html_out += rest.map(v => videoCard(v, false)).join('');
    }
    grid.innerHTML = html_out;

    _puskasLoaded = true;

  } catch(e) {
    loading.style.display = 'none';
    errEl.textContent = '❌ Error cargando videos: ' + e.message;
    errEl.style.display = 'block';
    console.error('Púskas error:', e);
  }
}

// Cargar automáticamente cuando se abre la sección (solo la primera vez)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      if (this.dataset.page === 'puskas' && !_puskasLoaded) {
        loadPuskasVideos();
      }
    });
  });
});

// ── Widget Púskas en el hero ──────────────────────────────────
function goToPuskas() {
  // Navegar a la sección Púskas
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelector('[data-page="puskas"]').classList.add('active');
  document.getElementById('page-puskas').classList.add('active');
  if (!_puskasLoaded) loadPuskasVideos();
}

// Cargar el nombre del último gol en el widget del hero
async function loadPuskasHeroPreview() {
  try {
    const res = await fetch(WORKER_URL + '/api/youtube/latest');
    if (!res.ok) return;
    const data = await res.json();
    const video = data.items?.[0];
    if (video) {
      const el = document.getElementById('puskas-hero-last-val');
      if (el) el.textContent = video.snippet.title;
    }
  } catch(e) { /* silencioso */ }
}

// Llamar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(loadPuskasHeroPreview, 1500);
});

// ── Admin dropdown ────────────────────────────────────────────
function toggleAdminMenu() {
  const menu = document.getElementById('admin-menu');
  const trigger = document.getElementById('admin-trigger');
  const isOpen = menu.classList.contains('open');
  // Cerrar si ya está abierto
  menu.classList.toggle('open');
  trigger.classList.toggle('active', !isOpen);
}

// Cerrar el dropdown al hacer click fuera
document.addEventListener('click', function(e) {
  const trigger = document.getElementById('admin-trigger');
  if (trigger && !trigger.contains(e.target)) {
    document.getElementById('admin-menu')?.classList.remove('open');
    trigger.classList.remove('active');
  }
});

// Los items del dropdown navegan a su página
// Usar delegación de eventos — no depende de DOMContentLoaded
document.addEventListener('click', function(e) {
  const item = e.target.closest('.nav-dropdown-item');
  if (!item) return;
  e.stopPropagation();
  const page = item.dataset.page;
  if (!page) return;
  // Cerrar dropdown
  document.getElementById('admin-menu')?.classList.remove('open');
  document.getElementById('admin-trigger')?.classList.remove('active');
  // Navegar
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('admin-trigger')?.classList.add('active');
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  renderAll();
  if (page === 'partidos') populateCountryLeagueFilters();
  if (page === 'jugadores') renderPlayersList();
  if (page === 'equipos') renderTeamsPage();
});

// ── Scroll horizontal táctil aislado en la tabla ─────────────
document.addEventListener('DOMContentLoaded', function() {
  function initTableScroll() {
    const wrap = document.querySelector('.ladder-wrap');
    if (!wrap || wrap._touchInit) return;
    wrap._touchInit = true;

    let startX, startY, startScrollLeft, isScrollingX;

    wrap.addEventListener('touchstart', function(e) {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
      startScrollLeft = wrap.scrollLeft;
      isScrollingX = null;
    }, { passive: true });

    wrap.addEventListener('touchmove', function(e) {
      if (!e.touches.length) return;
      const dx = e.touches[0].pageX - startX;
      const dy = e.touches[0].pageY - startY;

      // Determinar dirección dominante en el primer movimiento
      if (isScrollingX === null) {
        isScrollingX = Math.abs(dx) > Math.abs(dy);
      }

      if (isScrollingX) {
        // Scroll horizontal: mover solo la tabla, prevenir scroll de página
        e.preventDefault();
        wrap.scrollLeft = startScrollLeft - dx;
      }
      // Si es vertical, no hacer nada — la página scrollea normalmente
    }, { passive: false }); // passive: false para poder llamar preventDefault
  }

  initTableScroll();

  // Re-inicializar cuando se renderiza la tabla
  const ladderBody = document.getElementById('ladder-body');
  if (ladderBody) {
    new MutationObserver(function() {
      const wrap = document.querySelector('.ladder-wrap');
      if (wrap) wrap._touchInit = false;
      initTableScroll();
    }).observe(ladderBody, { childList: true });
  }
});
