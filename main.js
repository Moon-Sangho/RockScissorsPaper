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


let interval = setInterval(function() {
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

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function () {
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
        }, 1000);
        let myPick = this.textContent;
        if (myPick === '가위') {
            if (computerPick(imageCoordinate) === '가위') {
                console.log('Draw!');
            } else if (computerPick(imageCoordinate) === ' 바위') {
                console.log('You lose!');
            } else {
                console.log('You win!');
            }
        } else if (myPick === '바위') {
            if (computerPick(imageCoordinate) === '가위') {
                console.log('You win!');
            } else if (computerPick(imageCoordinate) === ' 바위') {
                console.log('Draw!');
            } else {
                console.log('You lose!');
            }
        } else if (myPick === '보') {
            if (computerPick(imageCoordinate) === '가위') {
                console.log('You lose!');
            } else if (computerPick(imageCoordinate) === ' 바위') {
                console.log('You win!');
            } else {
                console.log('Draw!');
            }
        }
    });
});