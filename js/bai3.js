/**
 * + input: num1, num2, num3, bienDemChan, bienDemLe
 * 
 * + Các bước thực hiện:
 *      tìm và lấy dữ liệu từ form
 *      đếm số chẵn lẻ: 
 *          nếu số thứ nhất chia hết cho 2 thì đó là số chẵn, ngược lại là số lẻ
 *          làm tương tự với 2 số còn lại
 *      thông báo kết quả ra màn hình
 * 
 * output: đếm được có bao nhiêu số chẵn và lẻ
 */
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

