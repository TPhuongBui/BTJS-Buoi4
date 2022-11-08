/**
 * + input: các thành viên trong gia đình
 * 
 * + Các bước thực hiện:
 *      tìm và lấy dữ liệu từ form
 *      sử dụng hàm switch case để khi chọn vào các thành viên thì in ra các câu chào tương ứng
 *      thông báo kết quả ra màn hình
 * 
 * output: lời chào của các thành viên khi được chọn
 */

function hoiThamNhau() {
    var thanhVien = document.getElementById("selectPerson").value;
    // document.getElementById("txtHienThi").innerHTML = "Xin chào " + thanhVien + " ! ";
    
    var result = document.getElementById("txtHienThi");
    result.classList.add("alert", "alert-danger");
    // console.log(thanhVien);
    switch (thanhVien) {
        case "Bố":
            document.getElementById("txtHienThi").innerHTML = "Xin chào Bố!";
            break;
        case "Mẹ":
            document.getElementById("txtHienThi").innerHTML = "Xin chào Mẹ!";
            break;
        case "Anh Trai":
            document.getElementById("txtHienThi").innerHTML = "Xin chào Anh Trai!";
            break;
        case "Em Gái":
            document.getElementById("txtHienThi").innerHTML = "Xin chào Em Gái!";
            break;
        default:
            document.getElementById("txtHienThi").innerHTML = "";
            result.classList.remove("alert", "alert-danger");
            alert("Quên chọn thành viên rồi kìa!");
            break;
    }
}

document.getElementById("btnGuiLoiChao").onclick = hoiThamNhau;