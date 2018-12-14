

var arr=[10,20,30,40];

console.log("Sum of array: "+getSumArray(arr));

function getSumArray(r:number[]):Number
{ 
    var sum:number=0;
    for( var no:number=0;no<r.length;no++) 
    {
            sum+=r[no];
    }
     return sum;
}