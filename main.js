// let elem = document.querySelector('.example');

// console.log(elem.offsetTop)
// console.log(elem.offsetLeft)
// console.log(elem.clientTop)
// console.log(elem.clientLeft)
// console.log(elem.offsetWidth)
// console.log(elem.clientWidth)
// console.log(elem.offsetHeight)
// console.log(elem.clientHeight)
// console.log(elem.scrollTop)
// console.log(elem.scrollHeight)
// console.log(elem.offsetParent)
// console.log(elem.offsetWidth - elem.clientWidth- elem.clientLeft * 2)
// elem.style.height = elem.scrollHeight + 'px';
// console.log(document.body.scrollTop)
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)
// console.log(pageXOffset)
// console.log(pageYOffset)
// console.log(window.scrollY)
// console.log(window.scrollX)
// console.log(window.body.screenY)
// console.log(window.screenX)
// console.log(window.screenY)
// elem.scrollTo(0, 50)
// elem.scrollBy(0, 100)
// console.log(document.elementFromPoint(370, 370))

// function hello() {
//     alert("Hello")
// }
// let elem = document.querySelector('.btn2')
// let input = document.querySelector('.input')
// // elem.onclick = hello
// function hello() {
//     alert('Hello' + input.value)
//     // console.log(input.value)
//     elem.removeEventListener('click', hello)
// }
// function change(text) {
//     let state = confirm(text);
//     if (state) {
//         document.querySelector('.btn').innerHTML = 'Hello'
//     }
// }
// elem.addEventListener('click', hello)
// elem.addEventListener('onmouseover', () => alert('onmouseover'))

// elem.onclick = function (event) {
//     console.log(event.type)
// }
// elem.addEventListener('click', (event) => console.log(event.clientX))
// elem.addEventListener('mouseover', (event) => console.log(event.currentTarget))
// elem.addEventListener('mouseout', (event) => console.log(event.type))

// let div = document.querySelector('.block')
// let ul = document.querySelector('.list')
// let li = document.querySelector('.item')
//
// div.addEventListener('click', () => console.log('div'))
// ul.addEventListener('click', (event) => {
//     console.log('ul');
//     event.stopPropagation()
// })
// li.addEventListener('click', (event) => {
//     console.log('li');
//     event.stopPropagation()
// })

// ---------------------------------------------------------------------

// let elem = document.querySelector('.wrap')
//
// elem.addEventListener('click', (event) => {
//     let target = event.target;
//     if (target.closest('.card')) {
//         target.closest('.card').classList.toggle('new')
//     }
// })
// // ---
// let text = document.querySelector('.card__title')
//
// text.addEventListener('dblclick', (event) => {
//     let target = event.target;
//     if (target.classList.contains('card__text')) {
//         target.outerHTML = `<input class="card__text" value="${target.innerHTML}">`
//         console.log(target.innerHTML)
//     }
// })
// text.addEventListener('click', (event) => {
//     let target = event.target;
//     if (target.classList.contains('card__text') && target.tagName === 'INPUT') {
//         target.outerHTML = `<p class="card__text">${target.innerHTML}</p>`
//         console.log(target.innerHTML)
//     }
// })
