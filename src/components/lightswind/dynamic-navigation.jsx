import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './dynamic-navigation.css';

function DynamicNavigation({ links, theme = 'dark', glowIntensity = 5, onLinkClick }) {
  const [activeLink, setActiveLink] = useState(links[0]?.id || '');

  const handleClick = (link) => {
    setActiveLink(link.id);
    if (onLinkClick) {
      onLinkClick(link.id);
    }
  };

  // Separate regular links from the CTA button
  const regularLinks = links.filter(link => link.id !== 'book-call');
  const ctaLink = links.find(link => link.id === 'book-call');

  return (
    <nav className={`dynamic-nav dynamic-nav-${theme}`} style={{ '--glow-intensity': glowIntensity }}>
      <div className="nav-links">
        {regularLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(link);
            }}
          >
            <span className="nav-label">{link.label}</span>
            {link.hasDropdown && (
              <span className="nav-dropdown-icon">
                <ChevronDown size={14} />
              </span>
            )}
          </a>
        ))}
      </div>
      {ctaLink && (
        <a
          href={ctaLink.href}
          className="nav-cta-button"
          onClick={(e) => {
            e.preventDefault();
            if (onLinkClick) {
              onLinkClick(ctaLink.id);
            }
          }}
        >
          {ctaLink.label}
        </a>
      )}
    </nav>
  );
}

export default DynamicNavigation;

