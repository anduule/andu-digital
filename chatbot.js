const sendBtn = document.getElementById("sendBtn");

const userInput = document.getElementById("userInput");

const messages = document.getElementById("messages");

const avatar = document.getElementById("avatar");



sendBtn.addEventListener("click", sendMessage);



function sendMessage() {

  const text = userInput.value.trim();



  if (text === "") return;



  addMessage(text, "user-message");



  userInput.value = "";



  botReply(text);
}



function addMessage(text, className) {

  const div = document.createElement("div");



  div.classList.add(className);



  div.textContent = text;



  messages.appendChild(div);



  messages.scrollTop = messages.scrollHeight;
}



function botReply(text) {

  let response = "";



  avatar.src = "avatar/thinking.png";



  setTimeout(() => {



    if (text.toLowerCase().includes("hola")) {

      response = "Hola 🌸 Soy Andu Te Escribe.";

      avatar.src = "avatar/happy.png";

    }



    else if (text.toLowerCase().includes("triste")) {

      response = "A veces descansar también es avanzar.";

      avatar.src = "avatar/sad.png";

    }



    else if (text.toLowerCase().includes("miedo")) {

      response = "El miedo también protege partes sensibles.";

      avatar.src = "avatar/thinking.png";

    }



    else if (text.toLowerCase().includes("jaja")) {

      response = "Me alegra hacerte sonreír ✨";

      avatar.src = "avatar/wink.png";

    }



    else if (text.toLowerCase().includes("trabajo")) {

      response = "También puedo ayudarte con herramientas digitales y asesoría laboral.";

      avatar.src = "avatar/happy.png";

    }



    else if (text.toLowerCase().includes("portfolio")) {

      response = "Este espacio mezcla creatividad, tecnología y emoción.";

      avatar.src = "avatar/thinking.png";

    }



    else if (text.toLowerCase().includes("programacion")) {

      response = "Trabajo con HTML, CSS, JavaScript y proyectos interactivos.";

      avatar.src = "avatar/thinking.png";

    }



    else {

      response = "Sigo aprendiendo nuevas formas de conversar 🌙";

      avatar.src = "avatar/idle.png";

    }



    addMessage(response, "bot-message");



  }, 1000);
}