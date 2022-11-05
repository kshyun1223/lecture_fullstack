const path = require('path');

function setConfig(mode="development", pathAndfilename, fileFormat){
  if(
    typeof mode === "string" &&
    typeof pathAndfilename === "string" &&
    typeof fileFormat === "string"
  ){
    function setUpFileFormat(fileFormat){
      switch(fileFormat){
        case "javascript" :
          return "js";
          break;
        case "typescript" :
          return "js";
          break;
        case "ts" :
          return "ts";
          break;
        default :
          return console.log("need string check fileformat");
      }
    };
  const setFileFormat = setUpFileFormat(fileFormat);
  const setWebpackObject = {
    mode: mode,
    entry : `./src/${pathAndfilename}.${setFileFormat}`,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `${pathAndfilename}.bundle.${setFileFormat}`,
    }
  }
  console.log("complete");
  return setWebpackObject;
  } else {
    return console.error("need parameter to be string");
  }
}

module.exports = setConfig("development", "test", "js");