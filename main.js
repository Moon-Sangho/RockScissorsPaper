let imageCoordinate = '0';
const dictionary = { // 딕셔너리 자료구조
    바위: '0',
    가위: '-135px',
    보: '-284px'
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
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imageCoordinate + ' 0';
    }, 100); 
}

intervalMaker();

const score = {
    가위: 1,
    바위: 0,
    보: -1
};

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function () {
            intervalMaker();
        }, 1000);
        let myPick = this.textContent;
        if (score[myPick] - score[computerPick(imageCoordinate)] === 0) {
            console.log('Draw!');
        } else if (score[myPick] - score[computerPick(imageCoordinate)] === -1 || score[myPick] - score[computerPick(imageCoordinate)] === 2) {
            console.log('You win!');
        } else {
            console.log('You lose!');
        }
    });
});

// 가위: 1, 바위: 0, 보: -1
//
// 나|컴퓨터   가위     바위     보
//      가위   1 1     1 0     1 -1
//      바위   0 1     0 0     0 -1
//        보  -1 1    -1 0    -1 -1