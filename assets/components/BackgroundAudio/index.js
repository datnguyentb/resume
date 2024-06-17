const control_audio = document.querySelector('.control-background-audio')
const audio = document.getElementById('background-audio')

control_audio.addEventListener('click', () => {
    if(audio.paused) {
        audio.play()
        control_audio.innerHTML = '<i class="fa-regular fa-volume"></i>';
    } else {
        audio.pause()
        control_audio.innerHTML = '<i class="fa-regular fa-bell-slash"></i>'
    }
})

audio.addEventListener('ended', () => {
    control_audio.innerHTML = '<i class="fa-regular fa-bell-slash"></i>'
})