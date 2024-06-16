var menu_items = document.querySelectorAll('#content .header .item')

menu_items.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        for(var i = 0; i < menu_items.length; i++) {
            if(i!=index && menu_items[i].classList.contains('active')) {
                menu_items[i].classList.remove('active')
            }
        }
    })
})
