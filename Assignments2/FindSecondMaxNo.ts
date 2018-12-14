
var arr=[10,20,30,40];

console.log("Max No.: "+getMaxNoInArray(arr));

function getMaxNoInArray(r:number[]):Number
{ 
    var max:number=0;
    var secondMax=0;
    for( var no:number=0;no<r.length;no++) 
    {
        if(max<r[no])
        {
            secondMax=max;
            max=r[no];
        }
           
    }
     return secondMax;
}