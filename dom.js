// EXAMINE THE DOCUMENT OBJECT
/*
console.dir(document);
console.log(document.title);
console.log(document.domain);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[10].textContent = "Hello");
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
*/

//Get Element By Id :::::::
//console.log(document.getElementById('header-title'));
// //let hTitle = document.getElementById('header-title');
// //let mTitle = document.getElementById('main-header');
//console.log(hTitle);
//hTitle.textContent = 'Hello';
//hTitle.innerText = 'Goodbye';
//console.log(hTitle.innerText);
//hTitle.innerHTML = '<h3>Hello</h3>';
// //mTitle.style.borderBottom = 'solid 3px #000';

//Get Element By CLASSNAME ::::::
//console.log(document.getElementsByClassName('title'));
// //let addItemTitle = document.getElementsByClassName('title');
// //addItemTitle[0].style.fontWeight = 'bold'; //Making Text Bold
// //addItemTitle[0].style.color = 'green'; // Change Font Color to Green

//GETELEMENTBYCLASSNAME
// //let items = document.getElementsByClassName('list-group-item');
/*
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
*/
// //items[2].style.backgroundColor = 'green';

// items.style.fontWeight = 'bold'; //Do not work because it is an Array Form.

/*
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
*/

//GETELEMENTBYTAGNAME
/*
let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'HELLOs';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(let i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'grey';
}
*/

//QUERYSELECTOR
let header = document.querySelector('#main-header'); //by ID
console.log(header);
header.style.borderBottom = 'solid 4px brown';

let input = document.querySelector('input'); // by TAG
input.value = 'Hello World';  //There are 2 inputs on the page, but it will grab the 1st one by default.

// For 2nd input
let submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item'); // by CLASS
item.style.color = 'red';   //It will change only Item 1 red.

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');  // Item 2
secondItem.style.backgroundColor = 'green';

let thirdItem = document.querySelector('.list-group-item:nth-child(3)'); //Item 3
thirdItem.style.display = 'none';