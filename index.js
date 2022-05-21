const hmbrg = document.getElementById('hmbrg');
const close = document.getElementById('close');
const logo = document.getElementById('logo');
const about = document.getElementById('aboutLink');
const home = document.getElementById('homeLink');

const mobMenu = document.querySelector('.menuList');
const menuDesktop = document.querySelector('.menuListDesktop');
const topMenuDesktop = document.querySelector('.menuTop');
const topMenuMob = document.querySelector('.topMob');

const page = document.querySelector('.page');
const aboutPage = document.getElementById('about');
const footer = document.getElementById('footer');
const partners = document.getElementById('partners');
const logoWhite = document.querySelector('#footer img');

showFooter();
colorFooter();

if (page.id === 'about' && window.innerWidth >= 768) {
  about.style.display = 'none';
  home.style.display = 'block';
}
else if (page.id === 'home' && window.innerWidth >= 768) {
  about.style.display = 'block';
  home.style.display = 'none';
}

window.addEventListener('resize', showFooter);
window.addEventListener('resize', colorFooter);

close.addEventListener('click', closeMenu);
hmbrg.addEventListener('click', openMenu);
home.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);

/* Show/Hide participants */
if (page.id === 'home' && window.innerWidth < 768) {
  const seeMore = document.getElementById('more');
  const seeLess = document.getElementById('less');
  window.addEventListener('resize', showParticipants);
  seeMore.addEventListener('click', showMore);
  seeLess.addEventListener('click', showLess);
  seeLess.style.display = 'none';
  showParticipants();
}

/* Dynamic Participants Section */
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
    name: 'Vitalik Buterin',
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
    image: 'img/photo4.png',
    alt: 'Nike',
    name: 'John Donahoe',
    position: 'CEO of Nike and American businessman',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo5.png',
    alt: 'Saachi',
    name: 'Kevin Roberts',
    position: 'Former executive chairman of Saatchi & Saatchi and speaker',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
  {
    image: 'img/photo6.png',
    alt: 'Open Sea',
    name: 'Devin Finzer',
    position: 'Co-founder and CEO at OpenSea ',
    info: 'Mauris ut mauris fringilla, placerat dolor id, condimentum urna. Duis interdum arcu ut consectetur porttitor.'
  },
];

const cardsSection = document.querySelector('.gridParticipants');
var cardElement = '';
var cardElementHidden = '';
for (let i = 0; i < cardsArr.length; i++) {
  if (i <= 1) {
    cardElement +=
    `<div class="card ${i > 1 ? "unseen" : ""}">
      <div class="border">
        <img src=${cardsArr[i].image} alt=${cardsArr[i].altText}>
      </div>
      <div class="descriptionWrapper">
        <h3 class="bold marginTop">${cardsArr[i].name}</h3>
        <p class="description marginTop">${cardsArr[i].position}</p>
        <p class="lineGray"></p>
        <p class="update">${cardsArr[i].info}</p>
      </div>
      </div>`;
  }
  else {
    cardElementHidden +=
    `<div class="card ${i > 1 ? "unseen" : ""}">
      <div class="border">
        <img src=${cardsArr[i].image} alt=${cardsArr[i].altText}>
      </div>
      <div class="descriptionWrapper">
        <h3 class="bold marginTop">${cardsArr[i].name}</h3>
        <p class="description marginTop">${cardsArr[i].position}</p>
        <p class="lineGray"></p>
        <p class="update">${cardsArr[i].info}</p>
      </div>
      </div>`;
    }
  }

function showParticipants() {
  if (window.innerWidth >= 768) {
    cardsSection.innerHTML = cardElement.concat(cardElementHidden);
  }
  else {
    cardsSection.innerHTML = cardElement;
  }
}

function showMore() {
  cardsSection.innerHTML = cardElement.concat(cardElementHidden);
  seeMore.style.display = 'none';
  seeLess.style.display = 'block';
}

function showLess() {
  cardsSection.innerHTML = cardElement;
  seeMore.style.display = 'block';
  seeLess.style.display = 'none';
}

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
  if (window.innerWidth < 768) {
    mobMenu.style.display = 'none';
    topMenuMob.style.display = 'none';
  }
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
