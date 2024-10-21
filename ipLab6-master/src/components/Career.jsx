import React from 'react';
import './styles.css';

const Careers = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Careers@VESIT</h1>
      </div>
      <div className="content">
        <div className="vacancy">
          <h2>Vacancy for Post of Professor, Associate Professor, Assistant Professor</h2>
          <p>Last date: 6/1/2024</p>
          <ul>
            <li>Indian Express_UGC Advertisement</li>
            <li>UGC Advertisement Loksatta</li>
          </ul>
        </div>
        <div className="rules">
          <h2>Faculty Appointment Rules</h2>
          <ol>
            <li>MU CONCOL 2021 Rules</li>
            <li>Mumbai University New Equivalence</li>
            <li>CIRCULAR NO. 11</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Careers;