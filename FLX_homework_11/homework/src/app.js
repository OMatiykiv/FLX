const max = 10;
const one = 1;
let counter = 0;
let newRow;
let el;

function addElement() {
  newRow = document.createElement('li');
  let inputValue = document.getElementById('textForm').value;
  let text = document.createTextNode(inputValue);
  newRow.appendChild(text);
    if (!inputValue) { 
      document.getElementsByClassName('add-button').disabled = true;
    } else {
    document.getElementById('list').appendChild(newRow);
    document.getElementById('textForm').value = '';
    let checkBox = document.createElement('span');
    let checkIcon = document.createElement('i');
    let checkTxt = document.createTextNode('check_box_outline_blank');
    checkBox.className = 'unchecked';
    checkIcon.className = 'material-icons';
    checkIcon.setAttribute('onclick', 'checkElement()');
    checkIcon.appendChild(checkTxt);
    checkBox.appendChild(checkIcon);
    newRow.insertBefore(checkBox, text);
    let span = document.createElement('span');
    let icon = document.createElement('i');
    let txt = document.createTextNode('delete');
    icon.className = 'material-icons';
    span.className = 'close';
    icon.setAttribute('onclick', 'deleteElements()');
    icon.appendChild(txt);
    span.appendChild(icon);
    newRow.appendChild(span);
    newRow.setAttribute('draggable', true);
    newRow.setAttribute('ondragover', 'dragOver(event)');
    newRow.setAttribute('ondragstart', 'dragStart(event)');
    if (++counter >= max) {
        document.querySelector('input').disabled = true;
        document.getElementsByClassName('add-button').disabled = true;
        document.querySelector('input').className = 'warning';
        showWarning();
    } else if (counter <= max) {
        document.querySelector('input').disabled = false;
      }
    }
}

function deleteElements() {
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'none'; 
  };
if (counter <= max) {
  document.querySelector('input').disabled = false;
}
}
--counter;
}

function checkElement() {
  let unchecked = document.getElementsByClassName('unchecked');
  for (let i = 0; i < unchecked.length; i++) {
    unchecked[i].onclick = function() {
      let unchecked = this;
      unchecked.style.display = 'none';
      let li = document.querySelectorAll('li');
      let text = li.text;
      let checkBox = document.createElement('span');
      let checkIcon = document.createElement('i');
      let checkTxt = document.createTextNode('check_box');
      checkBox.className = 'checked';
      checkIcon.className = 'material-icons';
      checkIcon.appendChild(checkTxt);
      checkBox.appendChild(checkIcon);
      li[i].insertBefore(checkBox, unchecked);
    };
  }
} 

function showWarning() {
  let warning = document.getElementById('warning');
  warning.classList.toggle('show');
}

function dragOver(e) {
  if (isBefore(el, e.target)) {
    e.target.parentNode.insertBefore(el, e.target);
  } else {
    e.target.parentNode.insertBefore(el, e.target.nextSibling);
  }
}

function dragEnd() {
  el = null;
}

function dragStart(e) {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', null);
  el = e.target;
}

function isBefore(el1, el2) {
    if (el2.parentNode === el1.parentNode) {
        for (let cur = el1.previousSibling; cur; cur = cur.previousSibling) {
            if (cur === el2) {
                return true;
            }
        }
    return false; 
  }
}
