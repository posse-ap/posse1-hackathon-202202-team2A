'use strict'
$('.nav_toggle').on('click', function() {
    $('.nav_toggle, .nav').toggleClass('show');
});

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
const create = document.getElementById("create");

let color = [];
let questions = [
    [Q11, Q12, Q13, Q14],
    [Q21, Q22, Q23, Q24],
    [Q31, Q32, Q33, Q34],
    [Q41, Q42, Q43, Q44],
    [Q51, Q52, Q53, Q54]
];

// 選択肢を押したときに
for (let i = 0; i < questions.length; i++) {
    // 選択肢と他の選択肢の色を変える
    // すでに押されているときに押されたときは初期状態に戻る
    for (let j = 0; j < questions[0].length; j++) {
        questions[i][j].addEventListener('click', function() {
            for (let k = 1; k < questions[0].length; k++) {
                questions[i][(j + k) % 4].style.backgroundColor = '#1C658C';
                if (questions[i][j].classList.contains('chosen')) {
                    questions[i][(j + k) % 4].style.backgroundColor = '';
                }
                if (questions[i][(j + k) % 4].classList.contains('chosen')) {
                    questions[i][(j + k) % 4].classList.remove('chosen');
                    questions[i][j].style.backgroundColor = '';
                }
            }
            questions[i][j].classList.toggle('chosen');
            // createbuttonが押されたときに選んだ選択肢を配列で取得出来る
            console.log(`ok${i}${j}`)
            create.addEventListener('click', function() {
                if (questions[i][j].classList.contains('chosen')) {
                    color.push(questions[i][j].getAttribute('data-number'));
                }
            })
        })
    }
}




const contents11=
`<body>`
`+    <div class="cover">`
`+        <div class="wrapper">`
`+            <div class="leaf"></div>`
`+            <div class="leaf"></div>`
`+            <div class="leaf"></div>`
`+        </div>`
`+        <h1>SHIHO</h1> `
`+    </div>`
`+</body>`
`+    <style>`
`+        .cover {background: #ffffff;display: flex;flex-direction: column;justify-content: center;height: 250px;width: 250px;}h1{text-align: center;font-size: 50px;}.wrapper {position: relative;height: 150px;width: 250px;}.leaf:first-child {left: 40px;background: #1A4341;}.leaf:nth-child(2) {left: 80px;background: #998235;}.leaf:nth-child(3) {left: 120px;background: #F3AC3C;}.leaf {top: 20px;position: absolute;width: 120px;height: 120px;border-top-left-radius: 67%;border-bottom-right-radius: 67%;}`
`+    </style>`

const contents12=
<body>
    <div class="cover">
        <div class="wrapper">
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
        </div>
        <h1>SHIHO</h1>
    </div>
</body>
<style>
    h1{text-align: center;}.cover {display: flex;flex-direction: column;background: #ffffff;margin: 0;width: 250px;height: 250px;top: 50%;left: 50%;}
    .wrapper {position: relative;width: 280px;height: 130px;margin: 85px auto;}
    .triangle {top: 10px;left: 30px;position: absolute;width: 0;height: 0;border-left: 40px solid transparent;border-right: 40px solid transparent;border-top: 100px solid #FF6D00;z-index: 1;}
    .triangle:nth-child(2) {border-top-color: #FD4602;left: 50px;z-index: 0;}
    .triangle:nth-child(3) {transform: scaleY(-1);border-top-color: #FD4602;left: 100px;z-index: 1;}
    .triangle:nth-child(4) {transform: scaleY(-1);left: 120px;z-index: 0;}
</style>

const contents13=
const contents14=
const contents21=
const contents22=
const contents23=
const contents24=
const contents31=
const contents32=
const contents33=
const contents34=
const contents41=
const contents42=
const contents43=
const contents44=
