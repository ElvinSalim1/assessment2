const title = document.querySelector('title');
const main = document.getElementById('main');
const input = document.getElementById('input');
const addButton = document.getElementById('add');

const ul = document.createElement('ul');
const h1 = document.createElement('h1');

title.innerText = 'Favorite Guitars';
h1.innerText = 'Long Range electric cars';
main.appendChild(h1)
main.appendChild(ul);

let cars = ['Tesla Model 3', 'Ford Mustang Mach-E', 'Tesla Model S'];

const printCars = () => {
    ul.innerHTML = '';
    cars.forEach(car => {
        let li = document.createElement('li');
        li.innerText = car;
        li.classList.add("car");
        li.onclick = () => li.style.color = 'green';
        ul.appendChild(li);
    })
}

//c
addButton.addEventListener('click',()=>{
    cars.push(input.value);
    printCars();
});

printCars();

