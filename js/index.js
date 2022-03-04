function slide(step){
    var buyingCard = document.getElementsByClassName("process-section-card");
    var i;
    //buyingCard[0].style.position = "relative";
    if(step == 'step-1'){
        var stepBtn1 = document.getElementById("step-btn-1");
        var stepBtn2 = document.getElementById("step-btn-2");
        var stepBtn3 = document.getElementById("step-btn-3");
        stepBtn2.removeAttribute("style");
        stepBtn3.removeAttribute("style");
        buyingCard[0].style.marginTop = "400";
        stepBtn1.style.fontSize = "25";
        stepBtn1.style.fontWeight = "900";
        stepBtn1.style.marginLeft = "10";
        //buyingCard[2].style.display = "none";

    }
    else if(step == 'step-2'){
        var stepBtn1 = document.getElementById("step-btn-1");
        var stepBtn2 = document.getElementById("step-btn-2");
        var stepBtn3 = document.getElementById("step-btn-3");
        buyingCard[0].style.marginTop = "15";
        buyingCard[2].style.display = "block";
        stepBtn1.removeAttribute("style");
        stepBtn3.removeAttribute("style");
        stepBtn2.style.fontSize = "25";
        stepBtn2.style.fontWeight = "900";
        stepBtn2.style.marginLeft = "10";
        //buyingCard[1].style.marginTop = "0";
    }
    else{
        var stepBtn1 = document.getElementById("step-btn-1");
        var stepBtn2 = document.getElementById("step-btn-2");
        var stepBtn3 = document.getElementById("step-btn-3");
        buyingCard[0].style.marginTop = "-370";
        buyingCard[2].style.display = "block";
        buyingCard[2].style.marginTop = "0";
        stepBtn1.removeAttribute("style");
        stepBtn2.removeAttribute("style");
        stepBtn3.style.fontSize = "25";
        stepBtn3.style.fontWeight = "900";
        stepBtn3.style.marginLeft = "10";
    }
    //buyingCard[2].style.marginTop = "100";


}


var elem = document.getElementsByClassName("slider-card");
var num=0;
var divWidth = document.getElementsByClassName("slider-card")[0].clientWidth;
document.getElementsByClassName("btn-card-left")[0].style.display = "none";

function horizontalCardSliderRight() {
    if(num == 0) {
    } else {
        num += divWidth;
        console.log(elem[0].style.marginLeft);
        elem[0].style.marginLeft = num;   
    }            
}
            

function horizontalCardSliderLeft() {
    if(num < 0) {
       document.getElementsByClassName("btn-card-left")[0].style.display = "block"; 
    }
    if(num < -1670){
    }else{
        num -= divWidth;
        elem[0].style.marginLeft = num;   
    }
    console.log(num)
}

function isInViewPort(el) {
    const rect = el.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 && 
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//------My Logic--------
//Works fine but there is a lag when scrolled up

/*var flag = 0;
function statsIncrementor() {
    var i = 0;
    const statsElem = document.getElementsByClassName("stats-section-overlay")[0];
    const messageText = isInViewPort(statsElem);
    console.log(messageText);
    if (messageText == true && flag == 0) {
        flag = 1;
        const interval = setInterval(function(){
            i ++;
            document.getElementsByClassName("stats-1-h1")[0].innerHTML = i;
            if (i==500) {
                clearInterval(interval);
            }
        }, );
        document.removeEventListener("scroll", statsIncrementor);
    }
}*/

//-------Codepen Login-------

function statsIncrementor() {
    // number count for stats, using jQuery animate

    $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
  
    $({ countNum: $this.text()}).animate({
        countNum: countTo
    },

    {

        duration: 1000,
        easing:'linear',
        step: function() {
        $this.text(Math.floor(this.countNum));
        },
        complete: function() {
        $this.text(this.countNum);
        //alert('finished');
        }

    });  
});
}

document.addEventListener("scroll", statsIncrementor);












































