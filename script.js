const getCities = (sledding) => {
  console.log(sledding);
  const mainMenu = document.querySelector('.main-menu');

  const menuLink = document.createElement('a');
  menuLink.setAttribute('class', 'menu-link');
  menuLink.href = './sledding.html';
  mainMenu.append(menuLink);
  
  const menuItem = document.createElement('div');
  menuItem.setAttribute('class', 'menu-item');
  menuLink.append(menuItem);

  const itemImageWrapper = document.createElement('div');
  itemImageWrapper.setAttribute('class', 'item-image-wrapper');
  menuItem.append(itemImageWrapper);

  const image = document.createElement('img');
  image.setAttribute('class', 'item-image');
  image.setAttribute('src', sledding.image);
  itemImageWrapper.append(image);

  const itemInfoWrapper = document.createElement('div');
  itemInfoWrapper.setAttribute('class', 'item-info-wrapper');
  menuItem.append(itemInfoWrapper);

  const nameWrapper = document.createElement('div');
  nameWrapper.setAttribute('class', 'name-wrapper');
  itemInfoWrapper.append(nameWrapper);

  const name = document.createElement('span');
  name.setAttribute('class', 'item-name');
  name.innerHTML = sledding.name;
  nameWrapper.append(name);

  const price = document.createElement('span');
  price.setAttribute('class', 'item-price');
  price.innerHTML = `${sledding.price} €`;
  nameWrapper.append(price);

  const age = document.createElement('span');
  age.setAttribute('class', 'item-age');
  age.innerHTML = `Amžius: ${sledding.personAge} metų`;
  itemInfoWrapper.append(age);


  menuLink.addEventListener('click', () => {
    localStorage.setItem('itemId', sledding.id);
  });
}

fetch('https://642c65dc208dfe25472f319b.mockapi.io/sleddings')
.then((res) => {
  return res.json();
})
.then((data) => {
  data.forEach(sledding => {
    getCities(sledding);
  });
  

  


})

