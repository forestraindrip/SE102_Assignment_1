class Controller2017 {
  static setup () {
    /* Party and list data from
     * http://www.elections.org.nz/events/2017-general-election/2017-general-election-party-lists
     */
    var theElection = new Election(2017)
    var aParty, anElectorate
    // parties AND Party Lists
    aParty = theElection.addParty('ACT NEW ZEALAND')
    aParty.addListCandidates('SEYMOUR, David',
      'HOULBROOKE, Beth',
      'CARLSON, Anneka',
      'NG, Shan',
      'PURCHAS, Sam',
      'SEVERIN, Toni',
      "O'SULLIVAN, Grae",
      'EVANS, Richard',
      'McDOWALL, James',
      'WELLS, Richard',
      'WARREN, Michael',
      'MOORE, Andie',
      'PARKINS, Andy',
      'CARLEY, Bruce',
      'CORBETT, Tom',
      'DAVIDSON, Brian',
      'DAVIDSON, Alan',
      'DOUGHTY, Daniel',
      'EVANS, Alex',
      'GILBERT, Paul',
      'GREENSLADE, Roger',
      'HAWKINS, Stuart',
      'HAYCOCK, Bruce',
      'HUFFLETT, Paul Charles',
      'KEARNEY, Nick',
      'KRONFELD, Tim',
      'MISSELBROOK, Joe Elwood',
      'NELSON, Craig',
      'PERRY, Joshua',
      'SINGH, Sam',
      'SMITH, Anthony',
      'SOLE, Chris',
      'WILSON, Neil',
      'FLETCHER, Stephe',
      'GRATTAN, Wayne Desmond')
    aParty = theElection.addParty('AOTEAROA LEGALISE CANNABIS PARTY')
    aParty.addListCandidates('HERBERT, Maki',
      'LYE, Jeff',
      'LAMBERT, Paula',
      'BRITNELL, Mike',
      'MIHAERE KINGI, Emma-Jane',
      'SHIRIWASTOW, Vineet Prasad',
      'SAXBY-KONING, Jonee',
      'McDERMOTT, Adrian',
      'SHUFFLEBOTHAM, Janine',
      'WILKINSON, Steven',
      'SAXBY, Jeanette',
      'BROWN, Tony',
      'ROBIN, Rebecca',
      'McTAGUE, Geoff')
    aParty = theElection.addParty('BAN1080')
    aParty.addListCandidates('GRAF, Clyde',
      'WALLACE, William John',
      'SALTER, Peter',
      'ADAMS, Brian Alan',
      'SAWYER, Carol',
      'HILTON, James Edwin',
      'TOMLINSON, Glen James',
      'HANSON, Kenneth Lloyd',
      'MOLLOY, Mary')
    aParty = theElection.addParty('CONSERVATIVE')
    aParty.addListCandidates('BAKER, Leighton',
      'IKILEI, Elliot',
      'TAYLOR, Mel',
      'STITT, Kevin',
      'FRAUENSTEIN, Martin',
      'ASHTON, Lachie',
      'DAVIE, Kathryn',
      'WELSH, Bruce',
      'DAVIE, Paul',
      'LARKINS, Roger',
      'JOHNSON, Jeff',
      'PRICE, Benjamin')
    aParty = theElection.addParty('DEMOCRATS FOR SOCIAL CREDIT')
    aParty.addListCandidates('DE RUYTER, Stephnie',
      'LEITCH, Chris',
      'JOBSIS, Jason',
      'MacARTHUR, Scott',
      'VAN WIEREN, Hessel',
      'LEITCH, Andrew',
      'RANSOM, Katherine',
      'BRIGGS, Simon',
      'RHODES, Mischele',
      'MATTHYS, Karl',
      'COLLIN, Jack',
      'McCONACHY, Heather Ann',
      'RING, John',
      'PEMBERTON, John',
      'RYAN, Dick',
      'McKENZIE, Carolyn',
      'WILSON, David Angus',
      'SMITH, Heather Marion',
      'LIVINGSTON-POOLEY, Tracy',
      'ADCOCK-WHITE, Peter',
      'PULFORD, Barry',
      'CHEEL, Tricia',
      'McCASKEY, John',
      'GRIBBEN, Gary',
      'MOWAT, Miriam',
      'RICHARDS, Robert')
    aParty = theElection.addParty('GREEN PARTY')
    aParty.addListCandidates('SHAW, James',
      'DAVIDSON, Marama',
      'GENTER, Julie Anne',
      'SAGE, Eugenie',
      'HUGHES, Gareth',
      'LOGIE, Jan',
      'SWARBRICK, Chlöe',
      'GHAHRAMAN, Golriz',
      'MATHERS, Mojo',
      'COATES, Barry',
      'McDONALD, Jack',
      'HART, John',
      'ROCHE, Denise',
      'HOLT, Hayley Doreen',
      'CROSSEN, Teall',
      'TUIONO, Teanau',
      'TAMU, Leilani Leafaitulagi',
      'LAWREY, Matt',
      'KEREKERE, Elizabeth',
      'PERLEY, Christopher John',
      'MENENDEZ MARCH, Ricardo',
      'ZHU, Julie',
      'LECKINGER, Richard',
      'NASH, Thomas',
      'TAYLOR, Sam',
      'FULTON, Kate',
      'WOODLEY, Tane',
      'WRIGLEY, Jo',
      'HOLWELL, Ash',
      'GRAND-MEYER, Stefan',
      'McCANDLESS, Robin Campbell',
      'BOULD, Niki',
      'GALLAGHER, Shane',
      'SUMMERFIELD, Scott',
      'SURENDRAN, Rochelle',
      'WALSH, Bridget',
      'GOLDSMITH, Rachael',
      'WALL, Pat',
      'GOODHUE, James',
      'WESLEY, Richard',
      'HUNT, Guy',
      'DYETT, Elaine',
      'FERGUSON, Sam',
      'GILLIES, Richard',
      'HODGE, Emma-Leigh',
      'HORN, Chrys',
      'JAUNG, Rebekah',
      'LEE, David',
      'MAYNE, Nicholas',
      'MOORE, Robert',
      'PATRICK, Nicola',
      'RICHARDSON, Peter',
      'RUDOLPH, Godfrey James',
      'RUSDEN, Damon',
      'SANDILANDS, Julie',
      'SINGH, Raj',
      'SMITH, Nicola',
      'STEVENSON, Philippa',
      'SWEET, Cathy')
    aParty = theElection.addParty('INTERNET PARTY')
    aParty.addListCandidates('DAWSON, Suzie',
      'COONEY, Ben',
      'GOULDER-HOROBIN, Daymond',
      'BOOTH, Jo',
      'BEDFORD-PALMER, Blake',
      'KING, Bruce James',
      'SMITH, Nicholas Andrew Spencer',
      'TURNER, Jourdan')
    aParty = theElection.addParty('LABOUR PARTY')
    aParty.addListCandidates('ARDERN, Jacinda',
      'DAVIS, Kelvin',
      'LITTLE, Andrew',
      'ROBERTSON, Grant',
      'TWYFORD, Phil',
      'WOODS, Megan',
      'HIPKINS, Chris',
      'SEPULONI, Carmel Jean',
      'CLARK, David',
      'PARKER, David',
      'NASH, Stuart',
      'RADHAKRISHNAN, Priyanca',
      'HUO, Raymond',
      'LEES-GALLOWAY, Iain Francis',
      'TINETTI, Jan',
      'SIO, Aupito Tofae Sua William',
      'PRIME, Willow-Jean',
      "O'CONNOR, Damien",
      'SALESA, Jenny',
      'FAAFOI, Kris',
      'ALLAN, Kiri',
      'JACKSON, Willie',
      'CURRAN, Clare',
      'DYSON, Ruth',
      'WILLIAMS, Poto',
      'WALL, Louisa',
      'WOOD, Michael Philip',
      'ANDERSEN, Ginny',
      'LUXTON, Jo',
      'RUSSELL, Deborah',
      'CRAIG, Liz',
      'LUBECK, Marja',
      'MALLARD, Trevor',
      'EAGLE, Paul',
      'COFFEY, Tamati',
      'STRANGE, Jamie',
      "KANONGATA'A-SUISUIKI, Anahila",
      'McANULTY, Kieran',
      'WARREN-CLARK, Angie',
      'WHITE, Helen Ione',
      "O'CONNOR, Greg",
      'LEWIS, Steph',
      'WEBB, Duncan',
      'SOSENE, Lemauga Lydia',
      'WALKER, Janette',
      'LORCK, Anna',
      'UDANGA, Romy',
      'BOYACK, Rachel',
      'JOHAL, Sarb',
      'CHEN, Naisi',
      'HALBERT, Shanan',
      'ROSEWARNE, Dan',
      'AN, Jin',
      'PABLA, Jesse',
      'HUMPHREY, Hilary',
      'SAVAGE, Tony John',
      'LOADER, Brooke',
      'SANDFORD, Ben',
      'TAOGAGA, Kurt',
      'WARREN, Heather',
      'McDONALD, Sam',
      'CHAPMAN, Cherie Joy',
      'AL-BUSTANJI, Ala',
      'KAUR, Baljit',
      'HIGGINS, Linsey')
    aParty = theElection.addParty('MANA')
    aParty.addListCandidates('HARAWIRA, Hone',
      'McNAB, Lisa',
      "PAPALI'I, Papalii James",
      'REPIA, Tracey-lee')
    aParty = theElection.addParty('MAORI PARTY')
    aParty.addListCandidates('FOX, Marama',
      'FLAVELL, Te Ururoa',
      'PAPA, Stanley Rahui',
      'TAURIMA, Shane',
      'REEDY-TAARE, Mei',
      'TAMATI, Howie',
      'TE HAU, Hinurewa',
      'ESERA, Tuilagi Saipele',
      'KIRIA, John',
      'McLEOD, Te Waka',
      'STODDART-SMITH, Carrie',
      'LUA, Manase',
      'KANG, Wetex',
      'HOHAIA, Tasha',
      'TOFILAU-TEVAGA, Esther',
      'POROU, Tina Tangi Whaiora',
      'NGATAI, Rongokino George',
      'WHITLOCK, Cinnamon',
      'BHANA, Raewyn Teresa',
      'CHAPMAN, Ngarangi',
      'BIDDLE, Wendy',
      'MARSTERS, Maryanne',
      'WILLIAMS, Karen',
      'TE WHIU, Amiria',
      'PEPA, Mele')
    aParty = theElection.addParty('NATIONAL PARTY')
    aParty.addListCandidates('ENGLISH, Bill',
      'BENNETT, Paula',
      'CARTER, David',
      'JOYCE, Steven',
      'BROWNLEE, Gerry',
      'BRIDGES, Simon',
      'ADAMS, Amy',
      'COLEMAN, Jonathan',
      'FINLAYSON, Christopher',
      'WOODHOUSE, Michael',
      'TOLLEY, Anne',
      'GUY, Nathan',
      'KAYE, Nikki',
      'McCLAY, Todd',
      'SMITH, Nick',
      'COLLINS, Judith',
      'BARRY, Maggie',
      'GOLDSMITH, Paul',
      'UPSTON, Louise',
      'NGARO, Alfred',
      'MITCHELL, Mark',
      'WAGNER, Nicky',
      'DEAN, Jacqui',
      'BENNETT, David',
      'MACINDOE, Tim',
      'SIMPSON, Scott',
      'ROSS, Jami-Lee',
      'KURIGER, Barbara',
      'DOOCEY, Matt',
      'HUDSON, Brett',
      'LEE, Melissa',
      'BAKSHI, Kanwaljit Singh',
      'YANG, Jian',
      'PARMAR, Parmjeet',
      'YOUNG, Jonathan',
      'HAYES, Jo',
      'McKELVIE, Ian',
      "O'CONNOR, Simon",
      'BAYLY, Andrew',
      'BISHOP, Chris',
      'DOWIE, Sarah',
      'KORAKO, Nuk',
      'MULLER, Todd',
      'PUGH, Maureen',
      'RETI, Shane',
      'SCOTT, Alastair',
      'SMITH, Stuart',
      'WILLIS, Nicola',
      'LOHENI, Agnes',
      'GARCIA, Paulo',
      'KING, Matt',
      'HIATT, David',
      'GREGORY, Matt',
      'PIERCE, Adrienne',
      'ELLIOTT, David',
      'BUNGARD, Katrina',
      'BEERAM, Bala',
      "O'FALLON, Carolyn",
      'MURRELL, Euon',
      'BROWN, Simeon',
      'FALLOON, Andrew',
      'HIPANGO, Harete',
      'LEE, Denise',
      'PENK, Chris',
      'STANFORD, Erica')
    aParty = theElection.addParty('NEW ZEALAND FIRST PARTY')
    aParty.addListCandidates('PETERS, Winston',
      'MARK, Ron',
      'MARTIN, Tracey',
      'TABUTEAU, Fletcher',
      'BALL, Darroch',
      'MITCHELL, Clayton',
      'PATTERSON, Mark',
      'JONES, Shane',
      'MARCROFT, Jenny',
      'BINDRA, Mahesh',
      'PARAONE, Pita',
      'BOND, Ria',
      "O'ROURKE, Denis",
      'WILSON, David',
      'PROSSER, Richard Ivor',
      'REEVES, Jon',
      'HUSBAND, Stu',
      'FOSTER, Andy',
      'MARK-SHADBOLT, Melanie',
      'PETERSON, Helen',
      'STEVENSON, Rob',
      'CLOSE, Lisa Susan',
      'ARBUCKLE, Jamie',
      'HUBBARD, Josh',
      'MEIKLE, Talani',
      'CHAN, Peter',
      'GRAY, Lester',
      'DEGIA-PALA, Anne',
      'KELLY, Suzanne',
      'CHONG, Murray',
      'FARRELLY, Jackie',
      'GREENING, Toa',
      'PAUL, Julian',
      'WIHONGI, Shayne',
      'RUDZKI, Romuald Edward',
      'SKIPWORTH, Reginald Herbert',
      'KAIRAU, Joe',
      'KOLONI, Kym',
      'MILLS, Geoffrey John',
      'FAMILTON, Alex',
      'ANDREWS, Anne-Marie',
      'TILLEY, Julian',
      'FLESHER, William',
      'APANUI, Tane John',
      'HALL, John',
      'VOIGHT, Warren',
      'JOHNSTON, Jane',
      'EDWARDS, Frank',
      'RUPPELDT, Ilja',
      'PARORO, Mataroa',
      'RUSHTON, Kerry Maria',
      'GUPTA, Alok',
      'LITTLEJOHN, Andrew McGregor',
      'SARA, Susan',
      'MAHON, Ken',
      'PALMER, Lindy Michelle')
    aParty = theElection.addParty("NEW ZEALAND PEOPLE'S PARTY")
    aParty.addListCandidates('NAUHRIA, Roshan',
      'CHING, Steven',
      'SHARMA, Anil',
      'YAO, Lily',
      'WU, Joann',
      'NAMPALLY, Sree')
    aParty = theElection.addParty('NZ OUTDOORS PARTY')
    aParty.addListCandidates('SIMMONS, Alan Frank',
      'HAYNES, David',
      'PAULL, Derrick',
      'BEARMAN-RIEDEL, Wilf')
    aParty = theElection.addParty('THE OPPORTUNITIES PARTY (TOP)')
    aParty.addListCandidates('MORGAN, Gareth',
      'SIMMONS, Geoff',
      'MOORE, Teresa',
      'MIKAERE, Buddy',
      'WILSON, Olly',
      'POKERE-PHILLIPS, Donna',
      'HILL, Doug',
      'TUKAPUA, Piri-Hira',
      'GLENJARMAN, Nicola',
      'HAKA, Mika',
      'SNOYINK, Nicky',
      'WARWICK, Richard',
      'JOHNSTON, Ted Faleauto',
      'GRAY, Abe',
      'ULYATT, Clint',
      'THURSTON, Dan',
      'IMMINK, Lesley',
      'LEE, Vanessa',
      'PLUNKET, Paddy',
      'OWENS, Brittany',
      'ISBISTER, Matt',
      'HAY, David',
      'CONDIE, Jenny',
      'HAMMOND DOUBE, Jessica',
      'NEILL, Kevin',
      'SMITH, Lindsay')
    aParty = theElection.addParty('UNITED FUTURE')
    aParty.addListCandidates('LIGHT, Damian',
      'RICKARD, Ben',
      'SHEFFIELD-CRANSTOUN, Kelleigh',
      'NADAKUITAVUKI, Bale',
      'TURNER, Judy',
      'TODD, Quentin',
      'HUBSCHER, John',
      'FOSTER, John Truman',
      'GASKIN, Ian Camden',
      'WOOLSTON, JB')

    /*****************************************************************************************/
    // Electotrates, Electorate MPs and Votes for Registered Parties by Electorate
    // http://www.electionresults.govt.nz/electionresults_2017_preliminary/voting-place-statistics.html
    /*
    ACT New Zealand
    Aotearoa Legalise Cannabis Party
    Ban1080  Conservative
    Democrats for Social Credit
    Green Party
    Internet Party
    Labour Party
    MANA
    MÄori Party
    National Party
    New Zealand First Party
    New Zealand People's Party
    NZ Outdoors Party
    The Opportunities Party (TOP)
    United Future
    Informal Party Votes
    */
    anElectorate = theElection.addElectorate('Auckland Central')
    anElectorate.addWinner('KAYE, Nikki', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(317, 71, 12, 29, 4, 4170, 10, 11340, 12, 123, 11773, 1165, 10, 8, 944, 19, 63)

    anElectorate = theElection.addElectorate('Bay of Plenty')
    anElectorate.addWinner('MULLER, Todd', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(206, 113, 40, 106, 12, 1708, 3, 10817, 7, 214, 23164, 4568, 31, 40, 1349, 32, 140)

    anElectorate = theElection.addElectorate('Botany')
    anElectorate.addWinner('ROSS, Jami-Lee', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(209, 54, 6, 91, 2, 841, 9, 10279, 12, 195, 21428, 1612, 44, 14, 288, 33, 110)

    anElectorate = theElection.addElectorate('Christchurch Central')
    anElectorate.addWinner('WEBB, Duncan', 'LABOUR PARTY')
    anElectorate.addPartyVotes(155, 108, 21, 94, 5, 3492, 8, 14541, 11, 139, 13956, 1869, 16, 21, 1246, 45, 111)

    anElectorate = theElection.addElectorate('Christchurch East')
    anElectorate.addWinner('WILLIAMS, Poto', 'LABOUR PARTY')
    anElectorate.addPartyVotes(116, 108, 46, 156, 19, 2343, 12, 16414, 3, 133, 12319, 2194, 14, 15, 807, 30, 132)

    anElectorate = theElection.addElectorate('Clutha-Southland')
    anElectorate.addWinner('WALKER, Hamish', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(141, 118, 144, 75, 10, 1654, 5, 8960, 4, 95, 21915, 2900, 13, 26, 894, 29, 171)

    anElectorate = theElection.addElectorate('Coromandel')
    anElectorate.addWinner('SIMPSON, Scott', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(174, 137, 125, 66, 8, 2259, 5, 11820, 11, 100, 21786, 5216, 30, 52, 728, 13, 205)

    anElectorate = theElection.addElectorate('Dunedin North')
    anElectorate.addWinner('CLARK, David', 'LABOUR PARTY')
    anElectorate.addPartyVotes(157, 89, 55, 60, 15, 5110, 10, 17808, 11, 108, 10382, 1899, 17, 14, 1535, 29, 86)

    anElectorate = theElection.addElectorate('Dunedin South')
    anElectorate.addWinner('CURRAN, Clare', 'LABOUR PARTY')
    anElectorate.addPartyVotes(116, 90, 39, 54, 4, 2362, 5, 19183, 6, 83, 14164, 2625, 20, 20, 967, 26, 103)

    anElectorate = theElection.addElectorate('East Coast')
    anElectorate.addWinner('TOLLEY, Anne', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(106, 124, 89, 67, 5, 1770, 7, 14150, 20, 290, 17011, 3820, 15, 37, 905, 32, 188)

    anElectorate = theElection.addElectorate('East Coast Bays')
    anElectorate.addWinner('STANFORD, Erica', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(347, 58, 5, 95, 6, 1660, 4, 8130, 5, 55, 22006, 1886, 18, 14, 673, 34, 54)

    anElectorate = theElection.addElectorate('Epsom')
    anElectorate.addWinner('SEYMOUR, David', 'ACT NEW ZEALAND')
    anElectorate.addPartyVotes(696, 38, 9, 80, 7, 3263, 6, 9575, 6, 124, 22875, 1229, 34, 7, 1043, 24, 76)

    anElectorate = theElection.addElectorate('Hamilton East')
    anElectorate.addWinner('BENNETT, David', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(225, 89, 17, 75, 6, 2221, 9, 12958, 10, 199, 17380, 2074, 22, 23, 1157, 29, 136)

    anElectorate = theElection.addElectorate('Hamilton West')
    anElectorate.addWinner('MACINDOE, Tim', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(149, 110, 32, 111, 19, 1588, 6, 13539, 9, 232, 17119, 2836, 28, 28, 981, 35, 162)

    anElectorate = theElection.addElectorate('Helensville')
    anElectorate.addWinner('PENK, Chris', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(319, 112, 20, 87, 7, 2971, 9, 10012, 13, 105, 21958, 2795, 12, 20, 799, 27, 67)

    anElectorate = theElection.addElectorate('Hunua')
    anElectorate.addWinner('BAYLY, Andrew', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(297, 102, 33, 76, 5, 1237, 7, 9199, 8, 103, 26005, 3541, 24, 27, 611, 35, 91)

    anElectorate = theElection.addElectorate('Hutt South')
    anElectorate.addWinner('BISHOP, Chris', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(189, 85, 24, 71, 3, 3041, 11, 16858, 6, 173, 17390, 2311, 10, 52, 1442, 31, 232)

    anElectorate = theElection.addElectorate('Ilam')
    anElectorate.addWinner('BROWNLEE, Gerry', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(224, 74, 14, 124, 5, 2602, 8, 11341, 3, 134, 19134, 1364, 18, 11, 1273, 28, 91)

    anElectorate = theElection.addElectorate('Invercargill')
    anElectorate.addWinner('DOWIE, Sarah', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(95, 141, 103, 73, 43, 1166, 9, 12891, 6, 79, 17414, 3139, 21, 23, 760, 27, 163)

    anElectorate = theElection.addElectorate('Kaikōura')
    anElectorate.addWinner('SMITH, Stuart', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(151, 117, 119, 135, 14, 1963, 3, 11587, 4, 92, 20925, 3561, 10, 40, 865, 23, 172)

    anElectorate = theElection.addElectorate('Kelston')
    anElectorate.addWinner('SEPULONI, Carmel Jean', 'LABOUR PARTY')
    anElectorate.addPartyVotes(112, 106, 7, 91, 1, 2133, 9, 15982, 24, 159, 10456, 2087, 45, 11, 494, 14, 120)

    anElectorate = theElection.addElectorate('Mana')
    anElectorate.addWinner('FAAFOI, Kris', 'LABOUR PARTY')
    anElectorate.addPartyVotes(125, 107, 19, 54, 7, 3076, 4, 17831, 47, 219, 14305, 1936, 24, 16, 1311, 41, 188)

    anElectorate = theElection.addElectorate('Māngere')
    anElectorate.addWinner('SIO, Aupito Tofae Sua William', 'LABOUR PARTY')
    anElectorate.addPartyVotes(35, 74, 3, 73, 2, 760, 6, 19931, 48, 573, 4864, 1447, 37, 3, 191, 10, 240)

    anElectorate = theElection.addElectorate('Manukau East')
    anElectorate.addWinner('SALESA, Jenny', 'LABOUR PARTY')
    anElectorate.addPartyVotes(70, 70, 3, 50, 3, 601, 10, 17730, 23, 403, 6195, 1550, 78, 9, 188, 12, 245)    
    //anElectorate.addPartyVotes(59, 47, 1, 41, 3, 447, 7, 13622, 10, 282, 4967, 1296, 57, 9, 135, 7, 20)

    anElectorate = theElection.addElectorate('Manurewa')
    anElectorate.addWinner('WALL, Louisa', 'LABOUR PARTY')
    anElectorate.addPartyVotes(75, 104, 7, 98, 12, 698, 4, 16592, 22, 313, 8109, 1869, 58, 9, 210, 15, 218)

    anElectorate = theElection.addElectorate('Maungakiekie')
    anElectorate.addWinner('LEE, Denise', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(227, 82, 7, 67, 3, 2092, 16, 15484, 10, 288, 14542, 1815, 33, 36, 780, 23, 260)    
    //anElectorate.addPartyVotes(229, 63, 6, 65, 2, 5657, 12, 16742, 8, 175, 13112, 1329, 31, 17, 1144, 22, 146)

    anElectorate = theElection.addElectorate('Mt Albert')
    anElectorate.addWinner('ARDERN, Jacinda', 'LABOUR PARTY')
    anElectorate.addPartyVotes(229, 63, 6, 65, 2, 5657, 12, 16742, 8, 175, 13112, 1329, 31, 17, 1144, 22, 146)

    anElectorate = theElection.addElectorate('Mt Roskill')
    anElectorate.addWinner('WOOD, Michael Philip', 'LABOUR PARTY')
    anElectorate.addPartyVotes(207, 62, 4, 90, 13, 2205, 4, 15135, 9, 167, 15248, 1572, 80, 16, 618, 24, 213)

    anElectorate = theElection.addElectorate('Napier')
    anElectorate.addWinner('NASH, Stuart', 'LABOUR PARTY')
    anElectorate.addPartyVotes(152, 116, 38, 145, 25, 1938, 3, 14681, 11, 154, 17929, 2794, 32, 28, 739, 19, 119)

    anElectorate = theElection.addElectorate('Nelson')
    anElectorate.addWinner('SMITH, Nick', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(137, 99, 97, 214, 15, 3130, 6, 17311, 9, 92, 16374, 2712, 14, 58, 1360, 23, 151)

    anElectorate = theElection.addElectorate('New Lynn')
    anElectorate.addWinner('RUSSELL, Deborah', 'LABOUR PARTY')
    anElectorate.addPartyVotes(149, 66, 5, 109, 23, 2147, 7, 14810, 12, 122, 14503, 2116, 80, 9, 514, 30, 142)

    anElectorate = theElection.addElectorate('New Plymouth')
    anElectorate.addWinner('YOUNG, Jonathan', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(222, 163, 39, 65, 8, 1798, 7, 13662, 8, 250, 19517, 3107, 16, 26, 1093, 36, 118)

    anElectorate = theElection.addElectorate('North Shore')
    anElectorate.addWinner('BARRY, Maggie', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(372, 69, 11, 86, 10, 2638, 9, 10375, 7, 103, 23009, 2097, 13, 14, 953, 22, 83)

    anElectorate = theElection.addElectorate('Northcote')
    anElectorate.addWinner('COLEMAN, Jonathan', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(261, 93, 8, 82, 50, 2496, 9, 12639, 11, 136, 18005, 2221, 23, 17, 845, 24, 75)

    anElectorate = theElection.addElectorate('Northland')
    anElectorate.addWinner('KING, Matt', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(191, 200, 50, 149, 25, 2458, 1, 12243, 119, 133, 18834, 5353, 25, 27, 806, 22, 149)

    anElectorate = theElection.addElectorate('Ōhāriu')
    anElectorate.addWinner("O'CONNOR, Greg", 'LABOUR PARTY')
    anElectorate.addPartyVotes(239, 68, 18, 71, 8, 3881, 8, 14306, 5, 186, 18277, 1502, 13, 23, 1678, 78, 84)

    anElectorate = theElection.addElectorate('Ōtaki')
    anElectorate.addWinner('GUY, Nathan', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(163, 79, 44, 69, 7, 2358, 3, 15014, 9, 156, 19187, 3421, 24, 19, 910, 25, 198)

    anElectorate = theElection.addElectorate('Pakuranga')
    anElectorate.addWinner('BROWN, Simeon', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(272, 69, 9, 83, 3, 1340, 9, 8872, 6, 124, 22149, 2369, 32, 18, 436, 16, 96)

    anElectorate = theElection.addElectorate('Palmerston North')
    anElectorate.addWinner('LEES-GALLOWAY, Iain Francis', 'LABOUR PARTY')
    anElectorate.addPartyVotes(138, 96, 18, 116, 11, 2166, 7, 14648, 15, 141, 14276, 2767, 17, 16, 944, 30, 139)

    anElectorate = theElection.addElectorate('Papakura')
    anElectorate.addWinner('COLLINS, Judith', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(215, 116, 24, 119, 8, 1074, 8, 12730, 17, 242, 19464, 3338, 111, 24, 455, 19, 198)

    anElectorate = theElection.addElectorate('Port Hills')
    anElectorate.addWinner('DYSON, Ruth', 'LABOUR PARTY')
    anElectorate.addPartyVotes(153, 91, 18, 80, 22, 4392, 11, 16825, 5, 140, 17381, 2064, 12, 23, 1459, 24, 110)

    anElectorate = theElection.addElectorate('Rangitata')
    anElectorate.addWinner('FALLOON, Andrew', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(193, 138, 41, 99, 8, 1321, 2, 12729, 8, 71, 20106, 2281, 35, 30, 825, 25, 131)

    anElectorate = theElection.addElectorate('Rangitīkei')
    anElectorate.addWinner('McKELVIE, Ian', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(173, 147, 96, 114, 11, 1653, 3, 10867, 10, 169, 19472, 3900, 18, 44, 852, 37, 112)

    anElectorate = theElection.addElectorate('Rimutaka')
    anElectorate.addWinner('HIPKINS, Chris', 'LABOUR PARTY')
    anElectorate.addPartyVotes(147, 96, 33, 169, 10, 2156, 12, 17180, 10, 181, 15433, 2938, 22, 16, 1095, 32, 148)

    anElectorate = theElection.addElectorate('Rodney')
    anElectorate.addWinner('MITCHELL, Mark', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(389, 116, 17, 130, 8, 2084, 11, 10571, 3, 103, 27010, 3955, 20, 32, 805, 27, 70)

    anElectorate = theElection.addElectorate('Rongotai')
    anElectorate.addWinner('EAGLE, Paul', 'LABOUR PARTY')
    anElectorate.addPartyVotes(142, 70, 14, 58, 5, 7353, 8, 18323, 12, 208, 11598, 1509, 8, 14, 1915, 23, 140)

    anElectorate = theElection.addElectorate('Rotorua')
    anElectorate.addWinner('McCLAY, Todd', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(120, 116, 66, 97, 8, 1488, 8, 11622, 8, 454, 17390, 3561, 30, 23, 974, 19, 133)

    anElectorate = theElection.addElectorate('Selwyn')
    anElectorate.addWinner('ADAMS, Amy', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(201, 79, 41, 87, 3, 2339, 6, 11508, 2, 75, 26003, 2440, 11, 36, 1131, 32, 74)

    anElectorate = theElection.addElectorate('Tāmaki')
    anElectorate.addWinner("O'CONNOR, Simon", 'NATIONAL PARTY')
    anElectorate.addPartyVotes(524, 53, 8, 45, 6, 2166, 2, 9374, 7, 174, 23628, 1497, 11, 6, 789, 29, 81)

    anElectorate = theElection.addElectorate('Taranaki-King')
    anElectorate.addWinner('Country  KURIGER, Barbara', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(231, 120, 97, 118, 13, 1643, 7, 8823, 9, 194, 21466, 3330, 31, 37, 815, 37, 124)

    anElectorate = theElection.addElectorate('Taupō')
    anElectorate.addWinner('UPSTON, Louise', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(194, 120, 108, 111, 13, 1388, 6, 11683, 15, 262, 21744, 3634, 33, 68, 918, 12, 151)

    anElectorate = theElection.addElectorate('Tauranga')
    anElectorate.addWinner('BRIDGES, Simon', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(242, 89, 22, 113, 14, 1562, 6, 10737, 8, 211, 21182, 4523, 17, 27, 1282, 40, 180)

    anElectorate = theElection.addElectorate('Te Atatū')
    anElectorate.addWinner('TWYFORD, Phil', 'LABOUR PARTY')
    anElectorate.addPartyVotes(170, 104, 13, 120, 8, 1715, 14, 15406, 15, 161, 14514, 2256, 42, 15, 451, 25, 170)

    anElectorate = theElection.addElectorate('Tukituki')
    anElectorate.addWinner('YULE, Lawrence', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(134, 123, 40, 129, 18, 1993, 6, 13302, 9, 135, 19166, 3062, 30, 24, 758, 33, 128)

    anElectorate = theElection.addElectorate('Upper Harbour')
    anElectorate.addWinner('BENNETT, Paula', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(246, 88, 9, 144, 6, 1484, 14, 11793, 24, 112, 19722, 2092, 25, 11, 597, 21, 114)

    anElectorate = theElection.addElectorate('Waikato')
    anElectorate.addWinner('van de MOLEN, Tim', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(261, 142, 58, 123, 15, 1240, 4, 9844, 5, 177, 23891, 4112, 18, 32, 759, 26, 146)

    anElectorate = theElection.addElectorate('Waimakariri')
    anElectorate.addWinner('DOOCEY, Matt', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(116, 97, 35, 166, 20, 1645, 6, 12888, 5, 85, 21398, 2653, 13, 33, 714, 35, 103)

    anElectorate = theElection.addElectorate('Wairarapa')
    anElectorate.addWinner('SCOTT, Alastair', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(162, 150, 81, 86, 8, 1950, 6, 12984, 8, 209, 19750, 4180, 24, 29, 821, 20, 134)

    anElectorate = theElection.addElectorate('Waitaki')
    anElectorate.addWinner('DEAN, Jacqui', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(109, 115, 86, 91, 18, 2328, 8, 13241, 7, 78, 23685, 2892, 17, 47, 1134, 33, 134)

    anElectorate = theElection.addElectorate('Wellington Central')
    anElectorate.addWinner('ROBERTSON, Grant', 'LABOUR PARTY')
    anElectorate.addPartyVotes(330, 55, 13, 29, 6, 9198, 9, 16500, 14, 225, 13156, 972, 10, 11, 2538, 28, 72)

    anElectorate = theElection.addElectorate('West Coast-Tasman')
    anElectorate.addWinner("O'CONNOR, Damien", 'LABOUR PARTY')
    anElectorate.addPartyVotes(137, 173, 359, 97, 21, 3117, 2, 14015, 10, 73, 15122, 3536, 18, 36, 982, 26, 149)

    anElectorate = theElection.addElectorate('Whanganui')
    anElectorate.addWinner('HIPANGO, Harete', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(168, 154, 56, 94, 20, 1775, 7, 13748, 12, 162, 16874, 3783, 23, 25, 639, 23, 161)

    anElectorate = theElection.addElectorate('Whangarei')
    anElectorate.addWinner('RETI, Shane', 'NATIONAL PARTY')
    anElectorate.addPartyVotes(198, 135, 39, 113, 71, 2342, 10, 12993, 43, 101, 18572, 5804, 18, 28, 716, 19, 204)

    anElectorate = theElection.addElectorate('Wigram')
    anElectorate.addWinner('WOODS, Megan', 'LABOUR PARTY')
    anElectorate.addPartyVotes(145, 119, 23, 98, 17, 2239, 9, 13827, 5, 134, 13767, 1986, 22, 21, 960, 32, 146)

    anElectorate = theElection.addElectorate('Hauraki-Waikato')
    anElectorate.addWinner('MAHUTA, Nanaia', 'LABOUR PARTY')
    anElectorate.addPartyVotes(20, 240, 29, 18, 4, 1193, 4, 14279, 230, 2635, 1594, 1936, 31, 13, 582, 6, 402)

    anElectorate = theElection.addElectorate('Ikaroa-Rāwhiti')
    anElectorate.addWinner('WHAITIRI, Meka', 'LABOUR PARTY')
    anElectorate.addPartyVotes(30, 214, 28, 15, 1, 1143, 5, 15233, 198, 3058, 1131, 1685, 26, 9, 468, 1, 285)

    anElectorate = theElection.addElectorate('Tāmaki Makaurau')
    anElectorate.addWinner('HENARE, Peeni', 'LABOUR PARTY')
    anElectorate.addPartyVotes(32, 153, 10, 24, 3, 1490, 3, 12220, 364, 2258, 1348, 1963, 25, 4, 477, 6, 213)

    anElectorate = theElection.addElectorate('Te Tai Hauāuru')
    anElectorate.addWinner('RURAWHE, Adrian Paki', 'LABOUR PARTY')
    anElectorate.addPartyVotes(20, 221, 52, 17, 2, 1507, 6, 13475, 160, 3448, 1509, 1675, 20, 8, 658, 6, 260)

    anElectorate = theElection.addElectorate('Te Tai Tokerau')
    anElectorate.addWinner('DAVIS, Kelvin', 'LABOUR PARTY')
    anElectorate.addPartyVotes(41, 269, 21, 14, 1, 1583, 5, 14446, 1455, 1615, 1851, 2775, 40, 12, 577, 5, 223)

    anElectorate = theElection.addElectorate('Te Tai Tonga')
    anElectorate.addWinner('TIRIKATENE, Rino', 'LABOUR PARTY')
    anElectorate.addPartyVotes(48, 280, 58, 18, 5, 1963, 6, 13484, 123, 2030, 3014, 1926, 20, 11, 944, 10, 226)

    anElectorate = theElection.addElectorate('Waiariki')
    anElectorate.addWinner('COFFEY, Tamati', 'LABOUR PARTY')
    anElectorate.addPartyVotes(19, 168, 64, 15, 6, 926, 5, 14144, 271, 4730, 1139, 1780, 27, 7, 690, 4, 334)

    return theElection
  }
}
