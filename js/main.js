let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function (){
    //Notices when there is a click
    mainNav.classList.toggle('active');
});