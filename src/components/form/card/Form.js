import * as React from 'react';
import './styles.css';
import Alert from '@mui/material/Alert';
import messageToServiceProvider from '../../../services/common/PostService';

/**
 *
 * @returns {React.Component}  Form component for the card form.
 */
const BasicTextFields = () => {
  const [userInput, setUserInput] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  //form error handling
  const [formError, setFormError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  /**
   * @function handleChange handle the user input
   * @param event
   */
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  /**
   * @function resetCredentials reset the user's credentials
   * update the state with empty values.
   * @return void
   */
  const resetUserInput = () => {
    setUserInput({
      name: '',
      email: '',
      message: ''
    });
  };

  /**
   * @function handleSubmit handle the form submission to backend(strapi).
   * @param {*} event  event object
   * @returns  void
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //check if the form is valid
      if (userInput.name === '' || userInput.email === '' || userInput.message === '') {
        setFormError('Please fill all the fields');
        return;
      }
      // it send the user's input(data) to the backend service(strapi)
      //in order to send contact request,and get the response(http) back.
      const response = await messageToServiceProvider.post('/forms', userInput);
      // console.log(response);

      checkFormSubmittedOrNot(response);
      resetUserInput();
    } catch (error) {
      console.log(error);
      setFormError('Something went wrong');
      setSuccess(false);
    }
  };

  //check if the form is submitted or not and update the state accordingly.
  const checkFormSubmittedOrNot = (response) => {
    if (response.statusText === 'OK' && response.status === 200) {
      setSuccess(true);
      setFormError('Form submitted successfully');
      setTimeout(() => {
        setFormError(null);
      }, 4000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="input_title">
          <p>Contact us for more details</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="Your name.."
                value={userInput.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <input
                type="email"
                id="lname"
                name="email"
                placeholder="Your last name.."
                value={userInput.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-75">
              <textarea
                id="subject"
                name="message"
                placeholder="Write something.."
                style={{ maxHeight: '100px' }}
                value={userInput.message}
                onChange={handleInputChange}></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
        {formError && <Alert severity={success ? 'success' : 'error'}>{formError}</Alert>}
      </div>
    </>
  );
};

export default BasicTextFields;
