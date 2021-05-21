
const inputLink = document.querySelector('.link-video')
const button = document.querySelector('.push')
const form = document.querySelector('.form')
const videos = document.querySelector('.videos')
button.addEventListener('click', event => {
    event.preventDefault();
    const link = inputLink.value;
    const liElem = document.createElement('li');
    liElem.classList.add('col-3');
    liElem.innerHTML = link; 
    videos.appendChild(liElem)
    form.reset()
})