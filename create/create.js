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

/*
const colors = 
[[#DEBCA4, #727186, #5A5733],
[#dee2d1, #6abe83, #f1ac9d],
[#e2f2d5, #f9fbba, #f6c2c2],
[#e4d1d3, #1687a7　#014955]
[#fdc4b6 , e59572　#2694ab]
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