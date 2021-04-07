new Swiper(".image-slider", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slideToClickedSlide: true,
  loop: true,
});

const btn = document.querySelector(".button__copy");
const text = document.querySelector(".email");
const phone = document.querySelector(".menu__phone");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
const navItem = document.querySelector(".footer__subtitle");
const navList = document.querySelector(".footer__list");
const navListDevice = document.querySelector(".footer__list-device");
const navListOffer = document.querySelector(".footer__list-offer");
const navListContact = document.querySelector(".footer__list-contact");
const itemDevice = document.querySelector(".footer__subtitle-device");
const itemOffer = document.querySelector(".footer__subtitle-offer");
const itemContact = document.querySelector(".footer__subtitle-contact");
const itemHeaderDevise = document.querySelector(".nav__item-mobile");
const navListHeader = document.querySelector(".nav__list");


function toggleList (list){
  list.classList.toggle('active');
}
navItem.addEventListener('click', () => toggleList (navList));
itemDevice.addEventListener('click', () => toggleList (navListDevice));
itemOffer.addEventListener('click', () => toggleList (navListOffer));
itemContact.addEventListener('click', () => toggleList (navListContact));
itemHeaderDevise.addEventListener('click', () => toggleList (navListHeader));

window.addEventListener('click', function (evt) { 
  if (evt.target.classList.contains('email__copy-active')) { 
      evt.target.classList.remove('email__copy-active') 
  } 
}); 
text.addEventListener('click', ()=>{
  btn.classList.add('email__copy-active');
});
phone.addEventListener('click', ()=>{
  popup.classList.add('popup_open');
});
closePopup.addEventListener('click', ()=>{
  popup.classList.remove('popup_open');
});

$('#button').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#text').text()).select();
  document.execCommand("copy");
});

