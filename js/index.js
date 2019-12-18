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

let container = document.querySelector('.container');

// сортировка по возрастанию
function mySortUp (sortType) {
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