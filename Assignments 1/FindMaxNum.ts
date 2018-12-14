var maxNumber=findMaximum(10,20,15);
 console.log("Maximum number is "+maxNumber); 
 function findMaximum(num1:number,num2:number,num3:number):number
 {
        var max = 0;
        if((num1 >= num2) && (num1 >= num3)){
            max = num1;
        }
        else if((num2 >= num1) && (num2 >= num3)){
            max = num2;
        }
        else{
            max = num3;
        }

        return max;
 }