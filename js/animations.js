const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerHTML = i + '+';
        } else {
            element.innerHTML = i;
        }

        i += 100;

        setTimeout(function () {
            increaseNumberAnimationStep(i, element, endNumber)
        }, INCREASE_NUMBER_ANIMATION_SPEED);
        // не понял как работает, ща решать будем
        // гпт пояснил
    }
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000)
}

initIncreaseNumberAnimation()