const btn = document.querySelector('button')
const loginText = document.querySelector('.login-container h2')
const toggle = document.querySelector('.toggle')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const reTypePassword = document.querySelector('.retype')

let isWantLogin = true;

toggle.addEventListener('click', () => {
    if (isWantLogin) {
        loginText.textContent = 'Buat Akun';
        btn.textContent = 'Buat Akun';
        isWantLogin = false;
        reTypePassword.classList.remove('retype');
        console.log();

    } else {
        loginText.textContent = 'Masuk ke Akun Anda';
        btn.textContent = 'Masuk';
        isWantLogin = true;
        reTypePassword.classList.add('retype');
    }
})

btn.addEventListener('click', (e) => {
    if (emailInput.value == "" || passwordInput.value == "") {
        return alert('Email dan Password tidak boleh kosong');
    }
    if (!isWantLogin && passwordInput.value !== reTypePassword.children[1].value) {
        return alert('password harus sama ')
    }
    console.log('done')
    e.preventDefault()
    return window.location.href = '../../main.html'

})