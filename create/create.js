'use strict'
$('.nav_toggle').on('click', function () {
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
let questions =[ 
    [Q11,Q12,Q13,Q14],
    [Q21,Q22,Q23,Q24],
    [Q31,Q32,Q33,Q34],
    [Q41,Q42,Q43,Q44],
    [Q51,Q52,Q53,Q54]
];

// 選択肢を押したときに
for(let i = 0; i<questions.length; i++){
    // 選択肢と他の選択肢の色を変える
    // すでに押されているときに押されたときは初期状態に戻る
    for(let j = 0; j<questions[0].length; j++){
        questions[i][j].addEventListener('click',function(){
            for(let k = 1;k<questions[0].length;k++){
                questions[i][(j+k)%4].style.backgroundColor='#1C658C';
                if(questions[i][j].classList.contains('chosen')){
                    questions[i][(j+k)%4].style.backgroundColor='';
                }    
                if(questions[i][(j+k)%4].classList.contains('chosen')){
                    questions[i][(j+k)%4].classList.remove('chosen');
                    questions[i][j].style.backgroundColor='';
                }
            }
            questions[i][j].classList.toggle('chosen');
            // createbuttonが押されたときに選んだ選択肢を配列で取得出来る
            console.log(`ok${i}${j}`)
            create.addEventListener('click',function(){
                if(questions[i][j].classList.contains('chosen')){
                            color.push(questions[i][j].getAttribute('data-number'));                            
                        }
            })
        })    
    }
}


