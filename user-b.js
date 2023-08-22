const sendBtn = document.querySelector('.send-btn');
const chatWindow = document.querySelector('#chatWindowB');

function sendMessageB() {
  const message = document.querySelector("#messageB")
  chatWindow.value += "B: " + message.value + "\n";
  window.parent.postMessage(message.value);
  message.value = ''
}

window.addEventListener('message', e => {
  console.log(e)
  chatWindow.value += "A: " + e.data + "\n";
});


sendBtn.addEventListener('click', sendMessageB);