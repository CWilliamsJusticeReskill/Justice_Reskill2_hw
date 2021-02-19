/*var aFewGoodMen = ["Major General Bob Hollingsworth(USMC)","General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)","Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"];
console.log(aFewGoodMen[0]);
*/
var aFewGoodMen = ["Major General Bob Hollingsworth(USMC)","General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)","Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"];
aFewGoodMen.push["Medal of Honor"];
undefined
console.log(aFewGoodMen);
VM668:1 (5) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
aFewGoodMen[];
VM725:1 Uncaught SyntaxError: Unexpected token ']'
aFewGoodMen();
VM765:1 Uncaught TypeError: aFewGoodMen is not a function
    at <anonymous>:1:1
(anonymous) @ VM765:1
aFewGoodMen["length"];
5
aFewGoodMen.push["Medal of Honor"];
undefined
console.log(aFewGoodMen);
VM982:1 (5) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
aFewGoodMen.unshift(1,0,1)
8
console.log(aFewGoodMen);
VM1158:1 (8) [1, 0, 1, "Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
aFewGoodMen.shift(1,0,1);
1
console.log(aFewGoodMen);
VM1332:1 (7) [0, 1, "Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
aFewGoodMen.shift(0,1);
0
console.log(aFewGoodMen);
VM1430:1 (6) [1, "Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
aFewGoodMen.shift(0);
1
console.log(aFewGoodMen);
VM1501:1 (5) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
aFewGoodMen.push(1,0,2)
8
console.log(aFewGoodMen);
VM1650:1 (8) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)", 1, 0, 2]
undefined
aFewGoodMen.pop(5,6,7);
2
console.log(aFewGoodMen);
VM1871:1 (7) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)", 1, 0]
undefined
aFewGoodMen.pop();
0
console.log(aFewGoodMen);
VM1964:1 (6) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)", 1]
undefined
aFewGoodMen.pop();
1
console.log(aFewGoodMen);
VM2003:1 (5) ["Major General Bob Hollingsworth(USMC)", "General 'Mad Dog' James Mattis(USMC)", "Staff SGT. Christopher Spurlock(USMC)", "Chris Kyle(USMC)", "SGT. Jeff Barillaro(ARMY)"]
undefined
for(var i = 0; i< aFewGoodMen.length; i++) {
    console.log(aFewGoodMen[i]);
    if (aFewGoodMen [i] === 'SGT Jeff Barillaro(ARMY)') {
        CONSOLE.LOG('SPECIAL-FORCES-OPERATIONAL-DETACHEMENT-DELTA')}
}
VM3180:2 Major General Bob Hollingsworth(USMC)
VM3180:2 General 'Mad Dog' James Mattis(USMC)
VM3180:2 Staff SGT. Christopher Spurlock(USMC)
VM3180:2 Chris Kyle(USMC)
VM3180:2 SGT. Jeff Barillaro(ARMY)
undefined