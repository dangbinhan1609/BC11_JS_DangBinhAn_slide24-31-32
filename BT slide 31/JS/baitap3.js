document.getElementById("btnChanLe").onclick = function (event) {
    event.preventDefault();
    var soNguyen1 = document.getElementById("so1").value;
    var soNguyen2 = document.getElementById("so2").value;
    var soNguyen3 = document.getElementById("so3").value;
    k = 1 || k=2 || k=3 || k=4 || k=5 || k=6 || k=7 || k=8 || k=9;
    if (soNguyen1 % 2 === soNguyen2 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 2 số chẵn và 1 số lẻ";
    } else if (soNguyen1 % 2 === soNguyen3 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 2 số chẵn và 1 số lẻ";
    } else if (soNguyen2 % 2 === soNguyen3 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 2 số chẵn và 1 số lẻ";
    } else if (soNguyen1 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 1 số chẵn và 2 số lẻ";
    } else if (soNguyen2 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 1 số chẵn và 2 số lẻ";
    } else if (soNguyen3 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 1 số chẵn và 2 số lẻ";
    } else if (soNguyen1 % 2 === soNguyen2 % 2 === soNguyen3 % 2) {
        document.getElementById("divChanLe").innerHTML = "Có 3 số chẵn và 0 số lẻ";
    } else {
        document.getElementById("divChanLe").innerHTML = "Có 0 số chẵn và 3 số lẻ";
    }
};