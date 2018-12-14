var str1 = "Pune Kothrud Marvellous Infosystems";
var str2 = "MarvellousA";
checkStringContainSubstring(str1, str2);
function checkStringContainSubstring(s1, s2) {
    if (s1.indexOf(s2) >= 0) {
        console.log("String contains " + s2 + "in it.");
    }
    else {
        console.log("String NOT contains " + s2 + "in it.");
    }
}
