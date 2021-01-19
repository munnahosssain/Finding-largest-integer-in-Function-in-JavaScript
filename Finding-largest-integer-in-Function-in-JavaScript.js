var largestNumber, longer,output, num, i;
function largestNumber(num){
    longer=num[0];
    for(i=1; i<=num.length; i++){
        element=num[i];
        if (element>longer) {
            longer=element;
        }
    }
    return longer;
}
num =[65, 32, 98, 87, 54, 21, 25, 69, 58, 47, 50, 100];
output=largestNumber(num);
console.log('output', output);