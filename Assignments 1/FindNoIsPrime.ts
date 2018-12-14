 var num:number=11;
 if(checkPrime(num)==true)
 { 
     console.log(num+" is prime..."); 
 }
 else
 {
     console.log(num+" is not prime...");
 } 
 function checkPrime(num:number):boolean
 { 
     for(var i:number=2;i<=(num/2);i++)
     { 
        if(num%i == 0)
        { 
            return false;
        }
     } 
     return true;
 }