var eid1 = new Date("10/jul/2022")
var eid2 = new Date("11/jul/2022")
var eid3 = new Date("12/jul/2022")

var now = new Date()


var eid1ms = eid1.getTime()
var eid2ms = eid2.getTime()
var eid3ms = eid3.getTime()
var nowms = now.getTime()


// console.log(eid1ms)
// console.log(nowms/(60*60*1000*24))

var eid1remaindays = Math.ceil((eid1ms/(60*60*1000*24))-(nowms/(60*60*1000*24)))
var eid2remaindays = Math.ceil((eid2ms/(60*60*1000*24))-(nowms/(60*60*1000*24)))
var eid3remaindays = Math.ceil((eid3ms/(60*60*1000*24))-(nowms/(60*60*1000*24)))

console.log(eid1remaindays)
console.log(eid2remaindays)
console.log(eid3remaindays)

var first = document.getElementById("para1")

first.innerHTM = '<p> ${eid1remaindays} Days remaining </P>';

