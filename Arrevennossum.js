function SumEvenNumbers(arr){
    let sum=0;  
    arr.forEach(num => {
        if(num % 2 === 0){
            sum = sum+num;
        }                
    });
    return sum;   

}
//using filter and reduce.

function SumEvenNos(arr){
    return arr
    .filter(num=>num%2 ===0)
    .reduce((sum,num) => sum + num , 0)
}