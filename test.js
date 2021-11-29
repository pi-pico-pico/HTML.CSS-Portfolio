// copilotテスト用


// 変数imgに画像を代入して、rotateOnMouseOver関数を実行する
var img = document.getElementById("logo");
rotateOnMouseOver(img);

// 画像にカーソルを乗せた時にふわっと横に回転させる
function rotateOnMouseOver(img) {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(90deg)';
    }, false);
    img.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
    }, false);
}


// 画像にカーソルを乗せた時に垂直に回転させる
function rotateOnMouseOver(img) {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(90deg)';
    }, false);
    img.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
    }, false);
}


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