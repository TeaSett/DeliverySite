var a, b, res;

function setAB(num) {
    if (a == undefined) a = num;
    else if (b == undefined) b = num;
}

function generateNum() {
    var num = Math.floor(Math.random() * 101);
    setAB(num);
    return num;
}

function check(num) {
    if (a+b == num) {
        console.log(a + "+" + b + "=" + num);
        return true
    } else {
        console.log(a + "+" + b + "≠" + num);
        return false;
    }
}