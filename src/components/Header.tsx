import logo from '../assets/FS-logo5.png';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className='bg-white  h-24 flex place-content-stretch'>
        <img src={logo} alt="Logo" />
        <Navbar/>
        </header>
  )
}
