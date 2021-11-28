import * as React from 'react';
// import Header from '../../common/header/Header';
import './styles.css';

const BasicTextFields = () => {
  return (
    <>
      <div className="container">
        {/* <Header title={'Contact us for more details'} /> */}
        <div className="input_title">
          <p>Contact use for more details</p>
        </div>
        <form>
          <div className="row">
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>

          <div className="row">
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ maxHeight: '100px' }}></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicTextFields;
