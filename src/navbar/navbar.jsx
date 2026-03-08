import './navbar.css'
import Logo from '../logo/logo.jsx'
import DynamicNavigation from '../components/lightswind/dynamic-navigation.jsx'

const links = [
  { id: 'home', label: 'Home', href: '#top' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  {
    id: 'more',
    label: 'More',
    hasDropdown: true,
    children: [
      { id: 'about', label: 'About', href: '#about' },
      { id: 'education', label: 'Education', href: '#education' },
      { id: 'research', label: 'Research', href: '#research' }
    ]
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '/resume.pdf',
    isCta: true,
    target: '_blank',
    rel: 'noopener noreferrer'
  }
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
          onLinkClick={(id) => console.log('Clicked:', id)}
        />
      </div>
    </nav>
  )
}

export default Navbar
