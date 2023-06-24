const form = document.querySelector('#chatForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('event:', event)
    const formElements = event.target.elements
    console.log('elements', formElements)
    const input = formElements[0]
    const val = input.value
    console.log('val', val)
    
})

document.createElement('')