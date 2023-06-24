const baseURL = "http://localhost:3000/chatsMessenger"
const chatContainer = document.querySelector('#chatContainer')

window.addEventListener('load', e => { // when the page loads
    $.ajax({
        method: 'GET',
        url: baseURL
    }).then(chats => {
        // make chats into DOM nodes
        // add DOM nodes to DOM
        console.log('chats', chats)
        const chatNodes = chats.map(chat => createDOMnodes(chat))
        chatNodes.forEach(node => {
            chatContainer.appendChild(node)
        })
    }).catch(err => console.error("There was an error", err))
})

// helper function to create DOM nodes
/**
 * 
 *  chat object: 
 * {
 *  id: 1, 
 *  name: 'tammy',
 *  message: 'hey'
 * }
 */
const createDOMnodes = chat => {
    const chatMessageNode = document.createElement('h3')
    chatMessageNode.textContent = chat.message
    return chatMessageNode
}

// // POST a new chat
const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const name = $('#nameInput').val()
    const message = $('#messageInput').val()
    const newChatNode = createDOMnodes({name, message})
    chatContainer.appendChild(newChatNode)
    

    $.post(baseURL, {name, message})
     .then(chat => {
        console.log('new message', chat)
    })
     .catch(err => {
        newChatNode.style.textDecoration = 'line-through'
        const errorMessage = document.createElement('p')
        errorMessage.textContent = "Message could not be sent. Please try again."
        errorMessage.style.color = "red"
        chatContainer.appendChild(errorMessage)
        console.error('Could not send message', err)
     })
})