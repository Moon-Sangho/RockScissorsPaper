let imageCoordinate = '0';
const dictionary = { // 딕셔너리 자료구조
    바위: '0',
    가위: '-200px',
    보: '-390px'
};

function computerPick(imageCoordinate) {
    return Object.entries(dictionary).find(function(v) {
        return v[1] === imageCoordinate;
    })[0];
}

let interval;

function intervalMaker() {
    interval = setInterval(function() {
        if (imageCoordinate === dictionary.바위) {
            imageCoordinate = dictionary.가위
        } else if (imageCoordinate === dictionary.가위) {
            imageCoordinate = dictionary.보;
        } else {
            imageCoordinate = dictionary.바위;
        }
        document.querySelector("#computer").style.background =
            'url(./main.jpg) ' + imageCoordinate + ' 0';
    }, 100); 
}

intervalMaker();

const score = {
    가위: 1,
    바위: 0,
    보: -1
};

const result = document.getElementById('result');
const init = document.getElementById('init');
let playTime = 0;
let winNumber = 0;
let loseNumber = 0;
let drawNumber = 0;

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        intervalMaker();
        playTime++;
        init.style.display = 'inline-block';
        const myPick = this.textContent;
        const myScore = score[myPick];
        const computerScore = score[computerPick(imageCoordinate)];
        const scoreGap = myScore - computerScore;
        if (scoreGap === 0) {
            alert('Draw!');
            drawNumber++;
        } else if ([-1, 2].includes(scoreGap)) {
            alert('You win!');
            winNumber++;
        } else {
            alert('You lose!');
            loseNumber++;
        }
        result.innerHTML = "플레이 횟수 : " + playTime + "<br>" + 
                           "승리 횟수 : " + winNumber + "<br>" + 
                           "패배 횟수 : " + loseNumber + "<br>" +
                           "무승부 횟수 : " + drawNumber;
    });
});

function initRecord() {
    playTime = 0;
    winNumber = 0;
    loseNumber = 0;
    drawNumber = 0;
    result.innerHTML = "플레이 횟수 : " + 0 + "<br>" + 
                       "승리 횟수 : " + 0 + "<br>" + 
                       "패배 횟수 : " + 0 + "<br>" +
                       "무승부 횟수 : " + 0;
}

init.addEventListener('click', initRecord);

// 가위: 1, 바위: 0, 보: -1
//
// 나|컴퓨터   가위     바위     보
//      가위   1 1     1 0     1 -1
//      바위   0 1     0 0     0 -1
//        보  -1 1    -1 0    -1 -1