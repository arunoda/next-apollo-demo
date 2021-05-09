import styles from './userCard.module.css';

interface IUserCard {
  userInfo: {
    firstName: string, 
    lastName: string, 
    address: string, 
    email: string, 
    phone: string
  }
}

export const UserCard = (props: IUserCard) => {
  const {firstName, lastName, address, email, phone} = props.userInfo;
  
  return (
      <div className={styles.userCard}>
            <div className={styles.userName}>
                <i className= {`fa fa-user ${styles.logo}`}/>
                  {firstName} {lastName}
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userEmail}>
                    <i className={`fa fa-envelope-o ${styles.logo}`}/>
                    {email}
                </div>
                <div className={styles.userAddress}>
                    <i className={`fa fa-map-marker ${styles.logo}`}/>
                    <div className={styles.userAddressText}>{address}</div>
                </div>
                <div>
                    <i className={`fa fa-mobile ${styles.logo}`}/>
                    {phone}
                </div>
          </div>
      </div>
  );
};

