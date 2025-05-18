// 1
console.log(1);
const input = document.querySelector(".task1-input")
const btn = document.querySelector(".task1-btn")

// как сделать так чтоб инпут менял текст кнопки 
btn.addEventListener('click', () => {
  btn.textContent = input.value;
});

// 2
console.log(2);
const title = document.querySelector(".task2-title")
const picture = document.querySelector(".task2-image")

picture.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3OT0uUHR6pJrC6HJf0iojPbihMkXHNnQq-lrT11hE6CDj3UPTyNfxXcFZ4MXWderq3g&usqp=CAU'
title.textContent = "Зелений камінь"

// 3
console.log(3);

const link = document.querySelector(".task3-link")
const image = document.querySelector(".task3-image")

link.href = "http://127.0.0.1:5500/"
image.alt = "#"
console.log(link.href);
console.log(image.alt);

// 4
console.log(4);

const list = document.querySelector(".task4-list")
// как изменить первый елемент списка
const firistElement = list.querySelector("li")
firistElement.textContent = 467