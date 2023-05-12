const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navbar-list');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');

})

document.querySelectorAll('.navbar-item').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navigationMenu.classList.remove('active');
}))





const itemId = localStorage.getItem('itemId');

fetch('https://642c65dc208dfe25472f319b.mockapi.io/sleddings/' + itemId)
.then((res) => {
    return res.json();
})
.then((data) => {

    const sleddingSection = document.querySelector('.sledding-section');

    const sleddingImage = document.createElement('img');
    sleddingImage.setAttribute('class', 'sledding-image');
    sleddingImage.setAttribute('src', data.image);
    sleddingSection.append(sleddingImage);

    const sleddingInfo = document.createElement('div');
    sleddingInfo.setAttribute('class', 'sledding-info');
    sleddingSection.append(sleddingInfo);

    const sleddingName = document.createElement('h1');
    sleddingName.setAttribute('class', 'sledding-title');
    sleddingName.innerHTML = data.name;
    sleddingInfo.append(sleddingName);

    const sleddingDescription = document.createElement('p');
    sleddingDescription.setAttribute('class', 'sledding-description');
    sleddingDescription.innerHTML = data.description;
    sleddingInfo.append(sleddingDescription);

    const sleddingAge = document.createElement('span');
    sleddingAge.setAttribute('class', 'sledding-age');
    sleddingAge.innerHTML = `Rekomenduojamas amžius: ${data.personAge} metų`;
    sleddingInfo.append(sleddingAge);

    const sleddingPrice = document.createElement('span');
    sleddingPrice.setAttribute('class', 'sledding-price');
    sleddingPrice.innerHTML = `${data.price} €/para`;
    sleddingInfo.append(sleddingPrice);

    const button = document.createElement('a');
    button.setAttribute('class', 'button');
    button.href = 'tel: +37062864135';
    button.innerHTML = 'Susisiekti';
    sleddingInfo.append(button);

    button.addEventListener('click', () => {
        button.innerHTML = '+37062864135';
    })
})