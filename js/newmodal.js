window.onload = () => {

    const popup_btns = document.querySelectorAll('.popup-button');
    console.log(popup_btns);

    popup_btns.forEach(button => {
        button.addEventListener('click', e => {
            const target = e.target.dataset.target;
            console.log(target);
            let popup_el = document.querySelector(target);
            console.log(popup_el);
            if(popup_el != null){
                popup_el.classList.toggle('is-open');
            } else if (popup_el = 'is-open'){
                popup_el.classList.remove('is-open');
            }
        });

    });


}