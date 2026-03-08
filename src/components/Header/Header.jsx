import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logoTitle}>
        <i className="fa-solid fa-truck-fast"></i> SHIPNETIC
      </h1>

      <button className={styles.hamburger} id="hamburger-btn">
        <i className="fa-solid fa-bars"></i>
      </button>

      <ul className={styles.navigation} id="nav-menu">
        <li><a href="#Home">Home</a></li>
        <li><a href="index.html">Tracking</a></li>
        <li><a href="#Contact">Contact Us</a></li>
      </ul>
    </div>
  )
}

export default Header