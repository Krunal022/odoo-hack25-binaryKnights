const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const closeButtons = document.querySelectorAll('.close');
const userProfile = document.getElementById('userProfile');
const authButtons = document.getElementById('authButtons');

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

// Sign Up
document.getElementById('signupSubmit').onclick = () => {
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const role = document.getElementById('signupRole').value;

  if (!username || !email || !password) return alert('Fill all fields');

  const user = { username, email, password, role };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Signup successful!');
  signupModal.style.display = 'none';
};

// Login
document.getElementById('loginSubmit').onclick = () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (savedUser && savedUser.email === email && savedUser.password === password) {
    alert(`Welcome ${savedUser.username}!`);
    loginModal.style.display = 'none';
    authButtons.style.display = 'none';
    userProfile.style.display = 'block';
  } else {
    alert('Invalid email or password');
  }
};
