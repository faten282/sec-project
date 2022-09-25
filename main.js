const menu =document.querySelector('#nav .nav-icon');
const navcont = document.querySelector('#nav-content');
const navLinks = document.querySelectorAll('#nav-content ul li a');
const scrollup = document.querySelector('.scroll-top');
menu.addEventListener('click',()=> {
    navcont.classList.add('show');
    document.body.style.overflow="hidden";
});

const closenav = document.querySelector('#nav-content .close-btn');
closenav.addEventListener('click' , ()=>{
navcont.classList.remove('show');document.body.style.overflow="initial";

});
navLinks.forEach(link => {
link.addEventListener('click' , () =>{ 
navcont.classList.remove('show');
document.body.style.overflow="initial";

})
})

if(scrollup){
window.addEventListener('scroll' , ()=>{
if(pageYOffset >(window.innerHeight*1.2)){

   scrollup.style.display='flex'; 

}
else{
    scrollup.style.display='none';   
}

})
scrollup.addEventListener('click' , ()=> {
window.scrollTo(0,0);
})
}

