import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.infoSection}>
        <strong>Author:</strong> Andrew K. (AKA CursedFork)
      </div>
      <div style={styles.infoSection}>
        <strong>License:</strong> MIT
      </div>
      <div style={styles.infoSection}>
        <strong>Source:</strong>{' '}
        <a
          href="https://github.com/CursedFork"
          style={{ ...styles.link, color: 'black', textDecoration: 'underline' }}
          //style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div style={styles.iconsContainer}>
        <a
          href="https://www.linkedin.com/in/andrew-kozikowski-34a236246/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          aria-label="LinkedIn"
        >
          <img src="/assets/linkedin.png" alt="LinkedIn" style={styles.icon} />
        </a>
        <a
          href="https://github.com/CursedFork"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          aria-label="GitHub"
        >
          <img src="/assets/github.png" alt="GitHub" style={styles.icon} />
        </a>
        <a
          href="/Resume_Kozikowski_SDev.pdf"
          download="Resume_Kozikowski_SDev.pdf"
          style={styles.iconLink}
          aria-label="Download Resume"
        >
          <img src="/assets/download.png" alt="Resume" style={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#d0e9ff',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    fontSize: '0.9rem',
    borderTop: '1px solid #334155',
  },
  infoSection: {
    margin: '6px 0',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  iconsContainer: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  iconLink: {
    display: 'inline-block',
    width: '32px',
    height: '32px',
    color: 'black',
  },
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
};

export default Footer;
