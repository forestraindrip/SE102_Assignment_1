/* global View, Candidate */
class Party { // eslint-disable-line no-unused-vars
  constructor (newName, theElection) {
    this.name = newName
    this.votes = 0
    this.myElection = theElection
    this.allMyCandidates = []
    this.allMyListCandidates = []
    this.allMyElectorateMPs = []

    this.allMyListMPs = []
    this.percentage = 0
    this.eligiblePercentage = 0
    this.listSeatAmount = 0
    this.electorateSeatAmount = 0
    this.partySeatAmount = 0
    this.mySeatPositions = []
  }

  addListCandidates (allListCandidateNames) {
    for (let aNewCandidateName of allListCandidateNames) {
      let newCandidate = new Candidate(aNewCandidateName, this, this.allMyListCandidates.length + 1)
      this.allMyListCandidates.push(newCandidate)
      this.allMyCandidates.push(newCandidate)
      this.myElection.addCandidate(newCandidate)
    }
  }

  findListCandidate (targetCandidateName) {
    return this.allMyCandidates.find(aCandidate => aCandidate.name === targetCandidateName)
  }

  addElectorateOnlyMP (newCandidateName, theElectorate) {
    let newCandidate = new Candidate(newCandidateName, this, undefined)
    newCandidate.myElectorate = theElectorate
    this.allMyElectorateMPs.push(newCandidate)
    this.allMyCandidates.push(newCandidate)
    this.myElection.addCandidate(newCandidate)
    return newCandidate
  }

  setElectorateMP (theCandidate) {
    this.allMyElectorateMPs.push(theCandidate)
  }

  addToPartyVote (n) {
    this.votes += n
  }

  toString () {
    let name = this.name
    let votes = this.votes
    let result = `${name} ${votes}`
    return result
  }

  hasList () {
    return this.allMyListCandidates.length > 0
  }

  getListCandidates () {
    let result = ''
    let n = 1
    for (let aCandidate of this.allMyListCandidates) {
      result += n + ' ' + aCandidate + View.NEWLINE()
      n += 1
    }
    return result
  }

  hasElectorateMP () {
      return  this.allMyElectorateMPs.length > 0 
  }

  newMethod() {
    return this;
  }

  getNoMPList () {
    return this.allMyListCandidates.filter(c => c.myElectorate === undefined)
  }
}
