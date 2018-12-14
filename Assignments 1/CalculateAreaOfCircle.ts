var r:number=10; 
var pi:number=3.14
console.log("Area of circle is "+getCircleArea(r));
console.log("Area of circle is with PI: "+getCircleArea(r,pi)); 
function getCircleArea(r:number,PI:number=3.14):Number
{ 
    return PI*r*r; 
     
}