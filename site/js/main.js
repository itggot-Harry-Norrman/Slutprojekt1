function menu() {
  document.querySelector(".menu").classList.add("anim")
  document.querySelector(".shade").classList.add("shd_ani")
  document.querySelector(".shade").classList.remove("left")
}
function achievement() {
  document.querySelector(".achieve").classList.remove("display_n")
  document.querySelector(".res_js").classList.remove("display_n")
}
function removeAch() {
  document.querySelector(".achieve").classList.add("display_n")
  document.querySelector(".res_js").classList.add("display_n")
  document.querySelector(".notif_menu").classList.remove("notif_ani")
}
function remMen() {
  document.querySelector(".menu").classList.remove("anim")
  document.querySelector(".shade").classList.remove("shd_ani")
  document.querySelector(".shade").classList.add("left")
}
function notification() {
  document.querySelector(".notif_menu").classList.add("notif_ani")
  document.querySelector(".res_js").classList.remove("display_n")
}
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%" ;
            var round = width * 0.09;
            var sleepLeft = 9 - round;
            elem.innerHTML = Math.ceil(round) + "h";
        }
    }

}
function moveCur() {
    var prank = document.getElementById("sleepSession");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            prank.style.width = width + "%" ;
            var round = width * 1.8;
            var sleepLeft = 9 - round;
            prank.innerHTML = Math.ceil(round) + "m";
        }
    }

}
