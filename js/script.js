
main = function getFocus(){
	var main = document.getElementById("main");
	var about= document.getElementById("about");
	var contact= document.getElementById("contact");
	var work= document.getElementById("work");
	about.style.transition = "all 1s ease-in-out";
	about.style.transform = "translateX(0%)";
	about.style.marginLeft= "60%";
	contact.style.transition = "all 1s ease-in-out";
	contact.style.marginLeft = "70%";
	work.style.transition = "all 1s ease-in-out";
	work.style.marginLeft = "80%";
	contact.classList.add("change");
	main.style.transition = "all 1s ease-in-out";
	main.style.width= "60%";
}

about = function getFocus(){
	var main = document.getElementById("main");
	var about= document.getElementById("about");
	var contact= document.getElementById("contact");
	var work= document.getElementById("work");
	about.style.transition = "all 1s ease-in-out";
	about.style.transform = "translateX(0%)";
	about.style.marginLeft= "8%";
	contact.style.transition = "all 1s ease-in-out";
	contact.style.marginLeft = "80%";
	work.style.transition = "all 1s ease-in-out";
	work.style.marginLeft = "90%";
	contact.classList.add("change");
	main.style.transition = "all 1s ease-in-out";
}

contact = function getFocus(){
	var contact= document.getElementById("contact");
	var main = document.getElementById("main");
	var work= document.getElementById("work");
	var about= document.getElementById("about");
	about.style.transition = "all 1s ease-in-out";
	about.style.marginLeft= "8%";
	contact.style.transition = "all 1s ease-in-out";
	contact.style.transform = "translateX(0%)";
	contact.style.marginLeft= "18%";
	work.style.transition = "all 1s ease-in-out";
	work.style.transform = "translateX(0%)";
	work.style.marginLeft = "90%";
}

work = function getFocus(){
	//document.getElementById("work").focus();
	var work= document.getElementById("work");
	var main = document.getElementById("main");
	work.style.transition = "all 2s ease-in-out";
	work.style.transform = "translateX(0%)";
	work.style.marginLeft = "0px";
}

mainSmall = function getFocus(){
	var main = document.getElementById("main");
	var about= document.getElementById("about");
	var contact= document.getElementById("contact");
	var work= document.getElementById("work");
	about.style.transition = "all 1s ease-in-out";
	about.style.transform = "translateX(0%)";
	about.style.marginTop= "60vh";
	contact.style.transition = "all 1s ease-in-out";
	contact.style.marginTop = "70vh";
	work.style.transition = "all 1s ease-in-out";
	work.style.marginTop = "80vh";
	contact.classList.add("change");
	main.style.transition = "all 1s ease-in-out";
	main.style.height= "60vh";
}

aboutSmall = function getFocus(){
	var main = document.getElementById("main");
	var about= document.getElementById("about");
	var contact= document.getElementById("contact");
	var work= document.getElementById("work");
	about.style.transition = "all 1s ease-in-out";
	about.style.transform = "translateY(0%)";
	about.style.marginTop= "8vh";
	about.style.height = "72vh";
	contact.style.transition = "all 1s ease-in-out";
	contact.style.marginTop = "80vh";
	work.style.transition = "all 1s ease-in-out";
	work.style.marginTop = "90vh";
	main.style.transition = "all 1s ease-in-out";
}

contactSmall = function getFocus(){
	var contact= document.getElementById("contact");
	var main = document.getElementById("main");
	var work= document.getElementById("work");
	var about= document.getElementById("about");
	about.style.transition = "all 1s ease-in-out";
	about.style.marginTop= "8vh";
	contact.style.transition = "all 1s ease-in-out";
	contact.style.transform = "translateY(0%)";
	contact.style.marginTop= "18vh";
	contact.style.height = "72vh";
	work.style.transition = "all 1s ease-in-out";
	work.style.transform = "translateY(0%)";
	work.style.marginTop = "90vh";

}

workSmall = function getFocus(){
	var work= document.getElementById("work");
	var main = document.getElementById("main");
	work.style.transition = "all 2s ease-in-out";
	work.style.transform = "translateY(0%)";
	work.style.marginTop = "0vh";
	work.style.height = "100vh";
}


 var x = window.matchMedia("(min-width: 300px) and (max-width: 425px)");

function select(){
	if(x.matches){
		aboutSmall();
	}
	else{
		about();
	}
}

Object.defineProperty(window, 'mobile', {
  get() {
    return window.innerWidth <= 425;
  }
})

function mainFunction() {
  if (mobile) {
    mainSmall();
  } else {
    main();
  }
}

function aboutFunction() {
  if (mobile) {
    aboutSmall();
  } else {
    about();
  }
}

function contactFunction() {
  if (mobile) {
    contactSmall();
  } else {
    contact();
  }
}

function workFunction() {
  if (mobile) {
    workSmall();
  } else {
    work();
  }
}