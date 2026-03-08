import './navbar.css'
import Logo from '../logo/logo.jsx'
import DynamicNavigation from '../components/lightswind/dynamic-navigation.jsx'

const links = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'more', label: 'More', href: '/more', hasDropdown: true },
  { id: 'book-call', label: 'Book a Call', href: '/book-call' }
]

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar-center">
        <DynamicNavigation 
          links={links}
          theme="dark"
          glowIntensity={5}
          onLinkClick={(id) => console.log("Clicked:", id)}
        />
      </div>
    </nav>
  )
}

export default Navbar

