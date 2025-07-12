const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const closeButtons = document.querySelectorAll('.close');
const userProfile = document.getElementById('userProfile');
const authButtons = document.getElementById('authButtons');
const logoutBtn = document.getElementById('logoutBtn');
const usernameGreet = document.getElementById('usernameGreet');
const createProfileBtn = document.getElementById('createProfileBtn');

// LocalStorage Arrays
let users = JSON.parse(localStorage.getItem('users')) || [];

// Show Modals
signupBtn.onclick = () => signupModal.style.display = 'flex';
loginBtn.onclick = () => loginModal.style.display = 'flex';

// Close Modals
closeButtons.forEach(btn => {
    btn.onclick = () => {
        signupModal.style.display = 'none';
        loginModal.style.display = 'none';
    };
});

// Sign Up Logic
document.getElementById('signupSubmit').onclick = () => {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;

    if (!username || !email || !password) return alert('Please fill all fields.');

    const alreadyExists = users.some(user => user.email === email);
    if (alreadyExists) return alert('User already exists with this email.');

    const newUser = { username, email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    alert('Signup successful!');
    signupModal.style.display = 'none';
    updateAuthUI();
};

// Login Logic
document.getElementById('loginSubmit').onclick = () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        alert(`Welcome ${foundUser.username}!`);
        loginModal.style.display = 'none';
        updateAuthUI();
    } else {
        alert('Invalid email or password');
    }
};

// Logout Logic
logoutBtn.onclick = () => {
    localStorage.removeItem('currentUser');
    updateAuthUI();
};

// Check Login State on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
});

// Update UI based on Auth State
function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        authButtons.style.display = 'none';
        userProfile.style.display = 'block';
        usernameGreet.textContent = `Hi, ${currentUser.username}!`;
        createProfileBtn.style.display = 'inline-block';
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    } else {
        authButtons.style.display = 'flex';
        userProfile.style.display = 'none';
        usernameGreet.textContent = '';
        createProfileBtn.style.display = 'none';
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    }
}
