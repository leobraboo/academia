window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

window.sr = ScrollReveal ({reset: true})

ScrollReveal({
	reseat : true,
	distance: '60px',
	duration: 2000,
	delay:500
});

ScrollReveal().reveal('.container' ,{delay:500 , origin:'left'} )
