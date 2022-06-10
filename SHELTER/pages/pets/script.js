
console.log('hi');
 let blacklayer = document.querySelector('.blacklayer');


const navSlide = () => {
    const burger = document.querySelector('.collapse_nav');
    const nav = document.querySelector('.nav__ul');
    const navLinks = document.querySelectorAll('.nav__ul li');
    const body = document.querySelector('.body');
    // const collapse_logo = document.querySelector('.collapse_logo');

    

    burger.addEventListener('click', () => {

    // toggle nav
        nav.classList.toggle('nav-active');
        blacklayer.style.opacity = 1;
      blacklayer.style.pointerEvents = 'unset';

    // animate links

        navLinks.forEach((link, index) => {
           if (link.style.animation) {
            link.style.animation = '';
           } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
           }
        });

        // burger animation
        burger.classList.toggle('toggle');
        // body.classList.toggle('block');
        // collapse_logo.classList.toggle('toggle');
        blacklayer.classList.toggle('toggle');

    });

    blacklayer.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    // collapse_logo.classList.toggle('toggle');
        blacklayer.classList.toggle('toggle');
    
  });

}


navSlide();