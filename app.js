let txt = document.querySelector('.txt'),
    aText = document.createElement('div');
aText.classList.add('curText');
txt.textContent = '';

window.addEventListener('mousemove', event => {
    if (event.target.closest('.pol')) {
        aText.style.left = event.clientX + 15 + 'px';
        aText.style.top = event.clientY + 15 + 'px'
        aText.innerHTML = event.target.getAttribute('data-name');
        document.body.append(aText);
    } else if (!event.target.closest('.pol')) {
        aText.remove()
    }
});

window.addEventListener('click', event => {
    if (event.target.closest('.pol')) {
        txt.innerHTML = event.target.getAttribute('data-name');
    }
})