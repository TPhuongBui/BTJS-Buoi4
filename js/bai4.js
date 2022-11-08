/**
 * + input: canh1, canh2, canh3
 * 
 * + Các bước thực hiện:
 *      tìm và lấy dữ liệu từ form
 *      sử dụng if else để tìm ra tam giác:
 *          nếu canh1 = canh2 và canh2 = canh3 => tam giác đều
 *          nếu canh 1 = canh2 hoặc canh2 = canh3 hoặc canh1 = canh3 => tam giác cân
 *          nếu canh1 * canh1 = ((canh2 * canh2) + (canh3 * canh3)) hoặc canh2 * canh2 = ((canh1 * canh1) + (canh3 * canh3)) hoặc canh3 * canh3 = ((canh2 * canh2) + (canh1 * canh1))
 *              => tam giác vuông
 *          còn lại là tam giác thường
 *      tìm số nằm ở giữa(số thứ 2)
 *      thông báo kết quả ra màn hình
 * 
 * output: xác định được loại tam giác
 */
function xacDinhTamGiac() {
    var canh1 = document.getElementById("inputCanh1").value;
    var canh2 = document.getElementById("inputCanh2").value;
    var canh3 = document.getElementById("inputCanh3").value;

    var result = "";

    if (canh1 == canh2 && canh2 == canh3) {
        result = "Tam Giác Đều";
        // console.log(result);
    }
    
    else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
        result = "Tam Giác Cân";
        // console.log(result);
    } 
    
    else if (canh1 * canh1 == ((canh2 * canh2) + (canh3 * canh3)) || canh2 * canh2 == ((canh1 * canh1) + (canh3 * canh3)) || canh3 * canh3 == ((canh2 * canh2) + (canh1 * canh1))){
        result = "Tam Giác Vuông";
        // console.log(result);
    }
    
    else{
        result = "Tam Giác Thường";
        // console.log(result);
    }

    document.getElementById("txtInRa").innerHTML = result;

}
