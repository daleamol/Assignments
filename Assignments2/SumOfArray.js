var arr = [10, 20, 30, 40];
console.log("Sum of array: " + getSumArray(arr));
function getSumArray(r) {
    var sum = 0;
    for (var no = 0; no < r.length; no++) {
        sum += r[no];
    }
    return sum;
}
