import Link from 'next/link';
import styles from './Header.module.css';

export default function Navigation() {
  return (
    <header role="banner" aria-label="Next-Apollo" className={styles.header}>
      <nav role="menubar" className={styles.nav}>
        <div className={styles.wrapper}>
          <ul role="menubar" className={styles.navbar}>
            <li role="menuitem" className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li role="menuitem" className={styles.navItem}>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
