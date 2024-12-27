import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import logo from "../assets/ajayLogo.png"
import { SiGmail } from 'react-icons/si'
import { IoMdCall } from 'react-icons/io'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>

        <div className='flex flex-shrink-0 items-center'>
          <a href="/">
            <img className="w-12 md:w-16 lg:w-20 h-auto" src={logo} alt="logo" />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ajaybabare/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn/>
            </a>
            <a href="https://github.com/Ajay-Babare" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@javalogist" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="mailto:ajaybabare97@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail/>
            </a>
            <a href="https://maps.app.goo.gl/39CESz2pfAgfetBXA" target="_blank" rel="noopener noreferrer">
              <FaLocationDot />
            </a>
            <a href="tel:+918381092080" target="_blank" rel="noopener noreferrer">
              <IoMdCall />
            </a>
        </div>
    </nav>
  )
}

export default Navbar