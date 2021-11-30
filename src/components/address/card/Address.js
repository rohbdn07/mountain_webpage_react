import React from 'react';
import './styles.css';

const Address = () => {
  return (
    <>
      <div className="card">
        <div className="card_body">
          <h5 className="card_title">Our Address</h5>
          <p className="card_text">
            <span className="font-weight-bold">Address:</span>
            <br />
            <span>
              15356 N.W. 83rd Street
              <br />
              Helsinki, Finland
              <br />
              053471
            </span>
          </p>
          <div className="address_details_body">
            <p>
              It is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
