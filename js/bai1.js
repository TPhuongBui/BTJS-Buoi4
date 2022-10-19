function sapXepTangDan() {
    var num1 = Number(document.getElementById("inputSoThuNhat").value);
    var num2 = Number(document.getElementById("inputSoThuHai").value);
    var num3 = Number(document.getElementById("inputSoThuBa").value);

    var max;
    var min;
    var thu1;
    var thu2;
    var thu3;

    // Timf max
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }

    if (max > num3) {
        thu3 = max;
    } else {
        thu3 = num3;
    }

    // Tim min
    if (num1 < num2) {
        min = num1;
    } else {
        min = num2;
    }

    if (min < num3) {
        thu1 = min;
    } else {
        thu1 = num3;
    }

    thu2 = num1 + num2 + num3 - thu3 - thu1;

    // console.log(thu1 + "," + thu2 + "," + thu3);
    document.getElementById("txtThongBao").innerHTML = (thu1 + "," + thu2 + "," + thu3);
}

document.getElementById("btnSapXep").onclick = sapXepTangDan;