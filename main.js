function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
  

    // 시, 분, 초를 두 자리 숫자로 표시
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    var timeString = hours + ':' + minutes ;

    document.getElementById('clock').innerHTML = timeString;
}

// 1초마다 updateClock 함수 호출
setInterval(updateClock, 1000);

// 초기 로드 시에도 시간 표시
updateClock();



document.getElementById("login_form").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "start.html"; 
});


