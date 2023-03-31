function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
}

const btnNode = document.querySelector('#btn');
const contentNode = document.querySelector('.content');

function displayContent(apiData){
    let cards = ''

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img class="card_image" src="${item.download_url}" alt="image">
        <p>${item.author}</p>
      </div>`;
        cards = cards + cardBlock;
    });

    contentNode.innerHTML = cards;
}

function displayNoContent(value){
    contentNode.innerHTML = `<h2>Число ${value} вне диапазона от 1 до 10</h2>`;
}

btnNode.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (value > 0 && value < 11){
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayContent)
    } else {
        displayNoContent(value)
    }
});
