const mainHash = '';
const addHash = '#add';
const modifyHash = '#modify';

main();
window.addEventListener('hashchange', way);

function toMain() { 
  clear(), main() 
}
function toAdd() { 
  clear(), addingPage()
}
function toMod() { 
  clear(), modifyPage(), fillInput()
}

function way() {
  let presentHash = location.hash;
  if (presentHash === addHash) { 
    toAdd() 
  } else if (/#\/modify/.test(presentHash)) { 
    toMod() 
  }else {
    toMain(), location.hash = mainHash
  }
}

function clear() {
    document.getElementById('root').removeChild(document.getElementById('root').firstChild);
}

function getItemById(id) {
    return JSON.parse(localStorage.getItem(id));
}

function main() {
    let divPage = document.createElement('div');
    document.getElementById('root').appendChild(divPage);
    divPage.classList.add('page');
    divPage.setAttribute('id', 'main');

    let divCont = document.createElement('div');
    divPage.appendChild(divCont);
    divCont.classList.add('container');

    let title = document.createElement('h1');
    divCont.appendChild(title);
    title.innerHTML = 'Simple TODO application';

    let addbutton = document.createElement('button');
    divCont.appendChild(addbutton);
    addbutton.setAttribute('id', 'addTask');
    addbutton.innerHTML = 'Add new task';
    addbutton.addEventListener('click', toAdd);

    let list = document.createElement('ul');
    divCont.appendChild(list);
    list.setAttribute('id', 'list');
    newTasks();    
}

function newTasks() {
  let tasks = [];

  for (let i = 0; i <= localStorage.length; i++) {
    if (!localStorage.length) {
      return;
    }
    let key = localStorage.key(i);
    if (key === 'counter') { 
      break;
    }
    const task = JSON.parse(localStorage.getItem(key));
    tasks.push(task);
  }

  if (tasks.length) {
    tasks = tasks.sort(function(a, b) {
      return a - b;
    });
    for (let i = 0; i < tasks.length; i++) {
      transmit(tasks[i]);
    }
  }
}

function transmit(task) {

  let li = document.createElement('li');
  let delBtn = document.createElement('button');
  delBtn.classList.add('delBtn');
  let checkBtn = document.createElement('button');
  checkBtn.classList.add('checkBtn');
  if (task.isDone === 'true') {
    checkBtn.classList.add('checked');
  }
  let txt = document.createElement('a');
  txt.insertAdjacentText('afterBegin', `${task.description}`);
  txt.setAttribute('href', `#/modify/:${task.id}`);

  delBtn.addEventListener('click', function() {
    localStorage.removeItem(task.id)
  })
  delBtn.addEventListener('click',
      (event) => event.target.parentNode.remove());
      checkBtn.addEventListener('click', function(el) {
    task.isDone = 'true';
    localStorage.setItem(task.id, JSON.stringify(task));
    if (!el.target.classList.contains('checked')) {
      document.querySelector('ul').appendChild(el.target.parentNode);
    }
    checkBtn.classList.add('checked');
  });

  li.appendChild(checkBtn);
  li.appendChild(txt);
  li.appendChild(delBtn);
  document.querySelector('ul').appendChild(li);
}       

function addingPage() {
    let divPage = document.createElement('div');
    document.getElementById('root').appendChild(divPage);
    divPage.classList.add('page');
    divPage.setAttribute('id', 'add');

    let divCont = document.createElement('div');
    divPage.appendChild(divCont);
    divCont.classList.add('container');

    let title = document.createElement('h1');
    divCont.appendChild(title);
    title.innerHTML = 'Add task';

    let divAddTask = document.createElement('div');
    divCont.appendChild(divAddTask);
    divAddTask.classList.add('adding-task');

    let inputText = document.createElement('input');
    divAddTask.appendChild(inputText);
    inputText.setAttribute('type', 'text');
    inputText.autofocus = true;
    inputText.setAttribute('id', 'addText');

    let cancelBtn = document.createElement('button');
    divAddTask.appendChild(cancelBtn);
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.addEventListener('click', toMain);

    let saveBtn = document.createElement('button');
    divAddTask.appendChild(saveBtn);
    saveBtn.classList.add('saveBtn');
    saveBtn.innerHTML = 'Save changes';
    saveBtn.addEventListener('click', save);
}

function modifyPage() {
    let divPage = document.createElement('div');
    document.getElementById('root').appendChild(divPage);
    divPage.classList.add('page');
    divPage.setAttribute('id', 'modify');

    let divCont = document.createElement('div');
    divPage.appendChild(divCont);
    divCont.classList.add('container');

    let title = document.createElement('h1');
    divCont.appendChild(title);
    title.innerHTML = 'Modify item';

    let divModTask = document.createElement('div');
    divCont.appendChild(divModTask);
    divModTask.classList.add('modify-task');

    let inputText = document.createElement('input');
    divModTask.appendChild(inputText);
    inputText.setAttribute('type', 'text');
    inputText.autofocus = true;
    inputText.setAttribute('id', 'modifyText');

    let cancelBtn = document.createElement('button');
    divModTask.appendChild(cancelBtn);
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.addEventListener('click', toMain);

    let saveBtn = document.createElement('button');
    divModTask.appendChild(saveBtn);
    saveBtn.classList.add('saveBtn');
    saveBtn.innerHTML = 'Save changes';
    saveBtn.addEventListener('click', saveChange);
}
 
function save() {
    let inputValue = document.querySelector('input').value;
  
    if (!inputValue) {
      return;
    }
  
    if (!getItemById('counter')) {
      localStorage.setItem('counter', '1');
    }
  
    let task = {
      isDone: false,
      id: getItemById('counter'),
      description: inputValue
    };
  
    localStorage.setItem(task.id, JSON.stringify(task));
    let counter = getItemById('counter') + 1;
    localStorage.setItem('counter', counter);
  
    toMain();
  }
  
  function saveChange() {
    let inputValue = document.querySelector('input').value;
    if (!inputValue) {
      return;
    }
    const id = getId();
    let task = getItemById(id);
    task.description = inputValue;
  
    localStorage.setItem(id, JSON.stringify(task));
    location.hash = mainHash;
  }
  
  function fillInput() {
    const id = getId();
    let task = getItemById(id);
    document.querySelector('input').value = task.description;
  }
  
  function getId() {
    return location.hash.split(/\/:/)[1];
  }