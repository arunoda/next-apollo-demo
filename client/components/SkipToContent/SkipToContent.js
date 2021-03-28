import classnames from 'classnames';
import styles from './SkipToContent.module.css';

const SkipToContent = () => {
  return (
    <a
      className={classnames(styles.skipToContent, styles.srOnly)}
      href="#main-content"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
