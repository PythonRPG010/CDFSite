document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-content");
    const navLinks = document.querySelectorAll("nav a");
    let username = "";
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        tabs.forEach(tab => {
          tab.style.display = "none";
        });
        const targetTabId = this.getAttribute("href");
        const targetTab = document.querySelector(targetTabId);
        targetTab.style.display = "block";
  
        if (targetTabId === "#chat") {
          const setUsernameButton = document.getElementById("set-username");
  
          setUsernameButton.addEventListener("click", function() {
            const inputUsername = document.getElementById("username-input");
            username = inputUsername.value.trim();
            if (username !== "") {
              inputUsername.style.display = "none";
            }
          });
        }
      });
    });
  
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");
  
    sendButton.addEventListener("click", function () {
      const message = messageInput.value.trim();
      if (message !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = `${username}: ${message}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = "";
      }
    });
  
    messageInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        sendButton.click();
        event.preventDefault();
      }
    });
  });  