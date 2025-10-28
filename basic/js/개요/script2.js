// 이벤트객체.이벤트함수("이밴트종류", 함수);
window.addEventListener("DOMContentLoaded", function(){
    var btn4 = this.document.getElementById('btn4');
    btn4.onclick = function() {
        alert('버튼4');
    };
});