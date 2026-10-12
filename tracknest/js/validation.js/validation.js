function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// Registration Validation
function handleRegister(e) {
  e.preventDefault();
  let isValid = true;
  const nameInput = document.getElementById('regName');
  const emailInput = document.getElementById('regEmail');
  const passInput = document.getElementById('regPass');

  if (!nameInput.value.trim()) {
    document.getElementById('regNameField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('regNameField').classList.remove('error');
  }

  if (!validateEmail(emailInput.value.trim())) {
    document.getElementById('regEmailField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('regEmailField').classList.remove('error');
  }

  if (passInput.value.trim().length < 6) {
    document.getElementById('regPassField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('regPassField').classList.remove('error');
  }

  if (isValid) {
    showToast('Account registered successfully! Redirecting...');
    setTimeout(() => window.location.href = 'index.html', 1200);
  }
}

// Sign In Validation
function handleLogin(e) {
  e.preventDefault();
  let isValid = true;
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPass');

  if (!validateEmail(emailInput.value.trim())) {
    document.getElementById('loginEmailField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('loginEmailField').classList.remove('error');
  }

  if (!passInput.value.trim()) {
    document.getElementById('loginPassField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('loginPassField').classList.remove('error');
  }

  if (isValid) {
    showToast('Signed in successfully!');
    setTimeout(() => window.location.href = 'index.html', 800);
  }
}

// Contact Us Validation
function handleContact(e) {
  e.preventDefault();
  let isValid = true;
  const name = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const subject = document.getElementById('contactSubject');
  const message = document.getElementById('contactMessage');

  if (!name.value.trim()) {
    document.getElementById('contactNameField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('contactNameField').classList.remove('error');
  }

  if (!validateEmail(email.value.trim())) {
    document.getElementById('contactEmailField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('contactEmailField').classList.remove('error');
  }

  if (!subject.value.trim()) {
    document.getElementById('contactSubjectField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('contactSubjectField').classList.remove('error');
  }

  if (message.value.trim().length < 10) {
    document.getElementById('contactMessageField').classList.add('error');
    isValid = false;
  } else {
    document.getElementById('contactMessageField').classList.remove('error');
  }

  if (isValid) {
    showToast('Message sent successfully!');
    document.getElementById('contactForm').reset();
  }
  // Helper for safe relative redirection
function redirectTo(page) {
  const path = window.location.pathname;
  const basePath = path.substring(0, path.lastIndexOf('/') + 1);
  window.location.href = basePath + page;
}

// Update handleRegister success:
if (isValid) {
  showToast('Account registered successfully! Redirecting...');
  setTimeout(() => redirectTo('index.html'), 1200);
}

// Update handleLogin success:
if (isValid) {
  showToast('Signed in successfully!');
  setTimeout(() => redirectTo('index.html'), 800);
}
}