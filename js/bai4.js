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
