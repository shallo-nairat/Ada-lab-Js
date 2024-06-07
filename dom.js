// get
const container = document.getElementById('container');
console.log('parent',container.parentElement);
console.log('nextSibling',container.nextElementSibling);
console.log('previousSibling',container.previousElementSibling);
console.log('children',container.children);
console.log('firstChild',container.firstElementChild);
console.log('lastChild',container.lastElementChild);

const html = document.documentElement;
console.log({html});
console.log('body',document.body);

// UPDATING DOM
const heading = document.getElementById('heading');
// updating this replaces what you had
heading.innerHTML = 'Introduction to DOM manipulation';
heading.style.color='red'

// CREATE DOM
const textChild= document.createElement('p');
container.appendChild(textChild);
textChild.innerHTML='This is the new child'
textChild.setAttribute("class",'container-new-child');
textChild.setAttribute("id","paragraph");

// DELETE DOM
heading.remove();

const button = document.getElementById('button');
button.style.border ='none';
button.style.padding ='10px 15px';
button.style.borderRadius ='5px';
button.style.cursor ='pointer'
button.style.backgroundColor='blue';
button.style.color ='white'

button.addEventListener('click',function(){
    button.innerHTML = 'Clicked!';
    button.style.backgroundColor = 'green';
})
