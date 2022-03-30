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

//category changer function

var previousCategory;

function categoryChanger(category){
    var currentCategory;
    
    if(previousSelection == undefined) {
        previousSelection = 0;
    }
    
    //Checks weather it is a one digit or two digit number
    if(category[category.length-2] == " ") {
        currentCategory = category.slice(category.length-1);
    }
    else {
        currentCategory = category.slice(category.length-2);
    }
    //end
    
    const categoryArr = document.getElementsByClassName("category");
    const categoryHeaderArr = document.getElementsByClassName("category-header");
    
    categoryHeaderArr[0].innerHTML = category.slice(0, category.length-2);
    categoryHeaderArr[1].innerHTML = category.slice(0, category.length-2);
    categoryArr[previousSelection].classList.remove("active-li");
    categoryArr[currentCategory].classList.add("active-li");
    
    //Removes the styling for the previous item
    previousSelection = currentCategory;
    //end
}
//end



// page_1 slider


var dictKey = 1;
var previousSelection;

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
    
    if(stepNo == 'step 1') {
        stepHeader.innerHTML = dict['step 1'][0];
        stepDescription.innerHTML = dict['step 1'][1];
        stepImage.src = dict['step 1'][2];
        
        steps[0].classList.add("step-focus");
        steps[1].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");
        
        circles[0].style.opacity = "1";
        circles[1].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";
        
        rightBtn.style.display = "block";
        leftBtn.style.display = "none";
        
        dictKey = 1;
    }
    else if(stepNo == 'step 2') {
        stepHeader.innerHTML = dict['step 2'][0];
        stepDescription.innerHTML = dict['step 2'][1];
        stepImage.src = dict['step 2'][2];
        
        steps[1].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");
        
        circles[1].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";
        
        //if step 3 is on the screen then the right arrow button will disappear
        
        if(previousSelection == 'step 2' && stepNo == 'step 2') {
           rightBtn.style.display = "none";
           leftBtn.style.display = "block";
        }
        //if step 2 is on the screen then both the arrow buttons will appear
 
        else {
           rightBtn.style.display = "block";
           leftBtn.style.display = "block";
        }
        
        //end
        
        dictKey = 2;
    }
    else {
        stepHeader.innerHTML = dict[stepNo][0];
        stepDescription.innerHTML = dict[stepNo][1];
        stepImage.src = dict[stepNo][2]; 
        
        steps[2].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[1].classList.remove("step-focus");
        
        circles[2].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[1].style.opacity = "0.4";
        
        rightBtn.style.display = "none";
        leftBtn.style.display = "block";
        
        dictKey = 3;
    }
    
    if(stepNo != "step 1") {
        document.getElementById("1st-circle").classList.remove("active-circle");
    }
}


function sliderUsingArrow(direction) {
    var previousKey;
    var steps = document.getElementsByClassName("step");
    var stepHeader = document.getElementsByClassName("step-header")[0];
    var stepDescription = document.getElementsByClassName("step-description")[0];
    var stepImage = document.getElementsByClassName("step-img")[0];
    var circles = document.getElementsByClassName("circle");
    var rightBtn = document.getElementsByClassName("btn-card-right")[0];
    var leftBtn = document.getElementsByClassName("btn-card-left")[0];
    
    const dict ={
        1 : ["Go shopping", "Shop your favorite stores online or in-store and pay later with Buckyy. You’ll see us at checkout, or you can scan our QR code at in-store checkout.", "images/step_1.webp"],
        2 : ["Choose your payment terms", "You’re in control. Pick the payment option that works for you from our transparent payment options —from 4 interest-free payments every 2 weeks to paying the whole amount at once.", "images/step_2.webp"],
        3 : ["Make your payments", "Manage your payments in your Buckyy account, and set up AutoPay so you don’t miss a payment.", "images/step_3.webp"],
    }
    
    if(dictKey == undefined) {
        dictKey = 1;
    }
    
    if(direction == 'right' && dictKey > 0 && dictKey < 3){
        dictKey = dictKey + 1;
        
    }
    else if(direction == 'left' && dictKey > 0 && dictKey <= 3){
        dictKey = dictKey - 1;
    }

    stepHeader.innerHTML = dict[dictKey][0];
    stepDescription.innerHTML = dict[dictKey][1];
    stepImage.src = dict[dictKey][2];
        
    steps[1].classList.add("step-focus");
    steps[0].classList.remove("step-focus");
    steps[2].classList.remove("step-focus");
        
    circles[1].style.opacity = "1";
    circles[0].style.opacity = "0.4";
    circles[2].style.opacity = "0.4";
    
    if(dictKey == 1) {
        steps[0].classList.add("step-focus");
        steps[1].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");
        
        circles[0].style.opacity = "1";
        circles[1].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";
        
        //Shows only the right button
        rightBtn.style.display = "block";
        leftBtn.style.display = "none";
        //end
    }
    else if(dictKey == 2){
        steps[1].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[2].classList.remove("step-focus");
        
        circles[1].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[2].style.opacity = "0.4";
        
        //Shows both the buttons
        rightBtn.style.display = "block";
        leftBtn.style.display = "block";
        //end
    }
    else {
        steps[2].classList.add("step-focus");
        steps[0].classList.remove("step-focus");
        steps[1].classList.remove("step-focus");
        
        circles[2].style.opacity = "1";
        circles[0].style.opacity = "0.4";
        circles[1].style.opacity = "0.4";
        
        //Shows only the left button
        rightBtn.style.display = "none";
        leftBtn.style.display = "block";
        //end
    }

}








































