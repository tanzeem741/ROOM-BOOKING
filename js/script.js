const tabItems = document.querySelectorAll('.tab__item');
const tabContents = document.querySelectorAll('.tab__content__item');

//function select tab content
function selectItem(e) {
    removeActive();
    removeShow();
    //adding active class to current tab
    this.classList.add('tab__active');
    //grab the tab content
    const tabContentItem = document.querySelector(`#${this.id}-item`);
    //adding show class to current tab
    tabContentItem.classList.add('show');
}

function removeActive() {
    tabItems.forEach(item => item.classList.remove('tab__active'));
}
function removeShow() {
    tabContents.forEach(item => item.classList.remove('show'));
}
//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));