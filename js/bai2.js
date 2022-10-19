function hoiThamNhau() {
    var thanhVien = document.getElementById("selectPerson").value;
    // document.getElementById("txtHienThi").innerHTML = "Xin chào " + thanhVien + " ! ";
    
    var e = document.getElementById("txtHienThi");
    e.classList.add("alert", "alert-danger");
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
            e.classList.remove("alert", "alert-danger");
            alert("Quên chọn thành viên rồi kìa!");
            break;
    }
}

document.getElementById("btnGuiLoiChao").onclick = hoiThamNhau;