const send_btn = document.getElementById('send_btn');
const code_input = document.getElementById('code_input');

send_btn.addEventListener('click', () => {
    if (code_input.value == 'd1a2'){
        window.location.href = "../public/game.html";
    }
})