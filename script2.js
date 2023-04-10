const itemId = localStorage.getItem('itemId');

fetch('https://642c65dc208dfe25472f319b.mockapi.io/sleddings/' + itemId)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);

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
})