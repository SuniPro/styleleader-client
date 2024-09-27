const menuItems = document.querySelectorAll('.tab-menu__item');

let previousSelectedItem = menuItems[0];

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        previousSelectedItem?.classList.remove('tab-menu__active')
        previousSelectedItem = item;
        item.classList.add('tab-menu__active');
    })
})