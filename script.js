let menuBtn=document.querySelector("#menu-btn");
let navbar=document.querySelector(".navbar");

menuBtn.addEventListener("click",function(){
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");

});

window.addEventListener("scroll",function(){
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");

});

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick=()=>{
        var src=images.getAttribute('src');
        document.querySelector('.main-home-image').src=src;

    }
})
////////////////////////////////////////////////////////////////////

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject=document.getElementById("subject");
const textarea=document.getElementById("textarea");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
    
 
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const subjectValue=subject.value.trim();
  const textareaValue=textarea.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'name cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if( subjectValue=== '') {
		setErrorFor(subject, 'subject cannot be blank');
	} else {
		setSuccessFor(subject);
	}
	
  if( textareaValue=== '') {
		setErrorFor(textarea, 'message cannot be blank');
	} else {
		setSuccessFor(textarea);
	
}}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
    
}
 

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}











///////////////////////////////////////////////////

var slideIndex = 1,
    interval;

function stopAndStart() {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval(showSlides, 4000); // Change image every 4 seconds;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    stopAndStart()
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    stopAndStart()
}

function showSlides(n) {
    var i,
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");

    if (n === undefined) {
        n = ++slideIndex;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

stopAndStart();
