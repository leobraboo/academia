window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

window.sr = ScrollReveal ({reset: true})

ScrollReveal({
	reseat : true,
	distance: '60px',
	duration: 2000,
	delay:400
});

ScrollReveal().reveal('.site-heading-upper' ,{delay:300 , origin:'left'} )
ScrollReveal().reveal('.site-heading-lower' ,{delay:300 , origin:'right'} )
ScrollReveal().reveal('.navbar' ,{delay:300 , origin:'left'} )
ScrollReveal().reveal('.' ,{delay:300 , origin:'right'} )
ScrollReveal().reveal('.row' ,{delay:300 , origin:'left'} )
ScrollReveal().reveal('.footer' ,{delay:300 , origin:'right'} )
