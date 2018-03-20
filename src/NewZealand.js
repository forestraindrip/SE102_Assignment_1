/* global Election, NewZealand, Party, View, Electorate, Candidate */
class NewZealand {
    constructor () {
      this.allMyElections = []
    }
  
    addElection (anElection) {
      this.allMyElections.push(anElection)
    }
    isTheSameParty (aPartyName, anotherPartyName) {
     return aPartyName === anotherPartyName
    }
  
    // Compare party chage of each Electorate in two Elections
    compareElections (election, election2) {   // Q4-3
      let result = ''
      result += '***Comparison of Electorates in two Elections***   Q4-3' + View.NEWLINE()
      let theseElectorates = election.allMyElectorates
      let otherElectorates = election2.allMyElectorates
      for (let i = 0; i < theseElectorates.length; i++) {
        let aElectorateName = theseElectorates[i].name
        let aPartyName = theseElectorates[i].myWinningCandidate.myParty.name.toUpperCase()
        let anotherPartyName = otherElectorates[i].myWinningCandidate.myParty.name.toUpperCase()
  
        result += aElectorateName
        // is the same party
        if (this.isTheSameParty(aPartyName, anotherPartyName)) {
          result += ' stays with ' + aPartyName + View.NEWLINE()
        } else { result += ' has changed from ' + aPartyName + ' to ' + anotherPartyName + '*********' + View.NEWLINE() }
      }
  
      return result
    }
  }
  