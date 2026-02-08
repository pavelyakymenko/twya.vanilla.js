// modal.js
export default function initModal() {
    // ============================================================================== simple modal
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
}
