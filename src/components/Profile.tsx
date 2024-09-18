

const Profile = () => {
  const user = {
    name: "Juanito",
    email: "JuanitoElGuapo@outlook.com",
    avatar:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y", // Aquí puedes poner el enlace a la foto de perfil del usuario.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 shadow-md"
        />
        
        {/* User Info */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-700 mb-4">{user.email}</p>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
