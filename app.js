//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. 
//Help him figure out the minimum number of additional statues needed.//

//function makeSortArray () {
function makeArrayConsecutive2(statues) {
 var arr = statues.sort(function compareNumeric(a,b) {return b-a;});
var summ = 0;
for (i = 0; i < (arr.length - 1); i++) {
summ = summ + ((arr[i] - arr[i+1]) - 1);
}
return summ;
}
