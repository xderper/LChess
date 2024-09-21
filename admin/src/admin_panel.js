const create = document.getElementById('create_code');


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }


create.addEventListener('click', function(){
    const code = generateRandomString(10);
    const new_code = document.createElement('p');
    new_code.textContent = code;

    const container = document.getElementById('code_list');
    container.appendChild(new_code);
})