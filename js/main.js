var index = 0;

function changeImage(imgPath) {
    var images = ['icon1', 'icon2', 'icon3'];

    index = (index + 1) % 3;

    document.getElementById('photo')
        .setAttribute('src', `./img/${images[index]}.png`);
}