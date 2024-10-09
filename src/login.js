const socket = io();

const send_btn = document.getElementById('send_btn');
const code_input = document.getElementById('code_input');


send_btn.addEventListener('click', async () => {
    const data = {
        code_text: code_input.value
    }
    await fetch('/login/game/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const room = code_input.value;
                window.location.href = '../public/game.html';
                socket.emit('join_room', room);
            } else {
                alert('Your code is incorrect!')
            }
        }
        )
        .catch(error => console.error(error))
        ;
})

