document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector('body').style.height = '100vh';
    const text = 'questor';
    const logo = document.querySelector('.logo_start');
    logo.textContent = '';
    let i = 0;
    
    function typeSec() {
        if (i < text.length) {
            logo.textContent += text[i];
            i++
            setTimeout(typeSec, 300);
        } else {
            setTimeout(typeAnima, 700);
        }
    }

    typeSec();

    function typeAnima() {
        logo.classList.add('animate');
        // setTimeout(() => {
        //     document.querySelector('.sky_title').style.height = '100px';
        //     document.querySelector('.logo_start').style.top = '40%';
        // }, 3000);
        setTimeout(() => {
            document.querySelector('.boardP').classList.add('animate');
        }, 3200);
        setTimeout(() => {
            document.querySelector('.one_title').classList.add('animate');
        }, 3500);
        setTimeout(() => {
            document.querySelector('.two_title').classList.add('animate');
        }, 3800);
        setTimeout(() => {
            document.querySelector('.three_title').classList.add('animate');
        }, 4200);
        setTimeout(() => {
            document.querySelector('.four_title').classList.add('animate');
        }, 4600);
        setTimeout(() => {
            // document.querySelector('.end_title').style.display = 'block';
            document.querySelector('.fife_title').classList.add('animate');
        }, 5200);
    }
});


const bL = document.querySelector('.circleL');
const bR = document.querySelector('.circleR');
const cardSel = document.querySelector('.cardSel');
const cardWidth = 460;

bR.addEventListener('click', function() {
    cardSel.scrollBy({left: cardWidth, behavior: "smooth"});
    document.querySelector('.artL').style.opacity = '100%';
    document.querySelector('.circleR').style.cursor = 'default';
    document.querySelector('.circleL').style.cursor = 'pointer';
    document.querySelector('.artR').style.opacity = '60%';

});

bL.addEventListener('click', function() {
    cardSel.scrollBy({left: -cardWidth, behavior: "smooth"});
    document.querySelector('.artL').style.opacity = '60%';
    document.querySelector('.circleL').style.cursor = 'default';
    document.querySelector('.circleR').style.cursor = 'pointer';
    document.querySelector('.artR').style.opacity = '100%';
});


document.querySelector('.boxesCircle').addEventListener('click', function() {
    this.classList.remove('animate');
    void this.offsetHeight;
    this.classList.add('animate');
});


document.querySelectorAll('.cir_dop').forEach(btn => {
   btn.addEventListener('click', function() {
        const questBox = this.closest('.quecolB');
        const textInf = questBox.querySelector('.textInfo');

        if (textInf.style.display === 'block') {
            textInf.style.display = 'none';
            this.textContent = '+';
        } else {
            document.querySelectorAll('.textInfo').forEach(el => {
                el.style.display = 'none';
            });
            document.querySelectorAll('.cir_dop').forEach(but => {
             but.textContent = '+';
            });
            textInf.style.display = 'block';
            this.textContent = '-';
        }
   }); 
});
