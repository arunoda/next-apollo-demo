import React from 'react';
import styles from "./Employees.module.css";

const Employees = ({employees}) => {
  return (
    <>
      <div>
        <div className={styles.employee_container}>
          <div className={styles.employee_text}>Employees Details</div>
        </div>
      </div>
      <div className={styles.row}>
        {employees &&
          employees.map((employee) => (
            <div className={styles.employee_card} key={employee.email}>
              <div className={styles.employee_content}>
                <div className={styles.desc}>
                  <h2>{employee.name}</h2>
                  <h3>Address:</h3>
                  <p>{employee.address}</p>
                  <h3>Phone No:</h3>
                  <p>{employee.phone}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>       
    </>
  );
}

export default Employees;