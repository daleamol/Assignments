
var str1:string="Pune Kothrud Marvellous Infosystems";
var str2:string="Marvellous";

checkStringContainSubstring(str1,str2);
function checkStringContainSubstring(s1:string,s2:string):void
{

    if(s1.indexOf(s2) >=0)
    {
        console.log("String contains "+s2+ "in it.");
    }
    else
    {
        console.log("String NOT contains "+s2+ "in it.")
    }

}