script.src = "./create/create.js"; //ファイルパス
document.head.appendChild(script); //<head>に生成
// sessionStorage.getItem('random');
// if(document.getElementById('test') != null) { 
    sessionStorage.getItem('random');
    const test = document.getElementById('test');
    if(random==1){
    test.style.backgroundColor='blue';
    }

// }
