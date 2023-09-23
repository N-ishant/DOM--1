// EXAMINE THE DOCUMENT OBJECT
console.log(document.title);

//Get Element By Id
let hTitle = document.getElementById('header-title');
let mTitle = document.getElementById('main-header');
mTitle.style.borderBottom = 'solid 3px #000';

//Get Element By Class
let items = document.getElementsByClassName('list-group-item');
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';