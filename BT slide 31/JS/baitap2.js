document.getElementById("btnChaoHoi").onclick = function (event) {
    event.preventDefault();
    var bo = document.getElementById("txtBo").checked;
    var me = document.getElementById("txtMe").checked;
    var anhTrai = document.getElementById("txtAnhTrai").checked;
    var emGai = document.getElementById("txtEmGai").checked;
    var nguoiChon = 0;
    if (nguoiChon = bo) {
        document.getElementById("divChaoHoi").innerHTML = "Anh chào em !, Bố chào con trai !, Bố chào con gái !";
    } else if (nguoiChon = me) {
        document.getElementById("divChaoHoi").innerHTML = "Em chào anh !, Mẹ chào con trai !, Mẹ chào con gái !";
    } else if (nguoiChon = anhTrai) {
        document.getElementById("divChaoHoi").innerHTML = "Con chào bố !, Con chào mẹ !, Anh chào em !";
    } else {
        document.getElementById("divChaoHoi").innerHTML = "Con chào bố !, Con chào mẹ !, Em chào anh !";
    }
};