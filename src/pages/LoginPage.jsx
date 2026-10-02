import { useState } from 'react';
import axios from 'axios';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('https://reqres.in/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      onLogin();
    } catch (err) {
      alert('Login failed — email/password check karein');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginPage;