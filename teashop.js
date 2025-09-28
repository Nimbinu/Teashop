let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
let searchForm= document.querySelector('.search-form');

document.querySelector(#search-btn).onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
let searchForm= document.querySelector('.cart-items-container');

document.querySelector(#cart-btn).onclick = () =>{
    cartItem.classlist.toggle('active');
    navbar.classlist.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classlist.remove('active');
    searchForm.classList.remove('active');
    cartItem.classlist.toggle('active');
}
