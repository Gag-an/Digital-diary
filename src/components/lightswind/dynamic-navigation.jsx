import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './dynamic-navigation.css';

function DynamicNavigation({ links, theme = 'dark', glowIntensity = 5, onLinkClick }) {
  const [activeLink, setActiveLink] = useState(links[0]?.id || '');
  const [openDropdownId, setOpenDropdownId] = useState('');

  const handleClick = (link) => {
    setActiveLink(link.id);
    if (onLinkClick) {
      onLinkClick(link.id);
    }
  };

  const regularLinks = links.filter((link) => !link.isCta);
  const ctaLink = links.find((link) => link.isCta);

  const navigateToSection = (href) => {
    if (!href || !href.startsWith('#')) return;

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <nav className={`dynamic-nav dynamic-nav-${theme}`} style={{ '--glow-intensity': glowIntensity }}>
      <div className="nav-links">
        {regularLinks.map((link) => {
          if (link.children?.length) {
            const isOpen = openDropdownId === link.id;
            const isParentActive = link.children.some((child) => child.id === activeLink);

            return (
              <div
                key={link.id}
                className="nav-dropdown"
                onMouseLeave={() => setOpenDropdownId('')}
              >
                <button
                  type="button"
                  className={`nav-link nav-link-button ${isParentActive ? 'active' : ''}`}
                  onClick={() => {
                    setOpenDropdownId(isOpen ? '' : link.id);
                    handleClick(link);
                  }}
                >
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-dropdown-icon">
                    <ChevronDown size={14} />
                  </span>
                </button>

                {isOpen && (
                  <div className="nav-dropdown-menu">
                    {link.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.href}
                        className="nav-dropdown-item"
                        onClick={(e) => {
                          if (child.href?.startsWith('#')) {
                            e.preventDefault();
                            navigateToSection(child.href);
                          }
                          handleClick(child);
                          setOpenDropdownId('');
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => {
                if (link.href?.startsWith('#')) {
                  e.preventDefault();
                  navigateToSection(link.href);
                }
                setOpenDropdownId('');
                handleClick(link);
              }}
            >
              <span className="nav-label">{link.label}</span>
            </a>
          );
        })}
      </div>

      {ctaLink && (
        <a
          href={ctaLink.href}
          target={ctaLink.target}
          rel={ctaLink.rel}
          className="nav-cta-button"
          onClick={() => {
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
