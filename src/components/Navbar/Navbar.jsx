import React, { Component } from 'react';
import navbarLinks from './navbarLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/pro-light-svg-icons';
import socialIcons from './socialIcons';
import styles from './Navbar.module.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Matt Millard</h1>
        <div className={styles.menuIcon} onClick={this.handleClick}>
          <FontAwesomeIcon
            icon={this.state.clicked ? faXmark : faBars}
            className={`${styles.menuIcon} ${styles.displayNone} ${this.state.clicked ? styles.rotateIcon : ''}`}
          />
        </div>
        <ul className={styles.links}>
          {navbarLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <ul className={styles.socialIcons}>
          {socialIcons.map((icon, index) => {
            return (
              <li key={index}>
                <a href={icon.url}>
                  <FontAwesomeIcon icon={icon.brand} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
