
var no=153;



 var isNoArmstrong = (num)=>
 {
    
    var c:number=0;
    var a:number,temp:number;  
    var n:number=num;
    temp=n;  

   // console.log("n="+(n%10)+" "+(n/10));
    while(n>0)  
    {  
    a=n%10;  
   // console.log("a="+a);
   var tmp:string=""+n/10;
    n=parseInt(tmp);  
 //   console.log("n="+n);
    c=c+(a*a*a);  
 //   console.log("c="+c);
    }  
    if(temp==c)  
    console.log("armstrong number");   
    else  
    console.log("Not armstrong number"+temp+" "+c);   
 }  
 isNoArmstrong(no);