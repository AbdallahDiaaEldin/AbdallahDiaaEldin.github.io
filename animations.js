function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode")};
    document.body.style.backgroundColor = sessionStorage.getItem('bg');
    document.body.style.color = sessionStorage.getItem('cc');

function myFunction() {
     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {

            sessionStorage.setItem('bg', 'rgb(15, 14, 14)');
            sessionStorage.setItem('cc', 'rgb(175, 175, 175)');


     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(15, 14, 14)');
        sessionStorage.setItem('cc', '#777');

    }
    else if( sessionStorage.getItem('bg') === 'rgb(15, 14, 14)') {

        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');


    }

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }