import NotFoundImage from '../assets/notFound.jpg'; // Ajusta la ruta según tu estructura de proyecto

const NotFound = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>
      <img src={NotFoundImage} alt="404 Not Found" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}

export default NotFound;
