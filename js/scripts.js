window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

window.sr = ScrollReveal ({reset: true})

ScrollReveal({
	reseat : true,
	distance: '600px',
	duration: 2000,
	delay:400
});

ScrollReveal().reveal('.site-heading-upper' ,{delay:200 , origin:'left'} )
ScrollReveal().reveal('.site-heading-lower' ,{delay:200 , origin:'right'} )
ScrollReveal().reveal('.navbar' ,{delay:200 , origin:'left'} )
ScrollReveal().reveal('.teste' ,{delay:200 , origin:'right'} )
ScrollReveal().reveal('.product-item' ,{delay:200 , origin:'right'} )
