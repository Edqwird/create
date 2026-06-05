document.querySelectorAll('.up_num').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();

        const numBox = this.closest('.num_box');

        const numQuestion = numBox.querySelector('.num_question');
        
        if (numBox.classList.contains('van')) {
            numQuestion.textContent = numQuestion.textContent.replace(' Задание', '');
        } else {
            if (!numQuestion.textContent.includes('задание')) {
                numQuestion.textContent = numQuestion.textContent + ' Задание';
            }
        }

        numBox.classList.toggle('van');
    });
});



document.querySelectorAll('#tk_q').forEach(el => {
    if (el.textContent.includes('Редактировать')) {
        el.addEventListener('click', () => {
            document.querySelector('.ege_pr').style.display = 'flex';
            document.querySelector('.dow_form').style.display = 'flex';
            el.style.backgroundColor = 'rgb(240, 240, 240)';
        });
    }
});