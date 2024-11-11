import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home({ Menu, Price, recipe, menuImage }) {

  const navigate = useNavigate(); 

  const handleInfo = () => {
    navigate('/Info');
  }
  
  return (
    <div className="flex">
    
      <div className="w-[30vw] h-auto border rounded-md shadow-lg p-4 mx-4 my-6">
        <img 
          src={menuImage} 
          alt="Menu" 
          className="w-full h-[40vh] object-cover rounded-md"
        />
        <div className="text-left mt-4">
          <h1 className="text-2xl font-bold text-orange-900">{Menu}</h1>
          <h2 className="text-xl font-semibold text-green-600">{Price}</h2>
          <p className="text-gray-600 text-sm mb-4">{recipe}</p>
          <button 
            className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition" 
            onClick={handleInfo}
          >
            Order Now
          </button>
        </div>
      </div>

     
      <div className="w-[30vw] mx-4 my-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
