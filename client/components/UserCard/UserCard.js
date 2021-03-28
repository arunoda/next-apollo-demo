import styles from './UserCard.module.css';

const UserCard = ({firstname, lastname, address, email, phone}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <p>
            {firstname} {lastname}
          </p>
        </div>

        <div className={styles.cardText}>
          <p> {address}</p>
        </div>

        <div className={styles.cardMeta}>
          <a href="mailto: " className={styles.email}>
            {' '}
            {email}
          </a>
        </div>

        <div className={styles.cardMeta}>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
