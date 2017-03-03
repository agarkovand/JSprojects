function makeArrayConsecutive2(statues) {
var statuesMax = Math.max.apply(Math, statues);
var result = ((statuesMax - 1) -  statues.lenght); 
return result;
}
makeArrayConsecutive2( [4, 1, 2, 17] );
