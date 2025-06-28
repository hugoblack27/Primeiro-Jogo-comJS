const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const retornar = document.querySelector('.return');
const pause = document.querySelector('.source');
const pause2 = document.querySelector('.source2');

let jogoativo = true;
let pontuacao = 0;
let pontomarcado = false;

const pontuacaoscore = document.getElementById('pontuacao');

function aumentarPontuacao() {
    if (!jogoativo) return;
    pontuacao += 10;
    pontuacaoscore.textContent = pontuacao;
}

const jump = () => {
    if (!jogoativo) return;

    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

pause2.pause();
mario.style.marginLeft = '0px';

const loop = setInterval(() => {
    retornar.style.display = "none";
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Detecta colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        retornar.style.display = "block";

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${pipePosition}px`;

        mario.src = '/mario-jump-images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        jogoativo = false;

        pause.currentTime = 0;
        pause.pause();
        pause2.play();
    }

    
    if (pipePosition < 0 && !pontomarcado && jogoativo) {
        aumentarPontuacao();
        pontomarcado = true;
    }

    
    if (pipePosition > 120) {
        pontomarcado = false;
    }

}, 10);

retornar.onclick = () => location.reload();

document.addEventListener("click", jump);
document.addEventListener("touchstart", jump);
document.addEventListener("keypress", jump);
