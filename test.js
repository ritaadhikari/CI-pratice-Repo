// <!--./data.json->

// import data from "./data.json";
const obj = require("./data.json");

console.log(obj);

function idCheck() {
  if (obj.id != 1) {
    // console.log("its not the valid Id");
    throw new Error("Id is not valid");
  }
}
const call = idCheck();
console.log(call);
