const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const musica = document.querySelector('.musica')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;
        musica.src="musicas/Super Mario Bros - game over song (320 kbps).mp3"


        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'


        clearInterval(loop);
    }

},10);





document.addEventListener('keydown', jump);


