 //Mumbling Kata BONUS

 function accum(s) {
s = s.toLowerCase ()
trainlist = "";
for (i = 0; i < s.length; i++){
let theone = s[i];
trainlist += theone.toUpperCase() + theone.repeat(i) + "-";}
console.log(trainlist.slice(0,trainlist.length - 1));
return trainlist.slice(0,trainlist.length - 1)
}
