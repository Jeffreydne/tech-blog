const loginHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#emailLogin').value.trim();
    const userPassword = document.querySelector('#passwordLogin').value.trim();
  
    if (email && userPassword) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#userName').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const userPassword = document.querySelector('#passwordSignup').value.trim();
  
    if (userName && email && userPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ userName, email, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupHandler);