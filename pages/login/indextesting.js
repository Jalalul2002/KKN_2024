import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('Logging in...');
      const response = await fetch('https://api.uinsgd.ac.id/salam/v2/auth/mahasiswa/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        console.log('Login successful!');
        const data = await response.json();
        console.log('Response data:', data);
  
        // Store the token in localStorage
        localStorage.setItem('token', data.token);
  
        // Store the username in sessionStorage
        sessionStorage.setItem('username', username);
  
        // Check if the user already exists in MySQL before saving
        const userExists = await checkUserExists(username);
  
        if (userExists) {
          console.warn('User with the same username already exists!');
          // Handle the situation where the user already exists, e.g., show an error message
        } else {
          // Save to MySQL database via API
          await saveToMySQL(username, password);
  
          // Redirect to the home page upon successful login
          router.push('/login/success');
        }
      } else {
        console.error('Login failed.');
        const errorData = await response.json();
        console.error('Error:', errorData.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  const checkUserExists = async (username) => {
    try {
      // Send a request to check if the user already exists in MySQL
      const apiResponse = await fetch('/api/auth/checkUserExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
  
      if (apiResponse.ok) {
        const data = await apiResponse.json();
        return data.exists; // Assuming the API returns an object with an 'exists' property
      } else {
        console.error('Error checking user existence:', await apiResponse.json());
        return false; // Assume the user does not exist in case of an error
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false; // Assume the user does not exist in case of an error
    }
  };  

  const saveToMySQL = async (username, password) => {
    try {
      // Send data to another API for insertion
      const apiResponse = await fetch('/api/auth/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (apiResponse.ok) {
        console.log('Data saved to MySQL via API:', await apiResponse.json());
      } else {
        console.error('Error saving to MySQL via API:', await apiResponse.json());
      }
    } catch (error) {
      console.error('Error saving to MySQL via API:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
