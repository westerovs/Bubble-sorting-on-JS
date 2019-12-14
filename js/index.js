let a = [3, 5, 12, 1, 3, 7];

// сортировка пузырьком
for (let i = 0; i < a.length; i++) {
  for (let j = i; j < a.length; j++) {
    // знак > или < определяет по возрастанию, или убыв. сортировать
    if (a[i] < a[j]) {
      let count = a[i];
      a[i] = a[j];
      a[j] = count;
    }
    // console.log(a);
  }
}

// // что бы получить текстовые строки 1,2,3,4 мне нужно только получить родителя
// // для замены буду использовать replacedNode = parentNode.replaceChild(newChild, oldChild);
// // Важно. что для прав. работы кода, должна быть следующ.структура в html
// // - Блок, который содержит вложенные нужные блоки. Всё оформление нужно пихать внутри вложенных блоков
// let nav = document.querySelector(`#nav`);
// // nav[0] - это  строка 3
// // nav[1] - это  строка 4
// replacedNode = container.replaceChild(container.children[1], container.children[0]);
// // строка 4[1], заняла место строки 3[0]
// // вставить в конец замененный элемент
// nav.appendChild(replacedNode);


// внутри функции я получаю элементы из nav
// далее я должен перебрать их с помощью цикла
document.querySelector(`#sort-up`).onclick = function() {
  mySortUp(`data-price`);
}

document.querySelector(`#sort-down`).onclick = function() {
  mySortUpDown(`data-price`);
}

document.querySelector(`#sort-rating-up`).onclick = function() {
  mySortUp(`data-rating`);
}

document.querySelector(`#sort-rating-down`).onclick = function() {
  mySortUpDown(`data-rating`);
}


// сортировка по возрастанию
function mySortUp (sortType) {
  let container = document.querySelector('.container');
  for (let i = 0; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (+container.children[i].getAttribute(sortType) > +container.children[j].getAttribute(sortType)) {
        // replacedNode = я перезаписываю первый элемент
        replacedNode = container.replaceChild(container.children[j], container.children[i]);
        // и после него вставляю тот, который перезаписал
        insertAfter(replacedNode, container.children[i]);
      }
    }
  }
}

// сортировка по убыванию
function mySortUpDown (sortType) {
  let container = document.querySelector('.container');
  for (let i = 0; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (+container.children[i].getAttribute(sortType) < +container.children[j].getAttribute(sortType)) {
        // replacedNode = я перезаписываю первый элемент
        replacedNode = container.replaceChild(container.children[j], container.children[i]);
        // и после него вставляю тот, который перезаписал
        insertAfter(replacedNode, container.children[i]);
      }
    }
  }
}


// эта ф-ция получает элемент, определяет его родителей и вставляет перед ним нужные мне значения
function insertAfter (elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}











