const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const commentsList = document.getElementById('list');
let paused = false;



let count = 0;
let likeCounter = 0;
counter.innerText = count;
let numberObjects = [];

let timer = setInterval(() => {
    if (!paused) {
        count+=1;
        counter.innerText = count;
    }
}, 1000)


minusButton.addEventListener('click', (e) => {
    e.preventDefault();
    count-=1;
    counter.innerText = count
})

plusButton.addEventListener('click', (e) => {
    e.preventDefault();
    count+=1;
    counter.innerText = count
})

heartButton.addEventListener('click', (e) => {
    e.preventDefault();
    let numberObj = {
        id: count,
        counter: likeCounter
    }

    let found = numberObjects.find(num => num.id === count)

    if (found) {
        found.counter+=1;
        let li = document.createElement('li');
        li.innerText = `${found.id} was liked ${found.counter} time`;
        ul.appendChild(li);
    } else {
        let li = document.createElement('li');
        li.innerText = `${numberObj.id} was liked ${numberObj.counter += 1} time`;
        numberObjects.push(numberObj);
        ul.appendChild(li);
    }

})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let p = document.createElement('p');
    p.innerText = form.comment.value;
    commentsList.append(p)
})



pause.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.innerText === 'pause') {
        paused = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        e.target.innerText = 'play';
    } else if (e.target.innerText === 'play') {
        paused = false;
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        e.target.innerText = 'pause';
    }
    
})











