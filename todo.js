const ahmad = user => {
    const html = `<li>  <span>${user}</span><i class="del">x</i>  </li>`;
    let get = document.querySelector('.lists');
    get.innerHTML += html;
};

const form = document.getElementById('useradd');
// const username = document.querySelector('#username');
form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);

  const user = form.add.value.trim();
  form.reset();
  if(user.length){
     ahmad(user);
  }
});

let delete1  = document.querySelector('.lists');
delete1.addEventListener('click' , e =>{
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
});
const list = document.querySelector('.lists');
const search  = document.querySelector('.search input');


const filterto = (term) => {
    Array.from(delete1.children)
    .filter((todo)=>  !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filter'));

    Array.from(delete1.children)
    .filter((todo)=>  todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filter'))
}; 




search.addEventListener('keyup' ,() =>{
    const term = search.value.trim();
    filterto(term);
}); 
/*"const filterto = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.add('filter'))
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.remove('filter'));
};
let search = document.querySelector('#dee input');
console.log(david);
let search = document.querySelector('#search');
search.addEventListener('keyup' , e =>{
    e.preventDefault();
    const term = search.value;
    filterto (term);
})*/