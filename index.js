// Mobile menuList
const hmbrg = document.getElementById('hmbrg');
const menuItems = document.querySelector('.menuList');
const close = document.getElementById('close');
const home = document.getElementById('homeLink');
const about = document.getElementById('aboutLink');
const footer = document.createElement('div');

footer.className = 'footerWrapper'
document.querySelector('body').appendChild(footer);

  footer.innerHTML = (`<section class="partner" id="partners">
                        <h3 class="marginTopBottom bold">Partners</h3>
                        <p class="line"></p>
                        <div class="partnerWrapper sideMargin">
                          <img src="img/cb.png" alt="">
                          <img src="img/cc.png" alt="">
                          <img src="img/forbes.png" alt="">
                          <img src="img/cardano.png" alt="">
                          <img src="img/ripple.png" alt="">
                        </div>
                      </section>
                      <footer id="footer" class="marginBig marginTopBottom">
                        <img src="img/logo.svg" alt="">
                        <div class="">
                          <p>NFR Global Event USA
                          <br>Some Rights Reserved</p>
                        </div>
                      </footer>`);

window.addEventListener('resize', showFooter);


function showFooter() {
  if (window.innerWidth >= 768) {
    footer.style.display = 'block';
  }
  else {
    footer.style.display = 'none';
  }
}

close.addEventListener('click', closeMenu);
hmbrg.addEventListener('click', openMenu);
home.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);

home.href = '#home';
about.href = 'about.html';

function openMenu() {
    menuItems.style.display = 'block';
}

function closeMenu() {
  menuItems.style.display = 'none';
}
