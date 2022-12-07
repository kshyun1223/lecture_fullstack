class BasicStudentInfo {
  studentName: string
  phoneNumber: string|number
  subNumber: string
  email: string
  cityName: string|number
  constructor(studentName: string, phoneNumber: string|number, subNumber: string, email: string, cityName: string|number) {
    this.studentName = studentName
    this.phoneNumber = phoneNumber
    this.subNumber = subNumber
    this.email = email
    this.cityName = cityName
  }
  get cityName(){
    return this._cityName
  }
  set cityName(value: number) {
    if(typeof value === "string") {
      this._cityName = value
    } else {
      console.log("데이터타입이 string이 아닌 관계로 강제로 바꾸었습니다.")
      this._cityName = String(value)
    }
  }
}

const kongukjae = new BasicStudentInfo("공욱재", "010-9139-0957", "042-476-2111", "kongukjae@gmail.com", 12345)


export{}