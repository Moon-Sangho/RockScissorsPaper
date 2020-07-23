let computerPick = '0';
let dictionary = { // 딕셔너리 자료구조
    rock: '0',
    scissor: '-135px',
    paper: '-284px'
};

setInterval(function() {
    if (computerPick === dictionary.rock) {
        computerPick = dictionary.scissor
    } else if (computerPick === dictionary.scissor) {
        computerPick = dictionary.paper;
    } else {
        computerPick = dictionary.rock;
    }
    document.querySelector("#computer").style.background =
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + computerPick + ' 0';
}, 100); 


document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        let myPick = this.textContent;
        console.log(myPick, computerPick);
    });
});



