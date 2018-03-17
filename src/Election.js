/* global Party, View, Electorate */
class Election { // eslint-disable-line no-unused-vars
  constructor (newYear) {
    this.year = newYear
    this.allMyParties = []
    this.allMyElectorates = []
    this.allMyCandidates = []
    this.allMySeats = []

    this.voteSum = 0
    this.allEligibleParties = []
    this.eligibleVoteSum = 0
    this.totalSeatAmount = 0
  }

  addParty (newPartyName) {
    let newParty = new Party(newPartyName.toUpperCase(), this)
    this.allMyParties.push(newParty)
    return newParty
  }

  findParty (targetPartyName) {
    return this.allMyParties.find(aParty => aParty.name === targetPartyName
    )
  }

  addCandidate (theCandidate) {
    this.allMyCandidates.push(theCandidate)
  }

  findCandidate (targetCandidateName) {
    return this.allMyCandidates.find(aCandidate => aCandidate.name === targetCandidateName
    )
  }

  addElectorate (theElectorateName) {
    let newElectorate = new Electorate(theElectorateName, this)
    this.allMyElectorates.push(newElectorate)
    return newElectorate
  }

  findElectorate (targetElectorateName) {
    return this.allMyElectorates.find(anElectorate => anElectorate.name === targetElectorateName
    )
  }

  addPartyVote (i, n) {
    let theParty = this.allMyParties[i]
    theParty.addToPartyVote(n)
  }

  toString () {
    return this.year
  }

  getParties () {
    let result = ''
    for (let aParty of this.allMyParties) {
      result += aParty + View.NEWLINE()
    }
    return result
  }

  getPartyLists () {
    let result = ''
    for (let aParty of this.allMyParties) {
      if (aParty.hasList()) {
        result += aParty + View.NEWLINE()
        result += aParty.getListCandidates() + View.NEWLINE()
      }
    }
    return result
  }

  getElectorates () {
    let result = ''
    for (let anElectorate of this.allMyElectorates) {
      result += anElectorate + View.NEWLINE()
    }
    return result
  }

  // Calculate total vote
  calculateVoteSum (partyList) {
    var amount = 0
    for (var aParty of partyList) {
      amount += aParty.votes
    }
    return amount
  }

  calculateVotePercentage ([...partyList]) {
    for (var aParty of partyList) {
      aParty.percentage = aParty.votes / this.voteSum
    }
  }

  calculateEligbleVotePercentage ([...partyList]) {
    for (var aParty of partyList) {
      aParty.eligiblePercentage = aParty.votes / this.eligibleVoteSum
    }
  }

  calculateQuotient (partyVote, divisor) {
    return partyVote / divisor
  }

  filterEligibleParty () {
    for (var aParty of this.allEligibleParties) {
      //console.log( aParty.name);
      //console.log(aParty.percentage < 0.05 && !aParty.hasElectorateMP())
      
      if (aParty.percentage < 0.05 && !aParty.hasElectorateMP()) {
        // Remove the party from array
        this.allEligibleParties = this.allEligibleParties.filter(p => p.name !== aParty.name)
      }
    }
  }

  calculatePartySeatAmount () {
    // Percentage * total seat = expected seat amount for each party (Rounding)
    for (var aParty of this.allEligibleParties) {
      var partyExpectedSeatAmount = Math.round(120 * aParty.eligiblePercentage)
      // filter Candidates are ElectorateMP
      var arrayMP = aParty.allMyElectorateMPs
      //console.log(arrayMP.length)
      aParty.electorateSeatAmount = arrayMP.length
      var listSeatAmount = partyExpectedSeatAmount - aParty.electorateSeatAmount
      aParty.listSeatAmount = listSeatAmount > 0 ? listSeatAmount : 0
      aParty.partySeatAmount = aParty.electorateSeatAmount + aParty.listSeatAmount
      this.totalSeatAmount += aParty.partySeatAmount
    }
  }

  useSainteLagueFormula () {
    // store Quotient of each party
    var quotientDivisorMap = new Map()
    // Set quotient for each eligible party  [Party, [quotient , divisor ,partyRemainSeat]]
    for (var aParty of this.allEligibleParties) {
      quotientDivisorMap.set(aParty, [aParty.votes, 1, aParty.partySeatAmount])
    }
    // Compare the quotients and pick the party with highest quotient
    for (var i = 0; i < this.totalSeatAmount; i++) {
      var partyWithMaxQuotient = this.allEligibleParties[0]
      var maxQuotient = 0
      for (var aParty of quotientDivisorMap.keys()) {
        var partyQuotient = quotientDivisorMap.get(aParty)[0]
        if (partyQuotient > maxQuotient) {
          maxQuotient = partyQuotient
          partyWithMaxQuotient = aParty
        }
      }

      var divisor = quotientDivisorMap.get(partyWithMaxQuotient)[1]
      var quotient = partyWithMaxQuotient.votes / divisor
      // remain seats for the party
      var partyRemainSeat = quotientDivisorMap.get(partyWithMaxQuotient)[2]

      if (partyRemainSeat > 0) {
        this.allMySeats.push(partyWithMaxQuotient)
        divisor += 2
        partyRemainSeat -= 1
        quotient = partyWithMaxQuotient.votes / divisor
        quotientDivisorMap.set(partyWithMaxQuotient, [quotient, divisor, partyRemainSeat])
        partyWithMaxQuotient.mySeatPositions.push(i + 1)
        // if the pary has no more seat, set its quotient to 0
        if (partyRemainSeat === 0) {
          quotientDivisorMap.set(partyWithMaxQuotient, [0, divisor, 0])
        }
      }
    }
    // allocate seat for list candidate
    this.allocateListMP()
  }

  allocateListMP () {
    for (var aParty of this.allEligibleParties) {
      // get candidate list with no Electorate MP
      var noMPCandidateList = aParty.getNoMPList()
      // the start position to allocate list MP
      var start = aParty.allMyElectorateMPs.length
      for (start; start < aParty.mySeatPositions.length; start++) {
        var seatPosition = aParty.mySeatPositions[start]
        var aListMP = noMPCandidateList[0]
        aListMP.mySeatPosition = seatPosition
        aParty.allMyListMPs.push(aListMP)
        noMPCandidateList.splice(0, 1)
      }
    }
  }

  allocateSeats () {
    // Eligible Parties
    this.allEligibleParties = this.allMyParties.slice(0)

    this.voteSum = this.calculateVoteSum(this.allEligibleParties)
    // Calculate percentage of each party
    this.calculateVotePercentage(this.allEligibleParties)
    // console.log(eligibleVoteSum);

    // Filter parties : (under 5%) AND (Has no Electorate Seat)
    this.filterEligibleParty()

    // Recalculate vote sum
    this.eligibleVoteSum = this.calculateVoteSum(this.allEligibleParties)
    // Recalculate percentage of each party
    this.calculateEligbleVotePercentage(this.allEligibleParties)
    // Percentage * total seat = expected seat amount for each party (Rounding)
    this.calculatePartySeatAmount()
    // Compare quotient of each Party
    this.useSainteLagueFormula()
    //console.log('Debug:\n' + this.getPartySeatLocations('New Zealand First Party'))
  }

  // get seat numbers of each party (debug purpose)
  getPartySeatLocations (partyName) {
    var result = ''
    result += partyName + '\n'
    for (var i = 0; i < this.allMySeats.length; i++) {
      var thePartyOwnstheSeat = this.allMySeats[i]
      var aPartyName = partyName.toUpperCase()
      var anotherPartyName = thePartyOwnstheSeat.name.toUpperCase()
      if (anotherPartyName === aPartyName) {
        result += '[' + (i + 1) + '] '
      }
    }
    return result
  }

  // shows how many seats each Party gets. Question 4-1
  showPartySeatAmount () {
    var result = ''
    for (var aParty of this.allMyParties) {
      result += aParty.name + ' has total ' + aParty.partySeatAmount + ' seats.'
      if (aParty.partySeatAmount > 0) {
        result += View.TAB() + '(Electorate Seat:' + aParty.electorateSeatAmount
        result += View.TAB() + 'List Seat:' + aParty.listSeatAmount + ')'
      }
      result += View.NEWLINE()
    }
    return result
  }

  // shows list candidates who are MP. Question 4-2
  showListedMP () {
    var result = ''
    for (var aParty of this.allEligibleParties) {
      result += aParty + View.NEWLINE()
      // remove list candidates are electorate MP
      var listedMP = aParty.allMyListCandidates.filter(aCandidate => aCandidate.mySeatPosition !== undefined)
      for (var i = 0; i < aParty.listSeatAmount; i++) {
        result += listedMP[i] + ' has allocated to Seat "' + listedMP[i].mySeatPosition + '"' + View.NEWLINE()
      }
      result += View.NEWLINE()
    }
    return result
  }

  getAll () {
    let result = 'Election ' + this + View.NEWLINE()

    // result += '*PARTIES*' + View.NEWLINE()
    // result += this.getParties() + View.NEWLINE()

    // result += '**ELECTORATES**' + View.NEWLINE()
    // result += this.getElectorates() + View.NEWLINE()

    // result += '***PARTY LISTS***' + View.NEWLINE()
    // result += this.getPartyLists() + View.NEWLINE()

    this.allocateSeats()   // Q3
    result += '***PARTY SEAT AMOUNT OF ' + this.year + '***    Q4-1' + View.NEWLINE()
    result += this.showPartySeatAmount() + View.NEWLINE()  // Q4-1
    result += '***LISTED MP***    Q4-2' + View.NEWLINE()
    result += this.showListedMP() + View.NEWLINE()       // Q4-2

    return result + View.NEWLINE()
  }
}
