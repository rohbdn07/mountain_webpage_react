import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Title = ({ companyName, description }) => {
  return (
    <div className="header_title">
      <p className="header_title_name">{companyName}</p>
      <p className="header_title_desc">{description}</p>
    </div>
  );
};

const CompanyName = () => {
  return (
    <React.Fragment>
      <Title
        companyName={'Mountain Ski Resort'}
        description={'A simple web application for the mountain climbing community'}
      />
    </React.Fragment>
  );
};

export default CompanyName;

Title.propTypes = {
  companyName: PropTypes.string,
  description: PropTypes.string
};
