//var num:number=20; 

console.log(fibonacci_series(30)+"  ");
//fibonacci_series(num); 
function fibonacci_series(num:number):number
{ 
    if (num <= 1) 
    return 1;

    return fibonacci_series(num - 1) + fibonacci_series(num - 2);

}