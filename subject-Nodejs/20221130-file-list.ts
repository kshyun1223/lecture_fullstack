module.exports = (pathString:string, callback:any) => {
  const fs = require('fs')
  // const path = require('path')
  fs.readdir(pathString, "utf8", (err, fileName) => {
    if(err) throw err
    const result = {}
    const data:string[] = []
    fileName.map((value) => {
      data.push(value.split('.')[0])
    })
    data.forEach(value => {
      result[value] = value
    })
    console.log("data", data)
    console.log("result", result)
    callback(result)
    return result
  })
}