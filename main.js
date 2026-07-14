document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(() => {
        document.querySelector('.one_title').classList.add('animate');
    }, 1100);
    setTimeout(() => {
        document.querySelector('.two_title').classList.add('animate');
    }, 1800);
    // setTimeout(() => {
    //     document.querySelector('.three_title').classList.add('animate');
    // }, 2200);
        setTimeout(() => {
        document.querySelector('.four_title').classList.add('animate');
    }, 2200);
    setTimeout(() => {
        document.querySelector('.fife_title').classList.add('animate');
    }, 2200);
    setTimeout(() => {
        document.querySelector('.end_title').classList.add('animate');
    }, 2200);
});

// const img = document.querySelector(".imgHum");
// const oldSrc = 'mar.png';
// const newSrc = 'mar1.png';

// img.addEventListener('mouseenter', () => {
//     img.src = 'mar1.png';
// });

// img.addEventListener('mouseleave', () => {
//     img.src = 'mar.png';
// });


// document.querySelector('.boxesCircle').addEventListener('click', function() {
//     this.classList.remove('animate');
//     void this.offsetHeight;
//     this.classList.add('animate');
// });


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


// window.addEventListener("scroll", function() {
//     const el = document.querySelector('.add_title');
//     const elTop = el.offsetTop;
//     const board = document.querySelector('.sky_box');

//     if (window.scrollY >= elTop) {
//         board.style.position = 'fixed';
//         if (!board.classList.contains('animatest')) {
//             board.classList.remove('animateOut');
//             board.classList.add('animatest');
//         }
//     } else {
//         if (board.classList.contains('animatest')) {
//             board.classList.remove('animatest');
//             board.classList.add('animateOut');
//             setTimeout(() => {
//                 board.style.position = 'relative';
//                 board.classList.remove('animateOut');
//             }, 400);
//         }
//     }
// });