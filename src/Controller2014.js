class Controller2014 {
  static setup() {
    /* all data from
     * http://archive.electionresults.govt.nz/electionresults_2011/e9/html/statistics.html
     */
    var theElection = new Election(2014)
    var aParty, anElectorate
    // parties AND Party Lists of successful parties
    aParty = theElection.addParty('ACT New Zealand')
    aParty.addListCandidates('WHYTE, Jamie Thomas'
      , 'WANG, Kenneth Xiaoxuan'
      , 'GRIEVE, Robin Barrie'
      , 'HOULBROOKE, Beth Patricia'
      , 'NICOLSON, Donald Owen'
      , 'BERRY, Stephen James'
      , 'KOVALENKO, Daria Alexeevna'
      , 'VEALE, Gareth Rhys'
      , 'CUMMINGS, Ian James'
      , 'RUSSELL-MUTI, Sara Jane'
      , 'SEVERIN, Toni Gae'
      , 'PIRRIE, Phelan Michael'
      , 'FLETCHER, Stephen James'
      , 'OLSEN, David Edward'
      , 'KEARNEY, Nicholas Norman'
      , 'FITZPATRICK, Sean Daniel Thomas'
      , 'EVANS, Richard Warwick'
      , 'MILNE, Michael John'
      , 'SMITH, Ronald Charles'
      , 'KRONFELD, Timothy Paul'
      , 'ATKINSON, Shane'
      , 'BURROW, Michael Ian'
      , 'CARLEY, Bruce Leo Benedict'
      , 'CORBETT, Thomas Frederick'
      , 'DAVIDSON, Alan Daniel'
      , 'FERGUSSON, Thomas Wilson'
      , 'GILBERT, Paul de Vallenger'
      , 'GRAY, James Stephen'
      , 'GRIEVE, Shaun Hayden'
      , 'HAYCOCK, Bruce Kim'
      , 'HUFFLETT, Paul Charles'
      , 'JIANG, Peter'
      , 'LENNOX, Kenneth Duncan'
      , 'McCABE, Kathleen Patricia Louise'
      , 'NELSON, Craig'
      , 'NICHOLLS, Colin William'
      , "O'SULLIVAN, Graeme Arthur"
      , 'REEDER, Joanne McLean'
      , 'RUSSELL, Geoffrey Neil'
      , 'THOMPSON, John Stanley'
      , 'WILSON, Neil John'
    )

    aParty = theElection.addParty('Aotearoa Legalise Cannabis Party')

    aParty = theElection.addParty('Ban1080')

    aParty = theElection.addParty('Conservative')

    aParty = theElection.addParty('Democrats For Social Credit')

    aParty = theElection.addParty('Focus New Zealand')

    aParty = theElection.addParty('Green Party')
    aParty.addListCandidates('STANTON TUREI, Metiria Leanne Agnes'
      , 'NORMAN, Russel William'
      , 'HAGUE, Kevin Grant'
      , 'SAGE, Eugenie Meryl'
      , 'HUGHES, Gareth Thomas Llewellyn'
      , 'DELAHUNTY, Catherine'
      , 'GRAHAM, Kennedy Gollan Montrose'
      , 'GENTER, Julie Anne'
      , 'MATHERS, Mojo Celeste'
      , 'LOGIE, Heather Janet'
      , 'CLENDON, David James'
      , 'SHAW, James Peter Edward'
      , 'ROCHE, Denise Maree'
      , 'BROWNING, Steffan John'
      , 'DAVIDSON, Marama Mere-Ana'
      , 'COATES, Robert Barry Hobson'
      , 'HART, John Stuart'
      , 'KENNEDY, David John'
      , 'ELLEY, Jeanette Susan'
      , 'McDONALD, Jack Baxter'
      , 'MOORHOUSE, David Peter'
      , 'ROTMANN, Sea'
      , 'LECKINGER, Richard John'
      , 'PERINPANAYAGAM, Umesh'
      , 'RUTHVEN, Susanne Marie'
      , 'MOORE, Teresa Janet'
      , 'LANGSBURY, Dora Roimata'
      , 'WOODLEY, Tane Hohepa'
      , 'PERLEY, Christopher John Keith'
      , 'GOLDSMITH, Rachael Louise'
      , 'KELCHER, John Michael'
      , 'ROGERS, Daniel'
      , 'WESLEY, Richard Laurence'
      , 'SMITHSON, Anne-Elise'
      , 'McALL, Malcolm Ley Stuart'
      , 'FORD, Christopher John'
      , 'HUNT, Reuben Timothy'
      , 'BAILEY, Paul Edward'
      , 'CONROY, Caroline Anne'
      , 'COUTTS, Susan Jane'
      , 'DOHERTY, Paul William'
      , 'DREW, Madeleine Rose'
      , 'GALLAGHER, Shane Anthony'
      , 'HILL, Peter Selwyn'
      , 'IRWIN, Frances Ruth'
      , 'KANI, Henare Matua'
      , 'MACLEAN, Gavin Wareham'
      , 'MAYNE, Nicholas Robert'
      , 'McLEAN, Ian Gordon'
      , 'MOORE, Robert Bruce'
      , 'ROBERTS, Sarah Ngaire'
      , 'ROBERTSON, Colin Donald'
      , 'ROBINSON, David John'
      , 'SERVIAN, Mark Anthony'
      , 'SIGGAARD, Dorthe'
      , 'STANSFIELD, Brett Thomas'
      , 'STEWART, Gary Todd'
      , 'STRICKSON-PUA, Muamua Sofi'
      , 'TUPOU, Patricia Margaret'
    )

    aParty = theElection.addParty('Internet Mana')

    aParty = theElection.addParty('Labour Party')
    aParty.addListCandidates('CUNLIFFE, David Richard'
      , 'PARKER, David William'
      , 'ROBERTSON, Grant Murray'
      , 'KING, Annette Faye'
      , 'ARDERN, Jacinda'
      , 'MAHUTA, Nanaia Cybele'
      , 'TWYFORD, Philip Stoner'
      , 'COSGROVE, Clayton James'
      , 'HIPKINS, Christopher John'
      , 'MORONEY, Suzanne Mary'
      , 'LITTLE, Andrew James'
      , 'WALL, Louisa Hareruia'
      , 'SHEARER, David James'
      , 'SIO, Sua William'
      , 'STREET, Maryan'
      , 'GOFF, Philip Bruce'
      , 'MACKEY, Moana Lynore'
      , 'DAVIS, Kelvin Glen'
      , 'WHAITIRI, Meka'
      , 'WOODS, Megan Cherie'
      , 'HUO, Raymond'
      , "O'CONNOR, Damien Peter"
      , 'RADHAKRISHNAN, Priyanca'
      , 'LEES-GALLOWAY, Iain Francis'
      , 'JONES, Rachel Anne'
      , 'CLARK, David Scott'
      , 'BEAUMONT, Carol Ann'
      , 'WILLIAMS, Munokoa Poto'
      , 'SEPULONI, Carmel Jean'
      , 'COFFEY, Tamati Gerald'
      , 'SALESA, Jennifer Teresia'
      , 'CRAIG, Elizabeth Dorothy'
      , 'RUSSELL, Deborah Faye'
      , 'PRIME, Willow-Jean'
      , 'MIKA, Jerome'
      , 'MILNE, Tony Robert'
      , 'ANDERSEN, Virginia Ruby'
      , 'SZABÓ, Claire Elizabeth'
      , 'WOOD, Michael Philip'
      , 'WILLIAMS, Arena Hinekura Sherburd'
      , 'McDOUALL, Hamish Crichton'
      , 'RAHMAN, Anjum Nausheen'
      , 'KAUSHAL, Sushil'
      , 'GREER, Christine'
      , 'GAYLOR, Penelope Louise'
      , 'WALKER, Janette Florence'
      , 'HILLS, Richard Brian'
      , 'HALBERT, Shanan Kiritea'
      , "KANONGATA'A-SUISUIKI, Anahila Lose"
      , 'WILSON, Clare Campbell'
      , 'DANN, James Macbeth'
      , 'ELLIS, Siobhan Kelly'
      , 'HADDOCK, Corie Jon'
      , 'STRANGE, Jamie Ross'
      , 'PAUL, Katie Ann Priocilla'
      , 'GIBSON, Steven John'
      , 'WU, Chao-Fu'
      , 'GRIMSHAW, Paul Radcliffe'
      , 'DORREEN, Tracey Pamela'
      , 'MAMEDOV, Tofik Shirzad Ogly'
      , 'TOROA, Hikiera Johnathan'
      , 'TYLER, Allan Hugh'
      , 'ELLIOTT, Susan Mary'
      , 'BUCKINGHAM, Simon Derek'
    )

    aParty = theElection.addParty('Maori Party')
    aParty.addListCandidates('FLAVELL, Te Ururoa James William Ben'
      , 'FOX, Marama Kahu'
      , 'McKENZIE, Christopher Owen'
      , 'PAENGA, Te Hira Keretene Te Whakaiti'
      , 'BUTTON, Ngaire Lorraine'
      , 'TUAINE, Nancy Te Urumanao'
      , 'ITI, Tame'
      , 'KIEL, Eraia James Rangiriri'
      , 'KAIPO, Anaru Joseph'
      , 'BHANA, Raewyn Teresa'
      , 'GLAVISH, Rangimarie Naida'
      , 'RERITI-CROFTS, Aroha Hohipera'
      , 'TE HAU, Te Hinurewa Ngahiwi Tame Kawe'
      , 'PHILLIPS, Thomas Tuatu Toihau'
      , 'GATE, Verna Te Roha'
      , 'KENDALL, Anne Marie'
      , 'PAKINGA, Hiria Gillian'
      , 'WINITANA, Claire Te Atamira'
      , 'SMITH, Rawiri Richard'
      , 'DAVIDSON, Lenis Mary'
      , 'MATAKI, Tania'
      , 'GARDYNE, Sheryl Ann'
      , 'PHILLIPS, Te Whe Ariki'
      , 'WAKEFIELD, Benita Waina'
    )

    aParty = theElection.addParty('National Party')
    aParty.addListCandidates('KEY, John Phillip'
      , 'ENGLISH, Simon William'
      , 'CARTER, David Cunningham'
      , 'BROWNLEE, Gerard Anthony'
      , 'JOYCE, Steven Leonard'
      , 'COLLINS, Judith Anne'
      , 'PARATA, Patricia Hekia'
      , 'FINLAYSON, Christopher Francis'
      , 'BENNETT, Paula Lee'
      , 'COLEMAN, Jonathan David'
      , 'McCULLY, Murray Stuart'
      , 'TOLLEY, Anne Merrilyn'
      , 'SMITH, Nick'
      , 'GROSER, Timothy John'
      , 'ADAMS, Amy Juliet'
      , 'GUY, Allen Nathan'
      , 'FOSS, Craig'
      , 'BRIDGES, Simon Joseph'
      , 'KAYE, Nicola Laura'
      , 'WOODHOUSE, Michael Allan'
      , 'GOODHEW, Joanne Gay'
      , 'BORROWS, Kerry James'
      , 'McCLAY, Todd Michael'
      , 'LOTU-IIGA, Peseta Samuelu Masunu'
      , 'WAGNER, Nicola Joanne'
      , 'TISCH, William Lindsay'
      , 'UPSTON, Louise Claire'
      , 'MACINDOE, Timothy Harley'
      , 'ROSS, Jami-Lee Matenga'
      , 'GOLDSMITH, Paul Jonathan'
      , 'LEE, Melissa'
      , 'BAKSHI, Kanwaljit Singh'
      , 'YANG, Jian'
      , 'NGARO, Alfred'
      , 'WILLIAMSON, Maurice Donald'
      , 'DEAN, Jacqueline Isobel'
      , 'BENNETT, David Allister'
      , 'YOUNG, Jonathan Edgar Joseph'
      , 'HUDSON, Brett John'
      , 'BARRY, Margaret Mary'
      , 'McKELVIE, Ian Robert Flockhart'
      , 'MITCHELL, Mark Patrick'
      , "O'CONNOR, Simon"
      , 'SABIN, Michael Lewis'
      , 'SIMPSON, Scott Anthony'
      , 'FOSTER-BELL, Paul Ayers Robert'
      , 'HAYES, Joanne Kowhai'
      , 'PARMAR, Kushmiita Parmjeet Kaur'
      , 'BISHOP, Christopher'
      , 'KORAKO, Tutehounuku'
      , 'NAYLOR, Jonathan Mark'
      , 'PUGH, Maureen Helena'
      , 'TURNER-TUPOU, Fia Taemanu'
      , 'BARCLAY, Todd Keith'
      , 'BAYLY, Andrew Henry'
      , 'DOOCEY, Matthew Maurice'
      , 'DOWIE, Sarah Maree'
      , 'KURIGER, Barbara Joan'
      , 'MULLER, Todd Michael'
      , 'RETI, Shane Raymond'
      , 'SCOTT, Alastair Oliver'
      , 'SMITH, Stuart Tayler'
      , 'WALFORD, Wayne Douglas'
      , 'BROWN, Simeon Peter'
      , 'WALKER, Hamish'
      , 'HOLDEN, Lewis'
      , 'VARLEY, Karl Daniel'
      , 'PENK, Christopher Aidan'
      , 'COOPER, Linda Ann'
      , "O'DWYER, Letitia Marie"
      , 'BRIDGES, Mark'
      , 'SOKRATOV, Boris'
      , 'EVETTS, Matthew Zane'
      , "O'FALLON, Carolyn Elisabeth"
      , 'LITTLEWOOD, Charlotte'
    )

    aParty = theElection.addParty('New Zealand First Party')
    aParty.addListCandidates('PETERS, Winston Raymond'
      , 'MARTIN, Tracey Anne'
      , 'PROSSER, Richard Ivor'
      , 'TABUTEAU, Fletcher'
      , 'STEWART, Barbara Joy'
      , 'MITCHELL, Clayton Robert Henry'
      , "O'ROURKE, Denis John"
      , 'PARAONE, Rewiti Pomare Kingi'
      , 'MARK, Ron Stanley'
      , 'BALL, Darroch Leicester'
      , 'BINDRA, Mahesh'
      , 'BOND, Ria Iris Daphne'
      , 'PARORO, Mataroa'
      , 'RUDZKI, Romuald Edward John'
      , 'REEVES, Jon Blaiklock'
      , 'LOLE-TAYLOR, Asenati'
      , 'CATCHPOLE, Brent Stanley'
      , 'ABRAHAM, George'
      , 'DOLMAN, Raymond'
      , 'BARR, Hugh'
      , 'DEGIA-PALA, Anne'
      , 'CAMPBELL, Steven Robert'
      , 'PERRY, Edwin Jock'
      , 'GUDGEON, William M'
      , 'PIERSON, Brent'
      , 'HUNT, Aaron Ronald'
      , 'HALL, John Harold'
      , 'TAURIMA, Richard John'
      , 'ERTEL, Grant Ernest'
      , 'LYON, Clifton Killip'
      , 'WOODS, William Edward'
    )

    aParty = theElection.addParty('NZ Independent Coalition')

    aParty = theElection.addParty('The Civilian Party')

    aParty = theElection.addParty('United Future')
    aParty.addListCandidates('DUNNE, Peter Francis'
      , 'SIMMONS, Alan Frank'
      , 'LIGHT, Damian Francis'
      , 'EUSOFF, Mohamed Sultan'
      , 'RICKARD, Benjamin John Cranswick'
      , 'WOOLSTON, Jason Bruce'
      , 'STONYER, David Lester'
      , 'MOCKRIDGE, Bryan'
      , 'TODD, Quentin Gregory'
      , 'MAXWELL, James Waerengaahika'
      , 'PARK, Sevaschan Sam'
    )

    /*****************************************************************************************/
    // Electotrates, Electorate MPs and Votes for Registered Parties by Electorate
    /* Party order:
     * ACT NEW ZEALAND
     * AOTEAROA LEGALISE CANNABIS PARTY
     * BAN1080
     * CONSERVATIVE
     * DEMOCRATS FOR SOCIAL CREDIT
     * FOCUS NEW ZEALAND
     * GREEN PARTY
     * INTERNET MANA
     * Labour Party
     * MAORI PARTY
     * National Party
     * EW ZEALAND FIRST PARTY
     * NZ INDEPENDENT COALITION
     * THE CIVILIAN PARTY
     * UNITED FUTURE
     * Informal Party Votes
    */

    anElectorate = theElection.addElectorate('Auckland Central')
    anElectorate.addWinner('KAYE, Nicola Laura', 'National Party')
    anElectorate.addPartyVotes(329, 85, 10, 486, 3, 2, 6242, 553, 6101, 158, 12652, 1459, 7, 17, 53, 99)

    anElectorate = theElection.addElectorate('Bay of Plenty')
    anElectorate.addWinner('MULLER, Todd Michael', 'National Party')
    anElectorate.addPartyVotes(90, 126, 50, 2072, 33, 6, 2645, 187, 4783, 207, 21096, 5100, 104, 10, 78, 88)

    anElectorate = theElection.addElectorate('Botany')
    anElectorate.addWinner('ROSS, Jami-Lee Matenga', 'National Party')
    anElectorate.addPartyVotes(808, 90, 12, 1519, 5, 6, 1461, 204, 7473, 71, 20016, 1825, 9, 8, 49, 128)

    anElectorate = theElection.addElectorate('Christchurch Central')
    anElectorate.addWinner('WAGNER, Nicola Joanne', 'National Party')
    anElectorate.addPartyVotes(167, 165, 27, 1065, 30, 1, 5419, 353, 8995, 157, 15301, 2462, 3, 40, 79, 108)

    anElectorate = theElection.addElectorate('Christchurch East')
    anElectorate.addWinner('WILLIAMS, Munokoa Poto', 'Labour Party')
    anElectorate.addPartyVotes(107, 186, 38, 1058, 20, 1, 4113, 286, 10450, 129, 12928, 3069, 11, 19, 74, 141)

    anElectorate = theElection.addElectorate('Clutha-Southland')
    anElectorate.addWinner('BARCLAY, Todd Keith', 'National Party')
    anElectorate.addPartyVotes(122, 184, 268, 1726, 36, 0, 2647, 158, 5036, 113, 21694, 2135, 32, 10, 68, 107)

    anElectorate = theElection.addElectorate('Coromandel')
    anElectorate.addWinner('SIMPSON, Scott Anthony', 'National Party')
    anElectorate.addPartyVotes(142, 139, 112, 2004, 20, 7, 3724, 259, 5960, 184, 20547, 4741, 17, 11, 64, 117)

    anElectorate = theElection.addElectorate('Dunedin North')
    anElectorate.addWinner('CLARK, David Scott', 'Labour Party')
    anElectorate.addPartyVotes(111, 172, 60, 956, 37, 1, 8035, 603, 11147, 124, 11302, 2364, 7, 27, 86, 99)

    anElectorate = theElection.addElectorate('Dunedin South')
    anElectorate.addWinner('CURRAN, Clare Elizabeth', 'Labour Party')
    anElectorate.addPartyVotes(125, 171, 77, 1104, 80, 7, 4626, 307, 12518, 95, 15003, 3429, 5, 18, 63, 161)

    anElectorate = theElection.addElectorate('East Coast')
    anElectorate.addWinner('TOLLEY, Anne Merrilyn', 'National Party')
    anElectorate.addPartyVotes(82, 150, 122, 1438, 30, 4, 3248, 413, 8022, 334, 17152, 4176, 17, 13, 78, 148)

    anElectorate = theElection.addElectorate('East Coast Bays')
    anElectorate.addWinner('McCULLY, Murray Stuart', 'National Party')
    anElectorate.addPartyVotes(580, 95, 47, 2210, 17, 3, 2712, 222, 4005, 125, 20895, 1964, 4, 20, 69, 73)

    anElectorate = theElection.addElectorate('Epsom')
    anElectorate.addWinner('SEYMOUR, David Breen', 'ACT New Zealand')
    anElectorate.addPartyVotes(1023, 76, 7, 932, 10, 4, 4706, 312, 5045, 174, 23904, 1308, 3, 17, 61, 93)

    anElectorate = theElection.addElectorate('Hamilton East')
    anElectorate.addWinner('BENNETT, David Allister', 'National Party')
    anElectorate.addPartyVotes(250, 110, 28, 1672, 29, 5, 3833, 348, 8264, 222, 17395, 2481, 3, 23, 104, 167)

    anElectorate = theElection.addElectorate('Hamilton West')
    anElectorate.addWinner('MACINDOE, Timothy Harley', 'National Party')
    anElectorate.addPartyVotes(160, 171, 38, 1571, 43, 7, 2765, 242, 8649, 190, 16072, 3644, 13, 18, 87, 159)

    anElectorate = theElection.addElectorate('Helensville')
    anElectorate.addWinner('KEY, John Phillip', 'National Party')
    anElectorate.addPartyVotes(262, 161, 48, 1692, 23, 3, 4801, 338, 4430, 192, 20689, 2608, 13, 8, 93, 73)

    anElectorate = theElection.addElectorate('Hunua')
    anElectorate.addWinner('BAYLY, Andrew Henry', 'National Party')
    anElectorate.addPartyVotes(313, 136, 46, 1807, 19, 4, 2076, 166, 4699, 144, 22929, 3437, 4, 14, 82, 117)

    anElectorate = theElection.addElectorate('Hutt South')
    anElectorate.addWinner('MALLARD, Trevor Colin', 'Labour Party')
    anElectorate.addPartyVotes(256, 160, 58, 1391, 11, 6, 4966, 281, 10903, 207, 17648, 2913, 7, 19, 136, 199)

    anElectorate = theElection.addElectorate('Ilam')
    anElectorate.addWinner('BROWNLEE, Gerard Anthony', 'National Party')
    anElectorate.addPartyVotes(349, 96, 21, 1300, 14, 3, 4574, 233, 6238, 171, 20377, 1806, 7, 23, 92, 73)

    anElectorate = theElection.addElectorate('Invercargill')
    anElectorate.addWinner('DOWIE, Sarah Maree', 'National Party')
    anElectorate.addPartyVotes(113, 224, 173, 1256, 95, 10, 2581, 210, 8553, 110, 16880, 3806, 11, 23, 68, 153)

    anElectorate = theElection.addElectorate('Kaikōura')
    anElectorate.addWinner('SMITH, Stuart Tayler', 'National Party')
    anElectorate.addPartyVotes(144, 151, 187, 1709, 36, 8, 3366, 169, 6269, 131, 20770, 3612, 8, 13, 96, 122)

    anElectorate = theElection.addElectorate('Kelston')
    anElectorate.addWinner('SEPULONI, Carmel Jean', 'Labour Party')
    anElectorate.addPartyVotes(308, 108, 13, 910, 8, 7, 3298, 432, 12934, 94, 9924, 2595, 7, 15, 48, 179)

    anElectorate = theElection.addElectorate('Mana')
    anElectorate.addWinner('FAAFOI, Kristopher', 'Labour Party')
    anElectorate.addPartyVotes(79, 173, 21, 977, 24, 3, 4691, 351, 12601, 226, 14850, 2493, 5, 28, 116, 155)

    anElectorate = theElection.addElectorate('Māngere')
    anElectorate.addWinner('SIO, Sua William', 'Labour Party')
    anElectorate.addPartyVotes(68, 86, 10, 839, 7, 3, 1084, 324, 18470, 124, 4281, 2008, 5, 3, 26, 259)

    anElectorate = theElection.addElectorate('Manukau East')
    anElectorate.addWinner('SALESA, Jennifer Teresia', 'Labour Party')
    anElectorate.addPartyVotes(179, 76, 4, 553, 4, 7, 971, 276, 16925, 84, 5392, 2072, 4, 4, 18, 502)

    anElectorate = theElection.addElectorate('Manurewa')
    anElectorate.addWinner('WALL, Louisa Hareruia', 'Labour Party')
    anElectorate.addPartyVotes(158, 102, 15, 776, 6, 1, 1092, 315, 14579, 191, 7612, 2609, 0, 10, 24, 197)

    anElectorate = theElection.addElectorate('Maungakiekie')
    anElectorate.addWinner('LOTU-IIGA, Peseta Samuelu Masunu', 'National Party')
    anElectorate.addPartyVotes(512, 113, 11, 1095, 8, 8, 3270, 377, 12199, 187, 14394, 2283, 10, 14, 80, 270)

    anElectorate = theElection.addElectorate('Mt Albert')
    anElectorate.addWinner('SHEARER, David James', 'Labour Party')
    anElectorate.addPartyVotes(356, 93, 12, 719, 7, 6, 8005, 603, 10823, 178, 14359, 1512, 5, 11, 57, 176)

    anElectorate = theElection.addElectorate('Mt Roskill')
    anElectorate.addWinner('GOFF, Philip Bruce', 'Labour Party')
    anElectorate.addPartyVotes(610, 74, 17, 1240, 10, 6, 3279, 304, 12086, 132, 14275, 1805, 6, 8, 69, 176)

    anElectorate = theElection.addElectorate('Napier')
    anElectorate.addWinner('NASH, Stuart Alexander', 'Labour Party')
    anElectorate.addPartyVotes(103, 153, 58, 2270, 27, 6, 3198, 219, 9466, 160, 18005, 2709, 7, 16, 63, 145)

    anElectorate = theElection.addElectorate('Nelson')
    anElectorate.addWinner('SMITH, Nick', 'National Party')
    anElectorate.addPartyVotes(151, 202, 386, 2094, 47, 6, 5381, 317, 9401, 125, 16904, 2918, 11, 12, 95, 124)

    anElectorate = theElection.addElectorate('New Lynn')
    anElectorate.addWinner('CUNLIFFE, David Richard', 'Labour Party')
    anElectorate.addPartyVotes(542, 101, 16, 1233, 33, 3, 3365, 367, 12085, 119, 13136, 2403, 8, 17, 56, 177)

    anElectorate = theElection.addElectorate('New Plymouth')
    anElectorate.addWinner('YOUNG, Jonathan Edgar Joseph', 'National Party')
    anElectorate.addPartyVotes(172, 218, 57, 1201, 28, 4, 3005, 263, 7947, 199, 20969, 3395, 10, 19, 66, 128)

    anElectorate = theElection.addElectorate('North Shore')
    anElectorate.addWinner('BARRY, Margaret Mary', 'National Party')
    anElectorate.addPartyVotes(545, 103, 13, 1673, 34, 2, 4118, 250, 5473, 174, 23762, 2246, 4, 12, 98, 78)

    anElectorate = theElection.addElectorate('Northcote')
    anElectorate.addWinner('COLEMAN, Jonathan David', 'National Party')
    anElectorate.addPartyVotes(573, 122, 17, 1522, 20, 4, 4099, 336, 7803, 162, 17900, 2584, 10, 26, 121, 117)

    anElectorate = theElection.addElectorate('Northland')
    anElectorate.addWinner('SABIN, Michael Lewis', 'National Party')
    anElectorate.addPartyVotes(162, 193, 51, 2243, 64, 216, 3855, 601, 5913, 210, 17412, 4546, 9, 7, 71, 154)

    anElectorate = theElection.addElectorate('Ōhāriu')
    anElectorate.addWinner('DUNNE, Peter Francis', 'United Future')
    anElectorate.addPartyVotes(250, 146, 15, 1118, 22, 4, 5623, 258, 8771, 215, 18810, 1781, 9, 29, 273, 126)

    anElectorate = theElection.addElectorate('Ōtaki')
    anElectorate.addWinner('GUY, Allen Nathan', 'National Party')
    anElectorate.addPartyVotes(111, 138, 61, 1695, 19, 6, 3635, 249, 9543, 169, 18854, 3827, 19, 12, 74, 298)

    anElectorate = theElection.addElectorate('Pakuranga')
    anElectorate.addWinner('WILLIAMSON, Maurice Donald', 'National Party')
    anElectorate.addPartyVotes(1021, 109, 11, 1930, 8, 4, 2192, 214, 5511, 108, 20854, 2456, 8, 16, 78, 101)

    anElectorate = theElection.addElectorate('Palmerston North')
    anElectorate.addWinner('LEES-GALLOWAY, Iain Francis', 'Labour Party')
    anElectorate.addPartyVotes(175, 123, 30, 1549, 10, 7, 3390, 330, 10632, 166, 14835, 2973, 10, 24, 80, 93)

    anElectorate = theElection.addElectorate('Papakura')
    anElectorate.addWinner('COLLINS, Judith Anne', 'National Party')
    anElectorate.addPartyVotes(218, 124, 23, 1431, 9, 5, 1801, 275, 8967, 172, 17733, 3737, 4, 20, 60, 186)

    anElectorate = theElection.addElectorate('Port Hills')
    anElectorate.addWinner('DYSON, Ruth Suzanne', 'Labour Party')
    anElectorate.addPartyVotes(175, 120, 33, 1241, 41, 4, 6812, 298, 9514, 160, 18719, 2641, 1, 26, 80, 105)

    anElectorate = theElection.addElectorate('Rangitata')
    anElectorate.addWinner('GOODHEW, Joanne Gay', 'National Party')
    anElectorate.addPartyVotes(165, 217, 84, 1580, 24, 9, 2715, 142, 8064, 94, 20108, 2848, 13, 20, 114, 154)

    anElectorate = theElection.addElectorate('Rangitīkei')
    anElectorate.addWinner('McKELVIE, Ian Robert Flockhart', 'National Party')
    anElectorate.addPartyVotes(131, 151, 106, 2115, 15, 7, 2709, 208, 6408, 195, 18596, 3914, 12, 23, 75, 119)

    anElectorate = theElection.addElectorate('Rimutaka')
    anElectorate.addWinner('HIPKINS, Christopher John', 'Labour Party')
    anElectorate.addPartyVotes(126, 194, 84, 1492, 14, 4, 3154, 324, 12176, 149, 15352, 3806, 19, 19, 122, 159)

    anElectorate = theElection.addElectorate('Rodney')
    anElectorate.addWinner('MITCHELL, Mark Patrick', 'National Party')
    anElectorate.addPartyVotes(192, 123, 29, 2661, 15, 5, 3351, 231, 4847, 142, 24051, 3575, 12, 8, 81, 91)

    anElectorate = theElection.addElectorate('Rongotai')
    anElectorate.addWinner('KING, Annette Faye', 'Labour Party')
    anElectorate.addPartyVotes(120, 131, 19, 623, 9, 3, 10176, 568, 11754, 237, 12606, 2097, 7, 21, 143, 217)

    anElectorate = theElection.addElectorate('Rotorua')
    anElectorate.addWinner('McCLAY, Todd Michael', 'National Party')
    anElectorate.addPartyVotes(142, 160, 101, 1361, 16, 4, 2289, 272, 7181, 486, 17660, 4139, 33, 11, 72, 122)

    anElectorate = theElection.addElectorate('Selwyn')
    anElectorate.addWinner('ADAMS, Amy Juliet', 'National Party')
    anElectorate.addPartyVotes(139, 120, 78, 1253, 10, 5, 3910, 184, 4654, 111, 22809, 2494, 5, 16, 87, 65)

    anElectorate = theElection.addElectorate('Tāmaki')
    anElectorate.addWinner("O'CONNOR, Simon", 'National Party')
    anElectorate.addPartyVotes(504, 106, 8, 1122, 10, 13, 3232, 263, 5431, 175, 24091, 1619, 12, 15, 69, 78)

    anElectorate = theElection.addElectorate('Taranaki-King Country')
    anElectorate.addWinner('KURIGER, Barbara Joan', 'National Party')
    anElectorate.addPartyVotes(120, 163, 156, 1907, 20, 8, 2422, 191, 4483, 185, 20637, 3182, 9, 11, 85, 99)

    anElectorate = theElection.addElectorate('Taupō')
    anElectorate.addWinner('UPSTON, Louise Claire', 'National Party')
    anElectorate.addPartyVotes(91, 148, 223, 1729, 29, 7, 2224, 190, 6752, 298, 20703, 3730, 10, 13, 94, 121)

    anElectorate = theElection.addElectorate('Tauranga')
    anElectorate.addWinner('BRIDGES, Simon Joseph', 'National Party')
    anElectorate.addPartyVotes(134, 110, 12, 2146, 17, 3, 2645, 180, 5361, 222, 20728, 5387, 96, 7, 94, 152)

    anElectorate = theElection.addElectorate('Te Atatū')
    anElectorate.addWinner('TWYFORD, Philip Stoner', 'Labour Party')
    anElectorate.addPartyVotes(450, 122, 12, 1243, 9, 0, 2684, 380, 11603, 142, 13614, 2784, 12, 5, 52, 223)

    anElectorate = theElection.addElectorate('Tukituki')
    anElectorate.addWinner('FOSS, Craig', 'National Party')
    anElectorate.addPartyVotes(144, 150, 50, 2357, 18, 5, 3078, 244, 8205, 185, 18680, 2731, 4, 12, 59, 135)

    anElectorate = theElection.addElectorate('Upper Harbour')
    anElectorate.addWinner('BENNETT, Paula Lee', 'National Party')
    anElectorate.addPartyVotes(450, 129, 13, 1613, 4, 4, 2329, 286, 7803, 119, 18122, 2311, 7, 14, 69, 130)

    anElectorate = theElection.addElectorate('Waikato')
    anElectorate.addWinner('TISCH, William Lindsay', 'National Party')
    anElectorate.addPartyVotes(191, 180, 89, 2053, 38, 6, 2075, 178, 5303, 196, 21598, 3870, 10, 8, 78, 127)

    anElectorate = theElection.addElectorate('Waimakariri')
    anElectorate.addWinner('DOOCEY, Matthew Maurice', 'National Party')
    anElectorate.addPartyVotes(80, 127, 69, 1560, 69, 5, 3198, 141, 6835, 95, 20734, 3054, 6, 15, 66, 114)

    anElectorate = theElection.addElectorate('Wairarapa')
    anElectorate.addWinner('SCOTT, Alastair Oliver', 'National Party')
    anElectorate.addPartyVotes(124, 175, 142, 1622, 7, 4, 3134, 164, 7712, 209, 19634, 4393, 8, 22, 59, 116)

    anElectorate = theElection.addElectorate('Waitaki')
    anElectorate.addWinner('DEAN, Jacqueline Isobel', 'National Party')
    anElectorate.addPartyVotes(106, 208, 143, 1741, 86, 5, 4386, 159, 7162, 104, 22656, 2763, 10, 16, 94, 130)

    anElectorate = theElection.addElectorate('Wellington Central')
    anElectorate.addWinner('ROBERTSON, Grant Murray', 'Labour Party')
    anElectorate.addPartyVotes(274, 127, 20, 590, 26, 5, 11545, 578, 9306, 300, 14689, 1399, 5, 49, 117, 101)

    anElectorate = theElection.addElectorate('West Coast-Tasman')
    anElectorate.addWinner("O'CONNOR, Damien Peter", 'Labour Party')
    anElectorate.addPartyVotes(94, 210, 942, 1837, 25, 7, 4658, 271, 8438, 102, 16058, 3123, 14, 11, 71, 192)

    anElectorate = theElection.addElectorate('Whanganui')
    anElectorate.addWinner('BORROWS, Kerry James', 'National Party')
    anElectorate.addPartyVotes(167, 190, 56, 1771, 57, 14, 2546, 259, 9012, 205, 16687, 4221, 13, 22, 75, 112)

    anElectorate = theElection.addElectorate('Whangarei')
    anElectorate.addWinner('RETI, Shane Raymond', 'National Party')
    anElectorate.addPartyVotes(205, 183, 38, 1925, 116, 34, 3611, 386, 6575, 196, 18503, 4936, 15, 16, 93, 117)

    anElectorate = theElection.addElectorate('Wigram')
    anElectorate.addWinner('WOODS, Megan Cherie', 'Labour Party')
    anElectorate.addPartyVotes(317, 154, 41, 1102, 30, 5, 3919, 231, 8764, 145, 13117, 2618, 7, 31, 86, 136)

    anElectorate = theElection.addElectorate('Hauraki-Waikato')
    anElectorate.addWinner('MAHUTA, Nanaia Cybele', 'Labour Party')
    anElectorate.addPartyVotes(43, 306, 34, 159, 5, 10, 2043, 1689, 9724, 2504, 1583, 2796, 1, 3, 14, 302)

    anElectorate = theElection.addElectorate('Ikaroa-Rāwhiti')
    anElectorate.addWinner('WHAITIRI, Meka', 'Labour Party')
    anElectorate.addPartyVotes(24, 313, 25, 130, 2, 4, 2275, 2152, 10489, 2699, 1189, 2490, 11, 2, 6, 325)

    anElectorate = theElection.addElectorate('Tāmaki Makaurau')
    anElectorate.addWinner('HENARE, Peeni Ereatara Gladwyn', 'Labour Party')
    anElectorate.addPartyVotes(39, 200, 5, 128, 1, 6, 2438, 2234, 8432, 2651, 1575, 2914, 4, 1, 16, 204)

    anElectorate = theElection.addElectorate('Te Tai Hauāuru')
    anElectorate.addWinner('RURAWHE, Adrian Paki', 'Labour Party')
    anElectorate.addPartyVotes(27, 281, 43, 116, 3, 1, 2442, 1395, 8642, 3611, 1456, 2412, 15, 6, 15, 234)

    anElectorate = theElection.addElectorate('Te Tai Tokerau')
    anElectorate.addWinner('DAVIS, Kelvin Glen', 'Labour Party')
    anElectorate.addPartyVotes(37, 254, 19, 154, 11, 45, 2278, 4246, 8034, 2300, 1938, 3296, 16, 5, 18, 257)

    anElectorate = theElection.addElectorate('Te Tai Tonga')
    anElectorate.addWinner('TIRIKATENE, Rino', 'Labour Party')
    anElectorate.addPartyVotes(35, 282, 99, 153, 15, 3, 3402, 1021, 7607, 2319, 2977, 2657, 8, 9, 18, 125)

    anElectorate = theElection.addElectorate('Waiariki')
    anElectorate.addWinner('FLAVELL, Te Ururoa James William Ben', 'Maori Party')
    anElectorate.addPartyVotes(17, 222, 70, 78, 2, 8, 1787, 2524, 8595, 4880, 1120, 2809, 41, 5, 11, 229)

    return theElection
  }
}