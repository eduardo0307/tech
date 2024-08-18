document.addEventListener('DOMContentLoaded', () => {
    // Função para enviar formulário de contato
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });

    // Animação para os cards de serviço ao passar o mouse
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const dashboard = document.querySelector('.dashboard-section');
    const userName = document.getElementById('userName');
    const resourceList = document.getElementById('resourceList');
    const addResourceBtn = document.getElementById('addResourceBtn');

    // Mock database for users
    let users = [];

    // Handle user registration
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newUser = {
            name: registerForm.name.value,
            email: registerForm.email.value,
            password: registerForm.password.value,
        };
        users.push(newUser);
        alert('Usuário registrado com sucesso!');
        registerForm.reset();
    });

    // Handle user login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = users.find(u => u.email === loginForm.email.value && u.password === loginForm.password.value);
        if (user) {
            userName.textContent = user.name;
            dashboard.style.display = 'block';
            alert('Login bem-sucedido!');
        } else {
            alert('Credenciais inválidas!');
        }
        loginForm.reset();
    });

    // Handle adding resources
    addResourceBtn.addEventListener('click', () => {
        const resourceName = prompt('Digite o nome do recurso:');
        if (resourceName) {
            const resourceDiv = document.createElement('div');
            resourceDiv.textContent = resourceName;
            resourceList.appendChild(resourceDiv);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const dashboard = document.querySelector('.dashboard-section');
    const userName = document.getElementById('userName');
    const resourceList = document.getElementById('resourceList');
    const addResourceBtn = document.getElementById('addResourceBtn');

    // Mock database for users
    let users = [];

    // Handle user registration
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newUser = {
            name: registerForm.name.value,
            email: registerForm.email.value,
            password: registerForm.password.value,
        };
        users.push(newUser);
        alert('Usuário registrado com sucesso!');
        registerForm.reset();
    });

    // Handle user login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = users.find(u => u.email === loginForm.email.value && u.password === loginForm.password.value);
        if (user) {
            userName.textContent = user.name;
            dashboard.style.display = 'block';
            alert('Login bem-sucedido!');
        } else {
            alert('Credenciais inválidas!');
        }
        loginForm.reset();
    });

    // Handle adding resources
    addResourceBtn.addEventListener('click', () => {
        const resourceName = prompt('Digite o nome do recurso:');
        if (resourceName) {
            const resourceDiv = document.createElement('div');
            resourceDiv.textContent = resourceName;
            resourceList.appendChild(resourceDiv);
        }
    });
});