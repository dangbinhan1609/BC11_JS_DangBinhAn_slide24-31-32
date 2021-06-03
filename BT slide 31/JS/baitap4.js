document.getElementById("btnTamGiac").onclick = function (event) {
    event.preventDefault();
    var a = document.getElementById("canha").value;
    var b = document.getElementById("canhb").value;
    var c = document.getElementById("canhc").value;
    if (a == b && a != c) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác cân";
    } else if (a == c && a != b) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác cân";
    } else if (b == c && c != a) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác cân";
    } else if (a == b && a == c && b == c) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác đều";
    } else if (a = Math.sqrt(b * b + c * c)) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác vuông";
    } else if (b = Math.sqrt(a * a + c * c)) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác vuông";
    } else if (c = Math.sqrt(a * a + b * b)) {
        document.getElementById("divTamGiac").innerHTML = " Đây là tam giác vuông";
    }
};