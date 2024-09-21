const create = document.getElementById('create_code');


// generate random code
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }


create.addEventListener('click', function(){
    // take code
    const code = generateRandomString(10);

    // add in html code
    const new_code = document.createElement('p');
    new_code.textContent = code;
    const container = document.getElementById('code_list');
    container.appendChild(new_code);

    // add code in database

    
})