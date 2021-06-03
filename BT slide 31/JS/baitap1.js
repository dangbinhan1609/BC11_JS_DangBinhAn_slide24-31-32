
document.getElementById("btnSoNguyen").onclick = function (event) {
    event.preventDefault();
    var soNguyen1 = document.getElementById("txtSo1").value;
    var soNguyen2 = document.getElementById("txtSo2").value;
    var soNguyen3 = document.getElementById("txtSo3").value;
    var soNguyen = 0;

    if (soNguyen1 < soNguyen2 && soNguyen2 < soNguyen3) {
        soNguyen = "soNguyen1, soNguyen2, soNguyen3";
    } else if (soNguyen2 < soNguyen3 && soNguyen3 < soNguyen1) {
        soNguyen = "soNguyen2, soNguyen3, soNguyen1";
    } else if (soNguyen3 < soNguyen1 && soNguyen1 < soNguyen2) {
        soNguyen = "soNguyen3, soNguyen1, soNguyen2";
    } else if (soNguyen1 < soNguyen3 && soNguyen3 < soNguyen2) {
        soNguyen = "soNguyen1, soNguyen3, soNguyen2";
    } else if (soNguyen2 < soNguyen1 && soNguyen1 < soNguyen3) {
        soNguyen = "soNguyen2, soNguyen1, soNguyen3";
    } else if (soNguyen3 < soNguyen2 && soNguyen2 < soNguyen1) {
        soNguyen = "soNguyen3, soNguyen2, soNguyen1";
    }

    var info = "<div class='alert alert-success'>" + soNguyen + "</div>";
    document.getElementById("btnSoNguyen").innerHTML = info;
};