function count(arr) {
    var n = 0, sum = 0;
    var ar = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            n++;
        }
        if (arr[i] < 0) {
            sum = sum + arr[i];
        }

    }
  
    ar.push(n);
    ar.push(sum);
    return ar;
}

var arr = [];

console.log(count(arr));