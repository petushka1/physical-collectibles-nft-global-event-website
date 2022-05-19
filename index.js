// Mobile menuList
const hmbrg = document.getElementById('hmbrg');
const mobMenu = document.querySelector('.menuList');
const menuDesktop = document.querySelector('.menuListDesktop');
const close = document.getElementById('close');
const logo = document.getElementById('logo');
const topMenuDesktop = document.querySelector('.menuTop');
const topMenuMob = document.querySelector('.topMob');

const home = document.getElementById('homeLink');
const about = document.getElementById('aboutLink');
const footer = document.getElementById('footer');
const partners = document.getElementById('partners');
const aboutPage = document.getElementById('about');

const logoWhite = document.querySelector('#footer img');

showFooter();
colorFooter();
window.addEventListener('resize', showFooter);
window.addEventListener('resize', colorFooter);

function showFooter() {
  if (window.innerWidth >= 768) {
    footer.style.display = 'flex';
    partners.style.display = 'block';
    menuDesktop.style.display = 'flex';
    topMenuDesktop.style.display = 'block';
    if (document.body.contains(document.getElementById('about'))) {
      partners.style.display = 'none';
    }
  }
  else {
    footer.style.display = 'none';
    partners.style.display = 'none';
    menuDesktop.style.display = 'none';
    topMenuDesktop.style.display = 'none';
    if (document.body.contains(document.getElementById('about'))) {
      partners.style.display = 'block';
      footer.style.display = 'flex';
    }
  }
}

close.addEventListener('click', closeMenu);
hmbrg.addEventListener('click', openMenu);
home.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);

home.href = '#home';
about.href = 'about.html';

function openMenu() {
  mobMenu.style.display = 'flex';
  topMenuMob.style.display = 'block';
}

function closeMenu() {
  mobMenu.style.display = 'none';
  topMenuMob.style.display = 'none';
}

function colorFooter() {
  if (window.innerWidth >= 768) {
    footer.style.color = '#fff';
    footer.parentNode.style.backgroundColor = '#272a31';
    logoWhite.src = 'img/logoWhite.svg';
  }
  else {
    footer.parentNode.style.backgroundColor = 'inherit';
    footer.style.color = 'inherit';
    logoWhite.src = 'img/logo.svg';
  }
}
