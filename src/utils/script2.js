const strIn = `6050000,2018-02-19,20:00:21,59.8058084,30.376141,2661,1,8,10,3,82.6,10.8,1
8650000,2018-02-27,12:04:54,55.683807,37.297405,81,3,5,24,2,69.1,12.0,1
11500000,2018-04-03,17:40:53,55.7989215,37.7380901,3,1,14,16,3,64.9,8.0,1
`;

let strEdit = strIn.split('\n');
let x;

for (let i=0; i < strEdit.length -1; i++) {
    strEdit[i] += `, ${i}`;
    x = strEdit[i].indexOf(',')
}
console.log(x);






const strOut = strEdit.join('\n').replace(/\n/g,"\), \n \(");
// console.log(strOut);