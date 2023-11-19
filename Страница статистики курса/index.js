const allMessagesWrapper = document.querySelector('.support__messages')
const sendBtn = document.querySelector('#support__send-button"');
const sendInput = document.querySelector('#support__user-input');

sendBtn.addEventListener("click", addNewMessage(sendInput.value));

async function addNewMessages(inputValue) {
    let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(inputValue)
    });
    let supportMessageData = await response.json();

    createNewMyMessage(inputValue);
    createNewSupportMessage(supportMessageData);
}

function createNewMyMessage(inputValue) {
    let myMessage = document.createElement('div');
    myMessage.className = "support__my-message";
    div.innerHTML = `${inputValue}`;
    allMessagesWrapper.append(div);
}

function createNewSupportMessage(supportMessageData) {
    let supportMessage = document.createElement('div');
    supportMessage.className = "support__support-message";
    div.innerHTML = `${supportMessageData}`;
    allMessagesWrapper.append(div);
}

