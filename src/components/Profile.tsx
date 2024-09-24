import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  name: string;
  photoURL: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate("/login");
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px', 
      backgroundColor: '#f4f4f4', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      maxWidth: '400px', 
      margin: 'auto'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Perfil de Usuario</h2>
      {user ? (
        <div style={{ 
          textAlign: 'center', 
          backgroundColor: '#ffffff', 
          padding: '20px', 
          borderRadius: '10px', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px'
          }}>
            <img 
              src={user.photoURL} 
              alt="User Avatar" 
              style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                objectFit: 'cover'
              }} 
            />
          </div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{user.name}</p>
          <p style={{ fontSize: '16px', color: '#666' }}>{user.email}</p>
          <button 
            onClick={handleLogout} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#db4437', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '20px',
              transition: 'background-color 0.3s',
              outline: 'none'
            }}
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default Profile;
