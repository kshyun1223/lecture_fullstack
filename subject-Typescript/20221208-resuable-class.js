class StudentBasicInfo {
  constructor(indexForNumbering, studentName, phoneNumber, emailAddress) {
    this.indexForNumbering = indexForNumbering
    this.studentName = studentName
    this.phoneNumber = phoneNumber
    this.emailAddress = emailAddress
  }
  set indexForNumbering(value){
    if(typeof value === "number"){
      this._indexForNumbering = value
    } else {
      throw new Error("Invalid argument type")
    }
  }
}
class ClassRoom extends StudentBasicInfo{
  constructor(hosil){
    super(...arguments)
    this.hosil = hosil
  }
}

class TenFloor extends StudentBasicInfo {
  constructor(work, dataWork, change) {
    super(...arguments)
    this.work = work
    this.dataWork = dataWork
    this.change = change
  }
}

const test = new StudentBasicInfo(1, "kong", "123-456-7890", "eee@ddd.com")
console.log(test)
const ClassroomTest = new ClassRoom(2, "uk", "233-233-222", "333@ddd.com", "hello")
console.log(test)
const tenFloorTest = new TenFloor(3, "444-3333-333", "wow", "This", "is", "awesome")
console.log(test)