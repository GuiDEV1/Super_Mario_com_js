// Essa const recebe a imagem do mario diretamente do html
const mario = document.querySelector(".mario");
// Essa const recebe a imagem dos tubos diretamente do html
const pipe = document.querySelector(".pipe");

/* 
essa é a função que faz o mario pular
toda vez q o usuário pressionar uma tecla
*/ 

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {

   mario.classList.remove("jump"); 

  }, 500);
}

const loop = setInterval(() => {
   console.log(loop);
   const pipePosition = pipe.offsetLeft; 
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   console.log(marioPosition);
   
   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './imagens/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
    mario.style.marginBottom = '5px';
   
    clearInterval(loop);

   }

}, 10)

// Esse comando gera a saida da animação, e declara o evento.
document.addEventListener("keydown", jump);