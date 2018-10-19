import React from 'react';
import styles from './table.scss';

const Table = (props) => {

  return (
      <div>
          <h2>Subtitle here</h2>
          <table className={styles.table}>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Sign</th>
                  </tr>
              </thead>
              <tbody>
                {props.listOfPersons}
              </tbody>
          </table>
      </div>
  );
}

export default Table;
