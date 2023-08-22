
const sendBtn = document.querySelector('.send-btn');
const chatWindow = document.querySelector("#chatWindow")

function sendMessage() {
  const message = document.querySelector("#message");
  chatWindow.value += "A: " + message.value + "\n";
  const bFrame = document.getElementById("bFrame").contentWindow;
  bFrame.postMessage(message.value)
  message.value = ''

}

window.addEventListener('message', e => {
  console.log(e.data)
  chatWindow.value += "B: " + e.data + "\n";
});


sendBtn.addEventListener('click', sendMessage);