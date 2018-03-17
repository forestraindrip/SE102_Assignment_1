/* Global Election, NewZealand, Party, View,  Candidate */
class Electorate { // eslint-disable-line no-unused-vars
  constructor (newName, theElection) {
    this.name = newName
    this.myElection = theElection
    this.myWinningCandidate = undefined
    this.totalValidVotes = 0
    this.allPartyVotes = []
    this.voteMap = {}
  }
  addWinner (theWinnerName, thePartyName) {
    let theWinner
    /// assumption all wining candidates ARE members of a Party
    let theParty = this.myElection.findParty(thePartyName.toUpperCase())
    theWinner = theParty.findListCandidate(theWinnerName)
    /// NOT a list Candidate
    if (!theWinner) {
      theWinner = theParty.addElectorateOnlyMP(theWinnerName, this)
    } else {
      theWinner.setElectorate(this)
      theParty.setElectorateMP(theWinner)// opps MISSING LINE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    this.myWinningCandidate = theWinner
  }

  addPartyVotes (allPartyVotes) {
    this.allPartyVotes = allPartyVotes
    let sum = 0
    for (let i = 0; i < this.allPartyVotes.length - 1; i += 1) {
      let votes = this.allPartyVotes[i]
      this.myElection.addPartyVote(i, votes)
      sum += votes
      var partyName = this.myElection.allMyParties[i].name.toUpperCase()
      this.voteMap[partyName] = votes
    }
    this.totalValidVotes = sum
  }

  toString () {
    let name = this.name
    let total = this.totalValidVotes
    // let winnerParty = this.myWinningCandidate.myParty
    // let partyIndex = this.myElection.allMyParties.indexOf(winnerParty)
    // let votes = this.allPartyVotes[partyIndex]
    let invalid = this.allPartyVotes[this.allPartyVotes.length - 1]
    let result = `${name} ${total}(${invalid})`
    return result
  }
}
