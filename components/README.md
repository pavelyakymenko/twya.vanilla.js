# Модальне вікно
## Просте модальне вікно [#](simple-modal.html)

Навчальний приклад простого модального вікна на Vanilla JavaScript.
Проєкт створений для розуміння роботи з DOM, класами та базовою логікою відкриття/закриття модалок без бібліотек.

Простий скрипт, який:
- відкриває модальне вікно по кліку на кнопку
- блокує скрол сторінки
- закриває модалку при кліку на бекдроп

Кнопка виклику модального вікна:
```html
<button class="open-modal inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-mono bg-stone-50 inset-ring border border-dashed h-10 px-3">Modal</button>
```
Створення тіла модального вікна:
```html
<section>
    <aside class="modal fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm backdrop-grayscale flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-40">
        <section class="modal-dialog w-64 bg-white rounded-lg transform transition-transform duration-300 ease-out scale-95">
            <header class="flex justify-between content-center p-4 border-b">
                <p class="font-bold">Modal header</p>
            </header>
            <article class="p-4">Modal body</article>
            <footer class="flex justify-between content-center p-4 border-t">
                <p class="font-bold">Modal footer</p>
            </footer>
        </section>
    </aside>
</section>
```
Простий скрипт виконання:
```js
const btnmodal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const dialog = document.querySelector('.modal-dialog')
const body = document.querySelector('body')

btnmodal.addEventListener('click', () => {
    body.classList.toggle('overflow-hidden')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    dialog.classList.toggle('scale-95')
    dialog.classList.toggle('scale-100')
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
    body.classList.toggle('overflow-hidden')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    dialog.classList.toggle('scale-95')
    dialog.classList.toggle('scale-100')
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        body.classList.toggle('overflow-hidden')
        modal.classList.toggle('opacity-0')
        modal.classList.toggle('pointer-events-none')
        dialog.classList.toggle('scale-95')
        dialog.classList.toggle('scale-100')
    }
})
```
