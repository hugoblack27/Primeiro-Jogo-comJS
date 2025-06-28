const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const retornar = document.querySelector('.return')
const musica = document.querySelector('.source')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500);
}

mario.style.marginLeft = '0px'

const loop = setInterval(() => {
    
    retornar.style.display = "none"
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        retornar.style.display = "block"
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = '/mario-jump-images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        musica.src = '/mario-jump-images/Super Mario Bros - game over song.mp3'
    }

}, 10);

retornar.onclick = () => {
    location.reload();
}

document.addEventListener( "click", jump)
document.addEventListener( "touchstart", jump)
document.addEventListener( "keypress", jump)