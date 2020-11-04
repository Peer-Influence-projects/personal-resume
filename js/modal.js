const portfolioContainer = document.querySelectorAll('.home-profile-item');
let modal;
// console.log(portfolioContainer);

function handleEvent (e){
    e.preventDefault();
    e.stopPropagation();
    const modalLink = e.target;
    const modalToggle = modalLink.closest('.input-menu');
   
    console.dir(modalToggle);

    if(!modalToggle) return;
    let modal = modalToggle.parentNode.nextElementSibling;
    console.log(modal);
    modal.classList.toggle('is-open');

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
            modal.classList.remove('is-open');
        
    });
   };

portfolioContainer.forEach(link => link.addEventListener('click', handleEvent));



