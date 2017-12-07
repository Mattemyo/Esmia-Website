





// Footer
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!

var arrMonth = [ 'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug','Sep', 'Okt','Nov', 'Dec'
];

var yyyy = today.getFullYear();

if(dd<10){
    dd='0'+dd;
} 

var today = yyyy + ' '+ arrMonth[mm] +' '+dd;





document.getElementById('date').innerHTML= today;
/* Produkter */

$(document).ready(function () {
    $(document).on('pageinit', '[data-role="page"]', function () {
        $(this).children('[data-role="content"]').append('<div class="my-nav-bar">...</div>');
    });
});
