// drawer.js
export default function initDrawer() {
    const btndrawer = document.querySelector('.open-drawer')
    const drawer = document.querySelector('.drawer')
    
    btndrawer.addEventListener('click', () => {
        drawer.classList.toggle('hidden')
        btndrawer.classList.remove('outdent')
    })
}
