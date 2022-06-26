var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
ll = selElmnt.length;
/*for each element, create a new DIV that will act as the selected item:*/
a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);
/*for each element, create a new DIV that will contain the option list:*/
b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < ll; j++) {
/*for each option in the original select element,
create a new DIV that will act as an option item:*/
c = document.createElement("DIV");
c.innerHTML = selElmnt.options[j].innerHTML;
c.addEventListener("click", function (e) {
/*when an item is clicked, update the original select box,
and the selected item:*/
var y, i, k, s, h, sl, yl;
s = this.parentNode.parentNode.getElementsByTagName("select")[0];
sl = s.length;
h = this.parentNode.previousSibling;
for (i = 0; i < sl; i++) {
if (s.options[i].innerHTML == this.innerHTML) {
s.selectedIndex = i;
h.innerHTML = this.innerHTML;
y = this.parentNode.getElementsByClassName("same-as-selected");
yl = y.length;
for (k = 0; k < yl; k++) {
y[k].removeAttribute("class");
}
this.setAttribute("class", "same-as-selected");
break;
}
}
h.click();
});
b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function (e) {
/*when the select box is clicked, close any other select boxes,
and open/close the current select box:*/
e.stopPropagation();
closeAllSelect(this);
this.nextSibling.classList.toggle("select-hide");
this.classList.toggle("select-arrow-active");
});
}

function closeAllSelect(elmnt) {
/*a function that will close all select boxes in the document,
except the current select box:*/
var x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
elmnt == y[i] ? arrNo.push(i) : y[i].classList.remove("select-arrow-active");
}
for (i = 0; i < xl; i++) {
if (arrNo.indexOf(i)) {
x[i].classList.add("select-hide");
}
}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


$(document).ready(function () {
$('.selection').click(function () {
$(this).parent().find('.selection').removeClass('selected');
$(this).addClass('selected');
var val = $(this).attr('data-value');
$(this).parent().find('input').val(val);
});
// DATEPICKER
$('.datepicker-input').datepicker({
format: "dd/mm/yyyy",
language: "es"
});
/*** GUARDAR CONF ***/
var email = $('#emailCotizacion');
$('#emailCotizacion').hide();
$('#enviarMail').hide();
$('#exito-cotiza').hide();

$('#guardarData').click(function (e) {
$(this).hide();
$('#emailCotizacion').show().val('');
$('#enviarMail').css({
'padding': '0',
'position': 'relative',
'right': '40px',
'top': '7px',
'z-index': '10',
'background-color': 'transparent'
}).show();
$('.exito-cotiza').hide();
e.preventDefault();
});

/*** VALIDAR EMAIL ***/
$('#enviarMail').click(function () {
let mail = $('#emailCotizacion').val();
if (IsEmail(mail) == false || IsEmail(mail) == '') {
$('#emailCotizacion').css('border', '1px solid red');
return false;
} else {
$("#enviarMail").css({
'padding': '0',
'background-color': 'transparent',
'transition': 'all 1s ease-out',
'position': 'absolute',
'right': '-60px',
'top': '-40px'
}).fadeOut(1000);
$('#emailCotizacion').hide();
$('.ficha-mail').append('<span id="exito-cotiza" class="exito-cotiza"><img src="img/sura-icon-check-ok-mail.svg" />¡COTIZACIÓN ENVIADA CON ÉXITO!</span>');
}
});


// Reestablecer Configuracion
$('#reestablecer').click(function (e) {
if ($('#emailCotizacion, #enviarMail, #guardarData').hide()) {
$('#guardarData').show();
$('#exito-cotiza').remove();
}
e.preventDefault();
});

function IsEmail(email) {
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (!regex.test(email)) {
return false;
}
}
// Select Ciclos
$('.box-ciclos-icons-item').click(function () {
if (!$(this).hasClass('active')) {
$('.box-ciclos-icons-item.active').removeClass('active');
$(this).addClass('active');
$('.container-ciclos').fadeIn('slow').css('display', 'block');
} else {
$(this).removeClass('active');
$('.container-ciclos').css('display', 'none').fadeOut('slow');
}
});
// TOOLTIP
$('a[data-toggle="tooltip"], .tool[data-toggle="tooltip"]  ').tooltip({
animated: 'fade',
placement: 'top',
html: true
});
});

function toggleCheck(){
document.querySelector('.asistencias-detalle').classList.toggle('active');
}

