import { API_BASE_URL } from '../../enviorments/enviorments-local';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

class Auth {
  
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.setupEventListeners();
  }

  setupEventListeners() {

    document.addEventListener('DOMContentLoaded', () => {

    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');
    
    if (registerForm) {
      registerForm.addEventListener('submit', this.register.bind(this));
      console.log("found register form");
    }
    
    if (loginForm) {
      loginForm.addEventListener('submit', this.loginUser.bind(this));
      console.log("found login form");
    }

    }); 

  }

  async register(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      
      const response = await fetch(`${this.apiBaseUrl}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        
        this.displayToaster('Registration Successful. Redirecting to login...', 'text-bg-success');
        
        const data = await response.json();
        
        console.log('Registration successful:', data);
        
        this.successfulRegisterRedirect();
      
      }

      else {
      
        const errorData = await response.json();
        console.log(errorData);
        this.displayToaster(errorData.error || 'Registration failed', 'text-bg-danger');
      
      }

    } catch (error) {

      console.error('Registration Failed', error);
      // Optionally handle errors, e.g., show an error message
      this.displayToaster(error.toString(), 'text-bg-danger');
    
    }
  }

  async loginUser(event) {
    
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {

      const response = await fetch(`${this.apiBaseUrl}/api/loginUser`, {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ username, password }),
      
      });

      if (response.ok) {
        
        this.displayToaster('Login Successful.', 'text-bg-success');
        
        const data = await response.json();

        localStorage.setItem('authToken', data.user.token);
        window.location.href = '../home/home.html';
        console.log('Login successful:', data);
        
        // this.successfulRegisterRedirect();
      
      }

      else {
      
        const errorData = await response.json();
        console.log(errorData);
        this.displayToaster(errorData.error || 'Login failed', 'text-bg-danger');
      
      }

    }

    catch (error) {

      console.error('Registration Failed', error);
      this.displayToaster(error.toString(), 'text-bg-danger');

    }



  }

  async displayToaster(message, bgClass) {

    const toaster = document.getElementById('registerToast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toaster.className = 'toast align-items-center ' + bgClass.toString() + ' border-0 position-fixed'

    const toast = new bootstrap.Toast(toaster);
    toast.show();

  }

  async successfulRegisterRedirect() {
    const delay = 4000;
    setTimeout(() => {
      window.location.href = '/components/auth/login.html';
    }, delay);
  }

}

// Initialize Auth with your API base URL
const auth = new Auth(`${API_BASE_URL}`);
