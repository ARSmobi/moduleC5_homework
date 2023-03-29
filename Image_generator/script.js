const btn = document.querySelector('.btn');
const contentNode = document.querySelector('#content');

function useRequest(width, height) {
    return fetch(`https://picsum.photos/${width}/${height}`)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))
        .catch(() => {
            console.log('error')
            contentNode.innerHTML = '<p>Что-то пошло не так</p>'
        })
};

btn.addEventListener('click', async () => {
    const inputWidth = document.querySelector('#width').value;
    const inputHeight = document.querySelector('#height').value;
    let minSize = 100,
        maxSize = 300;
    if ((inputWidth >= minSize && inputWidth <= maxSize) && (inputHeight >= minSize && inputHeight <= maxSize)){
        const url = await useRequest(inputWidth, inputHeight)
        contentNode.innerHTML = `
      <img src='${url}' alt='image'>`
    } else {
        contentNode.innerHTML = `
      <p>Одно из чисел вне диапазона от ${minSize} до ${maxSize}</p>`
    }
});
