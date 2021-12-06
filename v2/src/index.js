import './scss/style.scss';
import htmlMain from './view/main.html';
import data from './view/Data';
import ViewCareer from './view/ViewCareer';
import Utils from './modules/Utils';



// const dataObject = {
//     career: [
//         {
//             name: 'Samsung Fire',
//             part: 'UI Dept.',
//             position: 'Lead Professional',
//             period: '2018 - NOW',
//             tags: ['nodejs', 'react', 'typescript', 'javascript']
//         },
//         {
//             name: 'Samsung Fire1',
//             part: 'UI Dept.1',
//             position: 'Lead Professional1',
//             period: '2018 - NOW1',
//             tags: ['nodejs', 'react', 'typescript', 'javascript']
//         }
//     ]
// }



function insertWrapper() {
    const element = document.createElement('div');
    element.innerHTML = htmlMain;
    element.classList.add('wrapper');
    return element;
}

function init() {
    ViewCareer.init();
    bindElement();
    addEvent();
    // initUI();
}

function bindElement() {

}

function addEvent() {
    document.addEventListener('click', function () {

    })
}

// function initUI() {
//     // Utils.removeAllChildNodes()
//     // removeAllChildNodes($viewCareer);
// }

// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    init();
})

document.body.appendChild(insertWrapper());
