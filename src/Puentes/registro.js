document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const usuario = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    fetch('../insercion/insercion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario, password})
    });

    if (usuario !== null && password !== null) {
      window.location.href = '../register';
    } else {
        alert('Por favor, rellene todos los campos correctamente');
    }
});