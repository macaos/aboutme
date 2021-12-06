import './scss/style.scss';
import htmlMain from './view/main.html';

const dataObject = {
    career: [
        {
            name: 'Samsung Fire',
            part: 'UI Dept.',
            position: 'Lead Professional',
            period: '2018 - NOW',
            tags: ['nodejs', 'react', 'typescript', 'javascript']
        },
        {
            name: 'Samsung Fire1',
            part: 'UI Dept.1',
            position: 'Lead Professional1',
            period: '2018 - NOW1',
            tags: ['nodejs', 'react', 'typescript', 'javascript']
        }
    ]
}

let $viewCareer;

function insertWrapper() {
    const element = document.createElement('div');
    element.innerHTML = htmlMain;
    element.classList.add('wrapper');
    return element;
}

function init() {
    bindElement();
    addEvent();
    initUI();
}

function bindElement() {
    $viewCareer = document.querySelector('.view-career');

}

function addEvent() {
    document.addEventListener('click', function () {

    })
}

function initUI() {
    removeAllChildNodes($viewCareer);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    init();
})

document.body.appendChild(insertWrapper());
