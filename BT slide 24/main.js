document.getElementById("btnDTB").onclick = function (event) {
    event.preventDefault();
    var HoTen = document.getElementById("txtHoTen").value;
    var diemToan = document.getElementById("txtToan").value;
    var diemHoa = document.getElementById("txtHoa").value;
    var diemLy = document.getElementById("txtLy").value;
    var DTB = (parseFloat(diemToan) + parseFloat(diemHoa) + parseFloat(diemLy)) / 3;
    var hocLuc = 0;

    if (DTB >= 8.5) {
        hocLuc = "Giỏi";
        console.log("Xếp loại Giỏi");
    } else if (6.5 <= DTB && DTB < 8.5) {
        hocLuc = "Khá";
        console.log("Xếp loại Khá");
    } else if (5 <= DTB && DTB < 6.5) {
        hocLuc = "Trung Bình";
        console.log("Xếp loại TB");
    } else {
        hocLuc = "Yếu";
        console.log("Xếp loại Yếu");
    };
    var info1 = "<div class='alert alert-success'>Điểm Trung Bình: " + DTB + "</div>"
    var info2 = "<div class='alert alert-success'>Tên Thí Sinh: " + HoTen + "</div>"
    var info3 = "<div class='alert alert-success'>Xếp Loại: " + hocLuc + "</div>";

    document.getElementById("divDTB").innerHTML = info1;
    document.getElementById("divHoTen").innerHTML = info2;
    document.getElementById("divXepLoai").innerHTML = info3;
};