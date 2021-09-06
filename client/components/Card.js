import styles from './Card.module.css'

const Component = props => {
  const user = props.user
  return (
    <div className={styles.card}>
      <h3 className={styles.card__name}>{user.name}</h3>
      <div className={styles.card__email}><strong>Email</strong>: {user.email}</div>
      <div className={styles.card__address}><strong>Address</strong>: {user.address}</div>
      <div className={styles.card__phone}><strong>Phone</strong>: {user.phone}</div>
    </div>
  )
}

export default Component
