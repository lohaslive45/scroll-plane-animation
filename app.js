//!-----------製作平滑曲線動畫------------
//*路線圓弧率1.25
    //*x+往右，y+往下,value編織出路徑
    //*autorotate隨路徑轉動頭方向
const flightPath = {
    curviness:1.25,
    autoRotate:true,
    values:[
        {x:100,y:-20},
        {x:300,y:10},
        {x:500,y:100},
        {x:750,y:-100},
        {x:350,y:-50},
        {x:600,y:100},
        {x:800,y:0},
        {x:window.innerWidth,y:-250},
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane",1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);

//?-----------滾動螢幕控制動畫------------
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement:".animation",
    duration:5000,
    triggerHook:0
}) 
    .setTween(tween)
    //.addIndicators() //顯示目前滑鼠滾動位置
    .setPin(".animation")
    .addTo(controller);