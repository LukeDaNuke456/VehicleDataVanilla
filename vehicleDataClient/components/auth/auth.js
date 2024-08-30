import { API_BASE_URL } from '../../enviorments/enviorments-local';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// Your auth logic here


// auth.js or main.js
class Auth {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById('register').addEventListener('submit', this.register.bind(this));
  }

  async register(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      console.log(username + " " + password + " " + email);

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
