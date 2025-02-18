import { Link, useNavigate } from 'react-router-dom'
import './styles/NavBar.css'
const NavBar = () => {

    const navigate=useNavigate()

    function navigateToHome(){
        navigate('/menu')

    }
    
  return (
     <div className="flex">
         <div className="nw-64 flex-1 navbar-brand">
            <button onClick={navigateToHome} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 brand-logo">Menu Del Restaurante</button>
        </div>

        <div className="justify-center navbar-links">
            <li><Link to='/MenuPges' className="back w-64 flex-initial btn btn-primary px-4 py-2">Volver</Link></li>
        </div>
    </div>
  )
}

export default NavBar