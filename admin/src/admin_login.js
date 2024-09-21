const login = document.getElementById('login');
const password = document.getElementById('password');
const send_btn = document.getElementById('send_btn');


send_btn.addEventListener('click', function(){
    if (login.value == 'd1rect' && password.value == '123'){
        window.location.href = "../admin/admin_panel.html";
    }
})


