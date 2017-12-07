var title = document.querySelector('title');
// console.log(title.innerHTML);









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
$(function () {
    var $a = $('a');
    console.log(title.innerHTML);
    
    for (var i = 0; i < $a.length; i++) {
       if(title.innerHTML === $a[i].innerHTML){
           $a[i].classList.add('active');
       }
    }

});
