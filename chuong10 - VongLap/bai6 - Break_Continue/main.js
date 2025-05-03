//Break: Thoát vòng lặp
for (var i=0; i<=10; i++){
    if (i==5){
        console.log("Break loop in", i);
        break;
    }
}

//Continue: Tiếp tục, bỏ qua câu lệnh còn lại dưới continue
for (var i=0; i<=10; i++){
    if (i%2 !=0){
        continue;
    };
    console.log(i); //0; 2; 4; 6; 8; 10
}
