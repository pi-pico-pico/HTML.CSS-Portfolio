// copilotテスト用


// 変数imgに画像を代入して、rotateOnMouseOver関数を実行する
// var img = document.getElementById("logo");
// rotateOnMouseOver(img);













changeGradient("#ff0000", "#00ff00", 1000);


// グラデーションの色を秒数で変える関数を実行する
function changeGradient(color1, color2, time) {
    // テストコメント
    console.log("changeGradient関数が実行されました");
    var gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    document.body.style.background = gradient;

    setTimeout(function() {
        changeGradient(color2, color1, time);
    }, time);
}















// グラデーションの色を秒数で変える
// function changeGradient(color1, color2, time) {
//     var gradient = document.getElementById("gradient");
//     var gradient_color1 = gradient.getAttribute("color1");
//     var gradient_color2 = gradient.getAttribute("color2");
//     var gradient_time = gradient.getAttribute("time");
//     var gradient_timer = gradient.getAttribute("timer");
//     if (gradient_timer == null) {
//         gradient_timer = 0;
//     }
//     if (gradient_timer == time) {
//         gradient.setAttribute("color1", color1);
//         gradient.setAttribute("color2", color2);
//         gradient.setAttribute("time", time);
//         gradient.setAttribute("timer", 0);
//     } else {
//         gradient.setAttribute("timer", gradient_timer + 1);
//     }
// }





// function rotateOnMouseOver(img) {
//     img.addEventListener('mouseover', function() {
//         this.style.transform = 'rotate(90deg)';
//     }, false);
//     img.addEventListener('mouseout', function() {
//         this.style.transform = 'rotate(0deg)';
//     }, false);
// }


// 画像にカーソルを乗せた時に垂直に回転させる
// function rotateOnMouseOver(img) {
//     img.addEventListener('mouseover', function() {
//         this.style.transform = 'rotate(90deg)';
//     }, false);
//     img.addEventListener('mouseout', function() {
//         this.style.transform = 'rotate(0deg)';
//     }, false);
// }


// ajaxでPOST送信する
function postAjax(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            callback(req.responseText);
        }
    };
    req.send(data);
}