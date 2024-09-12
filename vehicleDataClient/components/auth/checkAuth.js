function isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token;
}

function redirectToLogin() {
    window.location = 'http://localhost:5173/components/auth/login.html'
}

function checkAuth() {
    if (!isAuthenticated()) {
        redirectToLogin();
    }
}

document.addEventListener('DOMContentLoaded', checkAuth);