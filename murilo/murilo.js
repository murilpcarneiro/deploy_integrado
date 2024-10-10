const body = document.querySelector('body');
const header = document.querySelector('header');
const navegador = document.getElementById('icone_nav');
const link_navbar1 = document.getElementsByClassName('link_navbar')[0];
const link_navbar2 = document.getElementsByClassName('link_navbar')[1];
const link_navbar3 = document.getElementsByClassName('link_navbar')[2];
const h3 = document.querySelectorAll('h3');
const p = document.querySelectorAll('p');
h3[1].classList.add('darkmode');
h3[2].classList.add('darkmode');
h3[3].classList.add('darkmode');
h3[4].classList.add('darkmode');
h3[5].classList.add('darkmode');

p[1].classList.add('darkmode');
p[2].classList.add('darkmode');
p[3].classList.add('darkmode');
p[4].classList.add('darkmode');

link_navbar1.classList.add('darkmode');
link_navbar2.classList.add('darkmode');
link_navbar3.classList.add('darkmode');

function mudarTema() {
  if (body.classList.contains('darkmode')) {
    body.classList.remove('darkmode');
    body.classList.add('lightmode');
    body.style.color = '#000';
  }
  else {
    body.classList.remove('lightmode');
    body.classList.add('darkmode');
    body.style.color = '#fff';
  }
  if (header.classList.contains('darkmode')) {
    header.classList.remove('darkmode');
    header.style.borderBottom = '1px solid #000';
    header.classList.add('lightmode');
  }
  else {
    header.classList.remove('lightmode');
    header.style.borderBottom = '1px solid #fff';
    header.classList.add('darkmode');
  }
  if (navegador.classList.contains('darkmode')) {
    navegador.classList.remove('darkmode');
    navegador.classList.add('lightmode');
  }
  else {
    navegador.classList.remove('lightmode');
    navegador.classList.add('darkmode');
  }
  if (link_navbar1.classList.contains('darkmode')) {
    link_navbar1.classList.remove('darkmode');
    link_navbar1.classList.add('lightmode');
  }
  else {
    link_navbar1.classList.remove('lightmode');
    link_navbar1.classList.add('darkmode');
  }
  if (link_navbar2.classList.contains('darkmode')) {
    link_navbar2.classList.remove('darkmode');
    link_navbar2.classList.add('lightmode');
  }
  else {
    link_navbar2.classList.remove('lightmode');
    link_navbar2.classList.add('darkmode');
  }
  if (link_navbar3.classList.contains('darkmode')) {
    link_navbar3.classList.remove('darkmode');
    link_navbar3.classList.add('lightmode');
  }
  else {
    link_navbar3.classList.remove('lightmode');
    link_navbar3.classList.add('darkmode');
  }
  if (h3.classList.contains('darkmode')) {
    h3.classList.remove('darkmode');
    h3.classList.add('lightmode');
  }
  else {
    h3.classList.remove('lightmode');
    h3.classList.add('darkmode');
  }
  if (p[1].classList.contains('darkmode')) {
    p[1].classList.remove('darkmode');
    p[1].classList.add('lightmode');
  }
  else {
    p[1].classList.remove('lightmode');
    p[1].classList.add('darkmode');
  }
  if (p[2].classList.contains('darkmode')) {
    p[2].classList.remove('darkmode');
    p[2].classList.add('lightmode');
  }
  else {
    p[2].classList.remove('lightmode');
    p[2].classList.add('darkmode');
  }
  if (p[3].classList.contains('darkmode')) {
    p[3].classList.remove('darkmode');
    p[3].classList.add('lightmode');
  }
  else {
    p[3].classList.remove('lightmode');
    p[3].classList.add('darkmode');
  }
  if (p[4].classList.contains('darkmode')) {
    p[4].classList.remove('darkmode');
    p[4].classList.add('lightmode');
  }
  else {
    p[4].classList.remove('lightmode');
    p[4].classList.add('darkmode');
  }

}