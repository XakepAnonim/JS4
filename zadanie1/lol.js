// Задачи для решения //
// Работа с классами
// // 1
// document.getElementById('elem').classList.add('www');
// // 2
// document.getElementById('elem').classList.remove('www');
// // 3
// if (document.getElementById('elem').classList.contains('www')) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }
// // 4
// if (document.getElementById('elem').classList.contains('www')) {
//     document.getElementById('elem').classList.remove('www');
// } else {
//     document.getElementById('elem').classList.add('www');
// }
// // 5
// console.log(document.getElementById('elem').classList.length)
// // 6
// let classElem = document.getElementById('elem').classList
// for (let i of classElem) {
//     alert(i)
// }

// Работа с CSS
// let elem = document.getElementById('elem')
// elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid black;'

// Свойство tagName
// // 1
// document.getElementById('elem').addEventListener('click', function () {
//     alert(this.tagName);
// });
// // 2
// document.getElementById('elem').addEventListener('click', function () {
//     alert(this.tagName.toLowerCase());
// });
// // 3
// let elems = document.getElementsByClassName('www');
// for (let i = 0; i < elems.length; i++) {
//     let tagName = elems[i].tagName.toLowerCase();
//     elems[i].innerHTML += ' ' + tagName;
// }

// Вставка элементов через appendChild
// // 1
// let ol = document.querySelector('ol');
// let li = document.createElement('li');
// li.textContent = 'пункт';
// ol.appendChild(li);
// // 2
// let ul = document.querySelector('ul');
// let array = ['Elem1', 'Elem2', 'Elem3'];
//
// array.forEach(function (item) {
//     let li = document.createElement('li');
//     li.textContent = item
//     ul.appendChild(li)
// })

// Вставка элементов через insertAdjacentHTML
// // 1
// document.getElementById('elem').insertAdjacentHTML('beforebegin', '<span>!!!</span>');
// // 2
// document.getElementById('elem').insertAdjacentHTML('beforeend', '<span>!!!</span>');
// // 3
// document.getElementById('elem').insertAdjacentHTML('afterbegin', '<span>!!!</span>');
// // 4
// document.getElementById('elem').insertAdjacentHTML('afterend', '<span>!!!</span>');

// Удаление и клонирование
// // 1
// let parent = document.getElementById('parent');
// let child = document.getElementById('child');
// let button = document.getElementById('button');
// let ol = document.querySelector('ol');
// let elem = document.getElementById('elem');
//
// button.addEventListener('click', function () {
//     parent.removeChild(child);
// });
// // 2
// button.addEventListener('click', function () {
//     let lastChild = ol.lastElementChild;
//     ol.removeChild(lastChild);
// });
// // 3
// elem.addEventListener('click', function () {
//     this.parentNode.removeChild(this);
// });
// // 4
// ol.addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//         this.removeChild(event.target);
//     }
// });
// // 5
// let input = document.getElementById('input');
// let button1 = document.getElementById('button1');
//
// button1.addEventListener('click', function () {
//     let clonInput = input.cloneNode(true);
//     document.body.appendChild(clonInput);
// });

// Потомки
// let elem1 = document.getElementById('elem1');
// // 1
// let firstChild = elem1.firstElementChild;
// firstChild.style.color = 'red';
// // 2
// let lastChild = elem1.lastElementChild;
// lastChild.style.color = 'red';
// // 3
// let children = elem1.children;
// for (let i = 0; i < children.length; i++) {
//     children[i].textContent += '!';
// }

// Соседи
// let elem1 = document.getElementById('elem1');
// // 1
// let prevSibling = elem1.previousElementSibling;
// prevSibling.textContent += '!';
// // 2
// let nextSibling = elem1.nextElementSibling;
// nextSibling.textContent += '!';
// // 3
// let nextNextSibling = nextSibling.nextElementSibling;
// nextNextSibling.textContent += '!';

// Родители
// let elem1 = document.getElementById('elem1');
// // 1
// let parElem = elem1.parentElement;
// parElem.style.color = 'red'
// // 2
// let parNodeElem = elem1.parentNode;
// parNodeElem.style.color = 'red'

// На величину границы
// let elem = document.getElementById('elem');
// // 1
// let btn = document.getElementById('btn')
// btn.addEventListener('click',  () => alert(elem.clientTop))
// // 2
// btn.addEventListener('click', () => {alert(elem.clientTop)})

// На полный размер элемента
// // let elem = document.getElementById('elem');
// let btn = document.getElementById('btn')
// // 1
// btn.addEventListener('click', () => {alert(elem.offsetWidth)})
// // 2
// btn.addEventListener('click', () => {alert(elem.offsetHeight)})

// На размер элемента без границ, но с padding
// // let elem = document.getElementById('elem');
// let btn = document.getElementById('btn')
// // 1
// btn.addEventListener('click', () => {alert(elem.clientWidth)})
// // 2
// btn.addEventListener('click', () => {alert(elem.clientHeight)})

// Работа с getComputedStyle
// // let elem = document.getElementById('elem');
// let getComput = getComputedStyle(elem);
// console.log(getComput.width, getComput.height)

// Прокрутка элемента
// // let elem = document.getElementById('elem');
// let btn = document.getElementById('btn')
// let btn1 = document.getElementById('btn1')
// // 1
// btn.addEventListener('click', () => console.log(elem.scrollTop))
// // 2
// btn.addEventListener('click', () => console.log(elem.scrollLeft))
// // 3
// btn1.addEventListener('click', () => {
//     elem.scrollTop = 100
// })
// // 4
// btn1.addEventListener('click', () => {
//     elem.scrollTop += 100
// })

// Прокрутка элемента
// // let elem = document.getElementById('elem');
// let btn1 = document.getElementById('btn1')
// // 1
// btn1.addEventListener('click', () => (console.log(elem.scrollWidth)))
// // 2
// btn1.addEventListener('click', () => (console.log(elem.scrollHeight)))
// // 3
// btn1.addEventListener('click', () => {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;
// })

// Прокрутка страницы
// let btn = document.getElementById('btn')
// // 1
// btn.addEventListener('click', () => console.log(window.pageXOffset))
// // 2
// btn.addEventListener('click', () => console.log(window.pageYOffset))

// Прокрутка страницы
// let btn = document.getElementById('btn')
// // 1
// btn.addEventListener('click', () => {
//     window.scrollTo(300, 500)
// })
// // 2
// btn.addEventListener('click', () => {
//     window.scrollBy(0, 300)
// })

// Практика
// let btn = document.getElementById('btn')
// // let elem = document.getElementById('elem')
// // 1
// btn.addEventListener('click', () => {
//     window.scrollTo(0, document.documentElement.scrollHeight);
// })
// // 2
// btn.addEventListener('click', () => {
//     window.scrollBy(0, 400);
// });
// // 3
// btn.addEventListener('click', () => {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         window.scrollTo(0, 100);
//     }
// });
// // 4
// btn.addEventListener('click', () => {
//     elem.style.width = (elem.offsetWidth * 2) + 'px'
//     elem.style.height = (elem.offsetHeight * 2) + 'px'
// })
