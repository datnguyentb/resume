const avatar = document.querySelector('#slide-bar .avatar img')
const width = avatar.offsetWidth;
const height = avatar.offsetHeight;

if(width > height) {
    avatar.classList.add('height');
} else {
    avatar.classList.add('width');
}