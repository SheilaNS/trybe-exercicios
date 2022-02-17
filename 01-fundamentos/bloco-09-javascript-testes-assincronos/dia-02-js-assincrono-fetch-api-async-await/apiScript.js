// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (param) => {
  const h2 = document.getElementById('jokeContainer');
  const paragraph = document.createElement('p');
  paragraph.innerText = param.joke;
  h2.appendChild(paragraph);
};

const fetchJoke = () => {
  const espec = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = fetch(API_URL, espec)
    .then((response) => response.json())
    .then((data) => append(data))
    .catch((error) => console.log('The joke was so bad, it broke the code :C'))
};

window.onload = () => fetchJoke();