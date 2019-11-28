const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

// Pierwsza funkcja
function handSelection() {

    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
}

// const handSelection = (e) => {
//  // this - nie tworzy
//  console.log(e.target);
//  console.log(e.currentTarget);
// }

hands.forEach(hand => hand.addEventListener('click', handSelection))