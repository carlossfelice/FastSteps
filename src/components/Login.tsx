import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        name: user.displayName || 'Usuario', // Agregar nombre de usuario si está disponible
        photoURL: user.photoURL || 'https://via.placeholder.com/50', // URL de la foto de perfil o un placeholder
      }));
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        name: user.displayName || 'Usuario',
        photoURL: user.photoURL || 'https://via.placeholder.com/50',
      }));
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <form onSubmit={handleLogin} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          style={{ 
            padding: '10px', 
            margin: '5px 0', 
            borderRadius: '5px', 
            border: '1px solid #ddd', 
            width: '100%', 
            maxWidth: '300px' 
          }} 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          style={{ 
            padding: '10px', 
            margin: '5px 0', 
            borderRadius: '5px', 
            border: '1px solid #ddd', 
            width: '100%', 
            maxWidth: '300px' 
          }} 
        />
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            marginTop: '10px',
            width: '100%',
            maxWidth: '300px'
          }}
        >
          Iniciar sesión
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <button 
        onClick={handleGoogleSignIn} 
        style={{ 
          padding: '10px', 
          backgroundColor: '#4285F4', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          width: '100%',
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
