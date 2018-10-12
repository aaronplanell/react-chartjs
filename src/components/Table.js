import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Table = (props) => {
  const { data } = props;
  const keys = Object.keys(data);
  return (
    <div className="tableClassNameOfComponent">
      <table className="table" style={{margin: '10px'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Month</th>
            <th>Year</th>
            <th>Price/m2</th>
          </tr>
        </thead>
        <tbody>
          {
            keys.map( (item, index) => {
              const { year, month, price_m2 } = data[item];
              const background = index%2 === 1 ? 'white' : '#F9F9F9';
              return(
                <tr key={item} style={{textAlign: 'left', background }}>
                  <td style={{fontWeight: 'bold'}}>{item}</td>
                  <td>{month}</td>
                  <td>{year}</td>
                  <td>{price_m2}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.object.isRequired
};

export default Table;
