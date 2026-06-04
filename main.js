document.querySelectorAll('.up_num').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();

        const numBox = this.closest('.num_box');

        numBox.classList.toggle('van');
    });
});