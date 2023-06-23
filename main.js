const header = document.querySelector("header");

const stickHeader = () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", stickHeader);

const menu = document.querySelector(".menu");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      113;

    menu.classList.remove("active");
    burgerBtn.classList.remove("active");

    window.scrollTo({ top: section, behavior: "smooth" });
  })
);
/*

onClick="validation(), submitForms()" - put in button
function validation()
{
 var checkbox = document.getElementById("accept");
 if (!checkbox.checked){
  document.getElementById("error").innerHTML = "You must accept the terms and conditions by checking the Checkbox";
  return false;
 }
 document.getElementById("error").innerHTML = "Thanks....";
 return true;
}

submitForms = function(){
  document.getElementById("contact-form").submit();
  document.getElementById("contact-form-consent").submit();
};*/

