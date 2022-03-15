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



// page_1 slider




function horizoltalSlider(stepNo) {
    
    var steps = document.getElementsByClassName("step");
    var stepHeader = document.getElementsByClassName("step-header")[0];
    var stepDescription = document.getElementsByClassName("step-description")[0];
    var stepImage = document.getElementsByClassName("step-img")[0];
    var circles = document.getElementsByClassName("circle");
    var rightBtn = document.getElementsByClassName("btn-card-right")[0];
    var leftBtn = document.getElementsByClassName("btn-card-left")[0];
    
    const dict ={
        "step 1": ["Go shopping", "Shop your favorite stores online or in-store and pay later with Buckyy. You’ll see us at checkout, or you can scan our QR code at in-store checkout.", "images/step_1.webp"],
        "step 2": ["Choose your payment terms", "You’re in control. Pick the payment option that works for you from our transparent payment options —from 4 interest-free payments every 2 weeks to paying the whole amount at once.", "images/step_2.webp"],
        "step 3": ["Make your payments", "Manage your payments in your Buckyy account, and set up AutoPay so you don’t miss a payment.", "images/step_3.webp"],
    }
    
    stepHeader.innerHTML = dict[stepNo][0];
    stepDescription.innerHTML = dict[stepNo][1];
    stepImage.src = dict[stepNo][2];
    
    if(stepNo != "step 1") {
       document.getElementById("1st-step").classList.remove("step-active");
    }
    
    if(stepNo == "step 1") {
        steps[0].classList.add("step-focus");
        steps[1].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");
        
        circles[0].style.opacity = "1";
        circles[1].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";
        
        rightBtn.style.display = "block";
        leftBtn.style.display = "none";
    }
    else if(stepNo == "step 2") {
        steps[1].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");
        
        circles[1].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";
        
        rightBtn.style.display = "block";
        leftBtn.style.display = "block";
    }
    else {
        steps[2].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[1].classList.remove("step-focus");
        
        circles[2].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[1].style.opacity = "0.4";
        
        rightBtn.style.display = "none";
        leftBtn.style.display = "block";
    }
    
    if(stepNo != "step 1") {
       document.getElementById("1st-circle").classList.remove("active-circle");
    }
}








































