
function demSoChanLe() {
    var soThuNhat = document.getElementById("inputSo1").value;
    var soThuHai = document.getElementById("inputSo2").value;
    var soThuBa = document.getElementById("inputSo3").value;

    var bienDemLe = 0;
    var bienDemChan = 0;

    if (soThuNhat % 2 == 0) {
        bienDemChan ++;
    }else{
        bienDemLe++;
    }

    if (soThuHai % 2 == 0) {
        bienDemChan ++;
    }else{
        bienDemLe++;
    }

    if (soThuBa % 2 == 0) {
        bienDemChan ++;
    }else{
        bienDemLe++;
    }
    document.getElementById("txtThongBaoChanLe").innerHTML = "Có " + bienDemChan + " số chẵn " + " và " + bienDemLe + " số lẻ ";
}

