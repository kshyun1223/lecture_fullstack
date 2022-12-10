const objectExample = {
  first: "first property",
  second: "second property",
	third: function(){
		console.log("this is 'third' method")
		return "this is third method return string"
	}
}
console.log("keys.length: ", Object.keys(objectExample).length)
console.log("getOwnPropertyNames : ", Object.getOwnPropertyNames(objectExample))
console.log("keys : ", Object.keys(objectExample))
console.log("keys.toString : ", Object.keys(objectExample).toString())