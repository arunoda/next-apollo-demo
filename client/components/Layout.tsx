import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import {SkipToContent} from './SkipToContent';
import styles from './Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.pageWrapper}>
      {/* Skip-top content for screen readers and better accessibility */}
      <SkipToContent />

      <Header />

      <main role="main" id="main-content" className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
