const cryptoURL = 'https://api.coincap.io/v2/assets';

const append = (param) => {
  const ol = document.getElementById('crypto-ol');
  param.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = element;
    ol.appendChild(li);
  });
}

const fetchCoin = () => {
  const espec = {
    method: 'GET',
    redirect: 'follow'
  }

  const response = fetch(cryptoURL, espec)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .then((data) => append(data.data
      .filter((top, index) => index < 10)
      .map((item) => `${item.name} (${item.symbol}): ${parseFloat(item.priceUsd).toFixed(2)}`)))
    .catch((error) => console.log(error));
};

window.onload = () => fetchCoin();
