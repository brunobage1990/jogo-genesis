let order = [];
let clickedOrder = [];
let score = 0;

// 0 == verde
// 1 == vermelho
// 2 == amarelo
// 3 == azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order(order.length) = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order(i));
        lightColor(elementColor, Number((i)-1));
    }
}
//acende a proxima cor
let lightColor = (element,number) => {
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected');
    },number-250);
    setTimeout(()=>{
        element.classList.remove('selected');
    })
}
//cheva se os botoes clicados são os mesmo da ordem gerada no jogo
let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert('Pontuação: $(score)\nVocê acertou! Iniciando próximo nivel!');
        nextLevel();
    }
}
//função para o clique de usuarios
let click = (color) => {
    clickedOrder(clickOrder.length) = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
       createColorElement(color).classList.remove('selected');
       checkOrder();
    },250)

    checkOrder();
}

// função que referente a cor
let createColorElement = (color) => {
    if(color ==0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }
}
// função que referente para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}
// função que referente para fim do jogo
let gameOver = () => {
    alert('Pontuação: $(score)\n Você perdeu o jogo\nClique em Ok para iniciar um novo jogo');
    order = [];
    clickedOrder  = [];

    playGame();
}

let playGame = () => {
    alert('Bem-vindo ao Gênesis! Iniciando novo jogo!')
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();