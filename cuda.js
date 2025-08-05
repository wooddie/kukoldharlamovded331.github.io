var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*408/100;
        el.innerHTML = `<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:${valEl}px 408px;" r="65" cx="-80" cy="80" /></svg>`;
        
    });
};
Circle('.circle');

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show-menu');
});


/*
ВТОРОЕ ВИДЕО
*/
var clickButton = document.querySelector('.portfolio-filter');
clickButton.ondblclick = function() {
    window.location = 'kkk/joke.html';
}

/*
УПРАВЛЕНИЕ АУДИО
*/
var sb = {
    init: function () {
        sb.listeners();
    },
    listeners: function () {
        $("audio").on("play", function (e) {
            $("audio").each(function () {
                if (this !== e.target) {
                    this.pause();
                    this.currentTime = 0;
                }
            });
        });
    }
};

$(document).ready(sb.init);
