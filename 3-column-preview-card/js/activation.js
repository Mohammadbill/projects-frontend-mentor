const carCards = [...document.getElementsByClassName('car-category')];

castInactive = (carType) => {
    carType.classList.remove('active')
    carType.classList.add('inactive')
}

castActive = (carType) => {
    carType.classList.remove('inactive')
    carType.classList.add('active')
}

changeButtonText = (button) => {
    const currentButton = button.getElementsByTagName('button')[0];
    currentButton.innerText = (currentButton.outerText === "Learn More") ? "Go Back" : "Learn More"
}

buttonActionMakeActive = (activeCard, inactiveCards) => {
    inactiveCards.forEach(function (car) {
        castInactive(car);
    })
    changeButtonText(activeCard)
    castActive(activeCard);
}

buttonActionAlreadyActive = (activeCard) => {
    changeButtonText(activeCard);
    carCards.forEach(function (card) {
        card.classList.remove('inactive')
        card.classList.remove('active')
    })
}

activateButton = (event) => {
    const activeCard = event.path[1];
    const inactiveCards = carCards.filter(function (car) {
        return car !== activeCard
    })
    if ([...activeCard.classList].includes('active')) {
        buttonActionAlreadyActive(activeCard)
    } else {
        buttonActionMakeActive(activeCard, inactiveCards)
    }
};