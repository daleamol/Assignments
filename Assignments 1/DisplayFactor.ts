 var num:number=20;
 displayFactor(num); 
 function displayFactor(num:number):void
 { 
     for(var i:number=0;i<=(num/2);i++)
     { 
         if(num%i == 0)
        { 
             console.log(i+" ");
        } 
     }
 }