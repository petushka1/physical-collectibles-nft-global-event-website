// Mobile Menu and Layout
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

close.addEventListener('click', closeMenu);
hmbrg.addEventListener('click', openMenu);
home.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);

home.href = '#home';
about.href = 'about.html';

/* Dynamic Section */
const cardsArr = [
  {
    image: 'img/photo1.png',
    alt: 'XRP',
    name: 'Brad Garlinghouse',
    position: 'CEO of financial technology company Ripple Labs',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo2.png',
    alt: 'Ethereum',
    name: 'Vitalik" Buterin',
    position: 'Co-founders of Ethereum. Canadian programmer and writer',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo3.png',
    alt: 'Trust Wallet',
    name: 'Viktor Radchenko',
    position: 'founder and CEO of Trust Wallet',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo1.png',
    alt: 'First Speaker',
    name: 'Brad Garlinghouse ',
    position: 'CEO of financial technology company Ripple Labs',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo1.png',
    alt: 'First Speaker',
    name: 'Brad Garlinghouse ',
    position: 'CEO of financial technology company Ripple Labs',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo1.png',
    alt: 'First Speaker',
    name: 'Brad Garlinghouse ',
    position: 'CEO of financial technology company Ripple Labs',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
];

const cardsSection = document.querySelector('.gridParticipants');
var cardElement = '';


function createCard(arr) {
for (let i = 0; i < arr.length; i++) {
cardElement +=
`<div class="card">
  <div class="border">
    <img src=${arr[i].image} alt=${arr[i].altText}>
  </div>
  <div class="descriptionWrapper">
    <h3 class="bold marginTop">${arr[i].name}</h3>
    <p class="description marginTop">${arr[i].position}</p>
    <p class="lineGray"></p>
    <p class="update">${arr[i].info}</p>
  </div>
  </div>`;
  }
  cardsSection.innerHTML = cardElement;
}
createCard(cardsArr);

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
