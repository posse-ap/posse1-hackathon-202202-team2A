'use strict'
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
});

let nameValue = 0;

const Q11 = document.getElementById("Q1-1");
const Q12 = document.getElementById("Q1-2");
const Q13 = document.getElementById("Q1-3");
const Q14 = document.getElementById("Q1-4");
const Q21 = document.getElementById("Q2-1");
const Q22 = document.getElementById("Q2-2");
const Q23 = document.getElementById("Q2-3");
const Q24 = document.getElementById("Q2-4");
const Q31 = document.getElementById("Q3-1");
const Q32 = document.getElementById("Q3-2");
const Q33 = document.getElementById("Q3-3");
const Q34 = document.getElementById("Q3-4");
const Q41 = document.getElementById("Q4-1");
const Q42 = document.getElementById("Q4-2");
const Q43 = document.getElementById("Q4-3");
const Q44 = document.getElementById("Q4-4");
const Q51 = document.getElementById("Q5-1");
const Q52 = document.getElementById("Q5-2");
const Q53 = document.getElementById("Q5-3");
const Q54 = document.getElementById("Q5-4");
const ready = document.getElementById("ready");
const container = document.getElementById("container");



let color = [];
let questions =[ 
    [Q11,Q12,Q13,Q14],
    [Q21,Q22,Q23,Q24],
    [Q31,Q32,Q33,Q34],
    [Q41,Q42,Q43,Q44],
    [Q51,Q52,Q53,Q54]
];

// 選択肢を押したときに
for(let i = 0; i<questions.length; i++){
    // 選択肢と他の選択肢の背景と文字の色を変える
    // すでに押されているときに押されたときは初期状態に戻る
    for(let j = 0; j<questions[0].length; j++){
        questions[i][j].addEventListener('click',function(){
            for(let k = 1;k<questions[0].length;k++){
                // chosen classがついているか否かで管理
                if(questions[i][(j+k)%4].classList.contains('chosen')){
                    questions[i][(j+k)%4].classList.remove('chosen');
                }
            }
            questions[i][j].classList.toggle('chosen');
            // chosen classがついているとき(選択時)といないときの色
            for(let l = 0;l<questions[0].length;l++)
            if(questions[i][(j+l)%4].classList.contains('chosen')){
                questions[i][(j+l)%4].style.backgroundColor='#22577E';//選択時の背景色
                questions[i][(j+l)%4].style.color='#95D1CC';//選択時の文字色
            }else if(questions[i][(j+l)%4].classList.contains('chosen')!=true&&
                    questions[i][(j+l+1)%4].classList.contains('chosen')!=true&&
                    questions[i][(j+l+2)%4].classList.contains('chosen')!=true&&
                    questions[i][(j+l+3)%4].classList.contains('chosen')!=true){
                            for(let m=0;m<4;m++){
                            questions[i][(j+l+m)%4].style.backgroundColor='#9AD0EC';//どれ選択していないときの背景色
                            questions[i][(j+l+m)%4].style.color='#1572a1';//どれも選択していないときの文字色
                            }
            }else{
                questions[i][(j+l)%4].style.backgroundColor='white';//非選択時の背景色
                questions[i][(j+l)%4].style.color='#5584AC';//非選択時の文字色
            }
            // createbuttonが押されたときに選んだ選択肢を配列で取得出来る
            console.log(`ok${i}${j}`)

        })
        ready.addEventListener('click',function(){
            container.style.display='none';
            const namearea = document.getElementById('namearea');
                nameValue = namearea.value;
            if(questions[i][j].classList.contains('chosen')){
                        color.push(questions[i][j].getAttribute('data-number'));
                        // console.log(color);
                        // console.log('click');
                    }
                    // console.log('click');
        })
    }
}


*
const colors = 
[[#DEBCA4, #727186, #5A5733],
[#dee2d1, #6abe83, #f1ac9d],
[#e2f2d5, #f9fbba, #f6c2c2],
[#e4d1d3, #1687a7　#014955]
[#fdc4b6 ,#e59572　#2694ab]
[#fae3d9, #ffb6b9, #8ac6d1]
[#f4f0e6, #9dd3a8　#d9d9f3]
[#ecd6c7　#e79686　#a39391]
[#f8f2da　#ddecef　#c7afbd]
[#fffadf　#8f9435　#585d37]
[#eaffd0　#fce38a　#95e1d3]
[#9fd9d0　#3aa7a0　#f7c9c0]
[#f4efdb　#5ad0e8　#ff424e]
[#82aff9　#9881f5　#f97d81]
[#c4d4af　#68a8ad　#737495]
[#fad3cf　#a696c8　#2470a0]
[#fdfdeb　#f9ce00　#09194f]
[#eaeaea　#08d9d6　#ff2e63]
[#fff1c1　#fe5f55　#293462]
[#bd97cb　#5e376d　#f3eac0]
[#fff7f7　#dadada　#204969]
[#eeeeee　#393e46　#fd7013]
[#eae3e3　#20366b　#2d095c]
[#ffffff　#260033　#1f640a]
[#d0dfe6　#1794a5　#032030]
[#dcdede　#79a2a6　#a4bf5b]
[#1f192b　#4e706a　#eec7bb]
[#c8c8c0　#7d6e70　#ac5850]
[#e1dbd0　#4f3750　#676b40]
[#ffffff　#333366　#ff9933]
[#d1bfa7　#8e8e90　#bd8c7d]
[#efefef　#c04d00　#ec7700]
[#cc9900　#cc6600　#663300]
[#ffffff　#424242　#8a0651]
[#eadab0　#c8a569　#af4324]
[#ffb4a2　#b5838d　#6d6875]
[#e8e1e4　#d9ad9a　#29000a]
[#b18743　#f4edeb　#274459]
[#fbede0　#d0ab99　#d4bbdd]
[#efd3e7　#d693bd　#9c0063]
[#f4cc70, #20948b, #6ab187]
[#fifif2, #a1d6e2, #1995ad]
[#75b1a9, #d9b441, #acd0c0]
[#f52549, #fa6775, #ffd64d]のこり20
[#34888c, #7caa2d, #cb6318]
[#1E656d, #f1f3ce, #f62a00]
[#258039, #f5be41, #cf3721]
[#ee693f, #fcfdfe, #739f3d]
[#f70025. #f25c00, #f9a603]
[#a1be95, #92aac7, #ed5752]
[#4897d8, #fa6e59, #f8a055]
[#c1e1dc, #ffe894, #fdd475]
[#d13525, #f2c057, #486824]のこり10
[#faaf08, #fa812f, #fa4032]
[#f4ec6a, #bbcf4a, #e73f0b]
[#fef2e4, #fd974f, #c60000]
[#f77604, #b8d20b, #f56c57]
[#d8412f, #fe7a47, #fcfdfe]
[#a10115, #d72c16, #f0efea]
[#c7db00, #7aa802, #f78b2d]
[#b51d0a, #ead39c, #7d5e3c]
[#556dac, #f79b77, #755248]
[#2988bc, #2f496E, #ed8c72]
]

// questions[0][0].addEventListener('click',function(){
//     const namearea = document.getElementById('namearea');
//     const nameValue = namearea.value;
//     console.log(nameValue);
//     const birthday = document.getElementById('birthday');
//     const birthdayValue = birthday.value;
//     console.log(birthdayValue);
// });





// questions[0][0].addEventListener('click',function(){
//     const namearea = document.getElementById('namearea');
//     const nameValue = namearea.value;
//     console.log(nameValue);
//     const birthday = document.getElementById('birthday');
//     const birthdayValue = birthday.value;
//     console.log(birthdayValue);
// });


const contents11=
`<body>`
+`    <div class="cover">`
+`        <div class="wrapper">`
+`            <div class="leaf"></div>`
+`            <div class="leaf"></div>`
+`            <div class="leaf"></div>`
+`        </div>`
+`        <h1>${nameValue}</h1> `
+`    </div>`
+`</body>`
+`    <style>`
+`        .cover {background: #ffffff;display: flex;flex-direction: column;justify-content: center;height: 250px;width: 250px;}h1{text-align: center;font-size: 50px;}.wrapper {position: relative;height: 150px;width: 250px;}.leaf:first-child {left: 40px;background: #1A4341;}.leaf:nth-child(2) {left: 80px;background: #998235;}.leaf:nth-child(3) {left: 120px;background: #F3AC3C;}.leaf {top: 20px;position: absolute;width: 120px;height: 120px;border-top-left-radius: 67%;border-bottom-right-radius: 67%;}`
+`    </style>`

const contents12=
+`<body>`
+`    <div class="cover">`
+`        <div class="wrapper">`
+`            <div class="triangle"></div>`
+`            <div class="triangle"></div>`
+`            <div class="triangle"></div>`
+`            <div class="triangle"></div>`
+`        </div>`
+`        <h1>${nameValue}</h1>`
+`    </div>`
+`</body>`
+`<style>`
+`    h1{text-align: center;}.cover {display: flex;flex-direction: column;background: #ffffff;margin: 0;width: 250px;height: 250px;top: 50%;left: 50%;}`
+`    .wrapper {position: relative;width: 280px;height: 130px;margin: 85px auto;}`
+`    .triangle {top: 10px;left: 30px;position: absolute;width: 0;height: 0;border-left: 40px solid transparent;border-right: 40px solid transparent;border-top: 100px solid #FF6D00;z-index: 1;}`
+`    .triangle:nth-child(2) {border-top-color: #FD4602;left: 50px;z-index: 0;}`
+`    .triangle:nth-child(3) {transform: scaleY(-1);border-top-color: #FD4602;left: 100px;z-index: 1;}`
+`    .triangle:nth-child(4) {transform: scaleY(-1);left: 120px;z-index: 0;}`
+`</style>`

const contents13=
+`<body>`
+`    <div class="cover">`
+`        <div class="circle"></div>`
+`    <div class="circle"></div>`
+`    <div class="center"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{font-size: 40px;position: absolute;width: 250px;text-align: center;top: 170px;}`
+`    .cover { background: #ffffff;margin: 0;display: flex;justify-content: center;align-items: center;height: 250px;width: 250px;}`
+`    .circle {background: #7B3F61;width: 130px;height: 130px;border-radius: 50%;}`
+`    .circle:first-child {margin-right: -50px;}`
+`    .circle:nth-child(2) {background: #E78481;}`
+`    .center {position: absolute;width: 75px;height: 75px;background: #09042A;transform: rotate(45deg);border-top-right-radius: 75px;border-bottom-left-radius: 75px;}`
+`</style>`

const contents14=
+`<body>`
+`    <div class="cover">`
+`        <div class="ice"></div>`
+`        <div class="stick"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 200px;}`
+`    .cover {background: #ffffff;height: 250px;width: 250px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin: 0;}`
+`    .ice {top: 10px;width: 100px;height: 150px;background: #FFF1C1;border-radius: 50px 50px 20px 20px;}`
+`    .stick {width: 30px;height: 50px;background: #FE5F55;border-radius: 0 0 10px 10px;}`
+`    .stick::after {position: absolute;content: '';width: 30px;height: 10px;background: #A64942;}`
+`</style>`

const contents21=
+`<body>`
+`    <div class="cover">`
+`        <div class="wrap">`
+`            <div class="y"></div>`
+`            <div class="x"></div>`
+`        </div>`
+`        <div class="wrap reverse">`
+`            <div class="y"></div>`
+`            <div class="x"></div>`
+`        </div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;left: 530px;top: 180px;text-align: center;top: 200;}`
+`    .cover {background: rgb(255, 255, 255);height: 250px;width: 250px;margin-left: 43%;}`
+`    .wrap {display: flex;flex-direction: column;transform: rotate(45deg);position: absolute;left: 50%;top: 30px;}`
+`    .y {width: 30px;height: 100px;background: #F2994A;border-bottom-left-radius: 10px;}`
+`    .x {width: 60px;height: 30px;background: #F2994A;border-top-right-radius: 5px;margin-top: -30px;margin-left: 20px;}.wrap.reverse {transform: scale(-1, -1) rotate(45deg);top: 80px;left: 50%;}`
+`    .reverse .y,`
+`    .reverse .x {background: #2D9CDB;}`
+`</style> `

const contents22=
+`<body>`
+`    <div class="cover">`
+`        <div class="wrap">`
+`            <div class="leaf-lg t l"></div>`
+`            <div class="leaf-lg b r flip-x"></div>`
+`            <div class="leaf-sm t r flip-x"></div>`
+`            <div class="leaf-sm b l"></div>`
+`        </div>`
+`        <h1>${nameValue}</h1>`
+`    </div>`
+`        </body>`
+`        <style>`
+`            h1{font-size: 30px;}`
+`            .cover {background: #ffffff;display: flex;flex-direction: column;justify-content: center;align-items: center;margin: 0;padding:0;height: 250px;width: 250px;padding-top: 10px;}`
+`            .wrap {width: 180px; height: 180px; position: relative;}`
+`            .t {top: 0}.b {bottom: 0}`
+`            .r {right: 0}`
+`            .l {left: 0}`
+`            .flip-x {transform: scaleX(-1)}`
+`            .leaf-lg,`
+`            .leaf-sm {position: absolute;border-top-right-radius: 50px;border-bottom-left-radius: 50px;}`
+`            .leaf-lg {width: 80px;height: 100px;background: #1A4341;}`
+`            .leaf-sm {width: 80px;height: 60px;background: #F3AC3C;}`
+`        </style>`

const contents23=
+`<body>`
+`    <div class="cover">`
+`        <div class="circle">`
+`            <div class="circle-in"></div>`
+`            <div class="helper"></div>`
+`            <div class="helper r"></div>`
+`        </div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 200px;}`
+`    .cover {background: #ffffff;display: flex;justify-content: center;height: 240px;width: 250px;padding-top: 10px;}`
+`    .circle {width: 200px;height: 200px;border-radius: 50%;background: #AA445F;position: relative;top: 0;}`
+`    .circle-in {position: absolute;width: 140px;height: 140px;box-sizing: border-box;border: 30px solid #F7EC7D;border-radius: 50%;left: 30px;top: 30px;}`
+`    .helper {position: absolute;width: 100px;height: 100px;background: #AA445F;border-top-left-radius: 100px;}`
+`    .helper.r {bottom: 0;right: 0;transform: scale(-1);}`
+`    </style>`

const contents24=
+`<body>`
+`    <div class="cover">`
+`        <div class="rect"></div>`
+`        <div class="rect y"></div>`
+`        <div class="square"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 230px;text-align: center;top: 200px;left: 520px;}`
+`    html{height: 600px;}`
+`    .cover {top: 0;display: flex;justify-content: center;align-items: center;height: 250px;width: 250px;margin: auto;}`
+`    .rect {position: absolute;background: #A3A368;width: 50px;height: 200px;transform: rotate(45deg);top: 0px;}`
+`    .rect.y {background: #F3AC3C;transform: rotate(-45deg);top: 0px;}`
+`    .square {position: absolute;width: 50px;height: 50px;background: #FBE18C;transform: rotate(45deg);top: 75px;}`
+`</style>`

const contents31=
+`<body>`
+`    <div class="cover">`
+`        <div class="square1"></div>`
+`        <div class="square2"></div>`
+`        <div class="square3"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 190px;}`
+`    .cover {margin: 0;background: #ffffff;display: flex;justify-content: center;/* align-items: center; */height: 250px;width: 250px;}`
+`    div { position: absolute }`
+`    .square1 {width: 170px;height: 170px;background: #243D83;top: 30px;}`
+`    .square2 {width: 110px;height: 110px;background: #6592CF;transform: rotate(15deg);top: 60px;}`
+`    .square3 {width: 40px;height: 40px;background: #243D83;transform: rotate(30deg);top: 100px;}`
+`</style>`

const contents32=
+`<body>`
+`    <div class="cover">`
+`        <div class="wrapper">`
+`            <div class="c c-1"></div>`
+`            <div class="c c-2"></div>`
+`            <div class="c c-3"></div>`
+`        </div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`        </body>`
+`        <style>`
+`            h1{position: absolute;width: 250px;text-align: center;top: 190px;}`
+`            .cover{position: absolute;background: #ffffff;height: 250px;width: 250px;justify-content: center;top: 40;left: 100;}`
+`            .wrapper {display: flex;height: 170px;margin: 10px auto 30px;}        `
+`            .c {width: 100px;height: 100px;background: #F3AC3C;border-radius: 50%;border-top-right-radius: 0;margin-left: -60px;}`
+`            .c-1 {align-self: flex-end;z-index: 3;margin-left: 36px;}        `
+`            .c-2 {background: #998235;align-self: center;z-index: 2;}        `
+`            .c-3 {transform: rotate(180deg);}`
+`        </style>`

const contents33=
+`<body>`
+`    <div class="cover">`
+`        `
+`        <div class="square"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 200px;}`
+`    .cover{margin: 0;background: #ffffff;display: flex;height: 250px;width: 250px;justify-content: center; /* align-items: center; */}`
+`    .square {width: 97px;height: 97px;background: #f7f3da; margin-top: 100px;position: relative;top: 20px;}`
+`    .square:before {content: "";position: absolute;width: 60px;height: 60px;background: #6cb3a9;transform: translate(-36px, -72px) rotate(37deg);}`
+`    .square:after {content: "";position: absolute;width: 80px;height: 80px;right: 0;background: #f6df96;transform: translate(32px, -96px) rotate(37deg);}`
+`  </style>`

const contents34=
+`<body>`
+`    <div class="cover">`
+`        <div class="circle"></div>`
+`        <div class="triangle"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 170px;}`
+`    .cover {position: absolute;margin:  auto;background: #ffffff;height: 250px;width: 250px;/* padding-bottom: 30px; */}`
+`    .circle {background: #f9e492;width: 120px;height: 120px;position: absolute;top: 74px;left: 50%;transform: translate(-50%, -50%);border-radius: 100%;}`
+`    .triangle {position: absolute;top: 130px;left: 50%;transform: translate(-50%, -50%);width: 230px;height: 80px;background: #4f77ff;clip-path: polygon(50% 0, 0% 100%, 100% 100%);overflow: hidden;}`
+`    .triangle::after {content: "";background: #191919;width: 150px;height: 150px;position: absolute;left: 50%;transform: translate(-50%, -109px);border-radius: 100%;}`
+`</style>`

const contents41=
+`<body>`
+`    <div class="cover">`
+`        <div class="coverCover">`
+``
+`            <div class="c"></div>`
+`            <div class="hc bg-y"></div>`
+`            <div class="hc"></div>`
+`            <div class="c bg-y"></div>`
+`            <div class="hc flip-y bg-y"></div>`
+`            <div class="c"></div>`
+`            <div class="c bg-y"></div>`
+`            <div class="hc flip-y"></div>`
+`        </div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 170px;}`
+`    .cover {display: flex;justify-content: center;text-align: center;background: #ffffff;display: grid;grid-template-columns: repeat(4, auto);grid-template-rows: auto auto;grid-gap: 20px;margin: 0;height: 250px;width: 250px;}`
+`    .coverCover{background: #ffffff;display: grid;grid-template-columns: repeat(4, auto);grid-template-rows: auto auto;grid-gap: 20px;margin: 0;padding: 90px 70px;height: 100px;width: 100px;}`
+`    .c,.hc {width: 30px;height: 30px;background:#998235;border-radius: 50%;}`
+`    .hc {border-bottom-left-radius: 0;border-bottom-right-radius: 0;}`
+`    .bg-y {background: #F3AC3C}`
+`    .flip-y{transform: scaleY(-1)}`
+`</style>`
const contents42=
+`<body>`
+`    <div class="cover">`
+`        <div class="out"></div>`
+`    <div class="in"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 200px;}`
+`    .cover {background: #ffffff;margin: 0;display: flex;justify-content: center;align-items: center;height: 250px;width: 250px;}`
+`    .in {width: 100px;height: 100px;border-radius: 50%;box-sizing: border-box;border: 30px solid #F3AC3C;z-index: 2;position: relative;background: #0B2429;}`
+`    .in::after {position: absolute;content: '';width: 140px;height: 140px;border-radius: 50%;box-sizing: border-box;border: 10px solid #0B2429;left: -50px;top: -50px;}`
+`    .out {width: 160px;height: 160px;position: absolute;background: #998235;transform: rotate(45deg);border-top-left-radius: 50%;border-bottom-right-radius: 50%;z-index: 1;}`
+`  </style>`
const contents43=
+`<body>`
+`    <div class="cover">`
+`        <div class="left"></div>`
+`    <div class="right"></div>`
+``
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`    h1{position: absolute;width: 250px;text-align: center;top: 200px;}`
+`    .cover {background: #ffffff;display: flex;justify-content: center;align-items: center;/* padding-left: 24px; */height: 250px;width: 250px;}`
+`    .left {background: #998235;width: 75px;height: 150px;border-top-left-radius: 150px;border-bottom-left-radius: 150px;position: relative;}`
+`    .left::after {content: '';width: 30px;height: 30px;border-radius: 50%;background: #0B2429;position: absolute;left: 30px;top: 30px;}`
+`    .right {margin-top: -100px;background: #F3AC3C;width: 100px;height: 100px;border-top-right-radius: 100px;}`
+`</style>`
const contents44=


+`<body>`
+`    <div class="cover">`
+`        <div class="triangle"></div>`
+`        <div class="triangle2"></div>`
+`        <div class="triangle3"></div>`
+`    </div>`
+`    <h1>${nameValue}</h1>`
+`</body>`
+`<style>`
+`h1{position: absolute;width: 250px;text-align: center;top: 170px;}`
+`.cover{position: relative;margin: 0;height: 250px;width: 250px;}`
+`.triangle{position: absolute;top: 10px;left: 80px;border-right: 50px solid transparent;border-bottom: 86.6025px solid #b2ce54;border-left: 50px solid transparent;}`
+`.triangle2{position: absolute;top: 95px;left: 30px;border-right: 50px solid transparent;border-bottom: 86.6025px solid #9ebfd3;border-left: 50px solid transparent;}`
+`.triangle3{position: absolute;top: 95px;left:130px ;border-right: 50px solid transparent;border-bottom: 86.6025px solid #eb6a6a;border-left: 50px solid transparent;}`
+`</style>`

let shapes = 
[
    [contents11,contents12,contents13,contents14],
    [contents21,contents22,contents23,contents24],
    [contents31,contents32,contents33,contents34],
    [contents41,contents42,contents43,contents44]
];

ready.addEventListener('click',function(){
// color[0],color[1]
let shape = shapes[color[0]-1][color[1]-1];
// console.log(shape);
document.getElementById('display').insertAdjacentHTML('beforeend',shape);
});






`+<body>`
`+    <div class="cover">`
`+        <div class="triangle"></div>`
`+        <div class="triangle2"></div>`
`+        <div class="triangle3"></div>`
`+    </div>`
`+    <h1>${nameValue}</h1>`
`+</body>`
`+<style>`
`+h1{position: absolute;width: 250px;text-align: center;top: 170px;}`
`+.cover{position: relative;margin: 0;height: 250px;width: 250px;}`
`+.triangle{position: absolute;top: 10px;left: 80px;border-right: 50px solid transparent;border-bottom: 86.6025px solid #b2ce54;border-left: 50px solid transparent;}`
`+.triangle2{position: absolute;top: 95px;left: 30px;border-right: 50px solid transparent;border-bottom: 86.6025px solid #9ebfd3;border-left: 50px solid transparent;}`
`+.triangle3{position: absolute;top: 95px;left:130px ;border-right: 50px solid transparent;border-bottom: 86.6025px solid #eb6a6a;border-left: 50px solid transparent;}`
`+</style>`


