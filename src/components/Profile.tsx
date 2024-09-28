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
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto mt-20">
      <h2 className="mb-5 text-xl text-gray-600 font-semibold">Perfil de Usuario</h2>
      {user ? (
        <div className="text-center bg-white p-5 rounded-lg shadow-md w-full">
          <div className="flex justify-center mb-4">
            <img 
              src={user.photoURL} 
              alt="User Avatar" 
              className="w-24 h-24 rounded-full object-cover" 
            />
          </div>
          <p className="text-lg text-gray-600 font-bold">{user.name}</p>
          <p className="text-md text-gray-600">{user.email}</p>
          <button 
            onClick={handleLogout} 
            className="mt-5 px-4 py-2 bg-red-500 text-white rounded-lg transition duration-300 hover:bg-red-600 focus:outline-none"
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
