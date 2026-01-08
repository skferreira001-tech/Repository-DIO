const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const catBtn = document.getElementById('changeCat');
const catImg = document.getElementById('cat');

const getCats = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
   catImg.src = data[0].url;
  } catch (err) {
    console.error(err);
  }
};

catBtn.addEventListener('click', getCats);

getCats();