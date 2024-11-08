

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const hamburgerDropDownContent = document.querySelector('.hamburger-dropdown-content');
const dropDownLinkList = document.querySelector('.dropdown-link-list');

hamburgerMenuButton.addEventListener('click', () => {
    if (hamburgerDropDownContent.classList.contains('openMenu')) {
        hamburgerDropDownContent.classList.remove('openMenu');
    }
    else {
        hamburgerDropDownContent.classList.add('openMenu');
   }
})