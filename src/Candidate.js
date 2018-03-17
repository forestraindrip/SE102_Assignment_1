class Candidate { // eslint-disable-line no-unused-vars
  constructor (newName, theParty, aListPosition) {
    this.name = newName
    this.listPosition = aListPosition
    this.myParty = theParty
    this.myElectorate = undefined

    this.mySeatPosition = undefined
  }

  setElectorate (theElectorate) {
    this.myElectorate = theElectorate
  }

  toString () {
    let result = this.name
    if (this.myElectorate) {
      result += ' MP for ' + this.myElectorate.name
    }
    return result
  }
  }
