import moment from "moment";

var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");

console.log(myCoolDate);
