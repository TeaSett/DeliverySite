var a, b;

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
    return a+b == num;
}