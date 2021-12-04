import * as React from 'react';
import Card from '@mui/material/Card';
import { Alert, Button, FormGroup, Input } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import newsletterImage from '../../../assets/images/newspaperImage03.jpg';
import axios from 'axios';

/**
 * @description SubscribeForm component is used to render the subscribe form
 * for the newsletter subscription.
 * @returns {React.Component}  SubscribeForm
 */
export default function SubscribeForm() {
  const [email, setEmail] = React.useState('');

  //form error handling
  const [formError, setFormError] = React.useState(null);

  const [success, setSuccess] = React.useState(false);

  /**
   * @function handleChange handle the user input
   * @param event
   */
  const handleInputChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(email);
  };

  /**
   * @function resetCredentials reset the user's credentials
   * update the state with empty values.
   * @return void
   */
  const resetUserInput = () => {
    setEmail('');
  };

  /**
   * @function handleSubmit handle the form submission to backend(strapi).
   * @param {*} event  event object
   * @returns  void
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (email === '' || email === null || email === undefined || !email.includes('@')) {
        setFormError('Please fill all the fields');
        return;
      }
      console.log(email);
      const response = await axios.post('http://localhost:1337/newsletters', { email });
      console.log(response);

      checkFormSubmittedOrNot(response);
      resetUserInput();
    } catch (error) {
      console.log(error);
      setFormError('Something went wrong');
      setSuccess(false);
    }
  };

  const checkFormSubmittedOrNot = (response) => {
    if (response.statusText === 'OK' && response.status === 200) {
      setSuccess(true);
      setFormError('You have successfully subscribed to our newsletter');
      setTimeout(() => {
        setFormError(null);
      }, 4000);
    }
  };
  return (
    <>
      {formError && <Alert severity={!success ? 'error' : 'success'}>{formError}</Alert>}
      <Card
        sx={{
          bgcolor: '#001d3d',
          color: '#ffffff',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
        }}>
        <CardContent>
          <Typography
            variant="h3"
            color={'white'}
            sx={{
              fontSize: '2rem',
              textAlign: 'center',
              paddingBottom: '1rem'
            }}>
            Subscribe to our newsletter
          </Typography>
          <Card
            sx={{
              component: 'div',
              maxWidth: 900,
              margin: 'auto',
              height: 'fit-content',
              textAlign: 'center',
              zIndex: 1,
              opacity: 1,
              // bgcolor: '#ffc300',
              backgroundImage: 'url( ' + newsletterImage + ' )',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'
            }}>
            <CardContent sx={{ padding: '1rem', zIndex: 1, fontWeight: '20px' }}>
              <Typography
                variant="body1"
                gutterBottom
                color="#ffffff"
                sx={{
                  flex: 1,
                  maxWidth: 700,
                  margin: 'auto'
                }}>
                Sign up to our newsletter to get the latest news and updates.
              </Typography>
            </CardContent>
            <FormGroup row>
              <FormGroup
                sx={{
                  flex: 1,
                  maxWidth: 600,
                  margin: 'auto',
                  bgcolor: '#001d3d',
                  opacity: 0.75
                }}>
                <Input
                  type={'email'}
                  placeholder={'Enter you email...'}
                  autoFocus={false}
                  sx={{ color: 'white' }}
                  name={'email'}
                  value={email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </FormGroup>
            <CardContent>
              <Typography
                variant="body2"
                color="#ffffff"
                sx={{
                  flex: 1,
                  maxWidth: 400,
                  margin: 'auto'
                }}>
                Subscribe to our newsletter to receive the latest news and updates about our
                products.
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'block', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                sx={{ color: 'white', bgcolor: '#001d3d' }}
                // disabled={!email}
                onClick={handleSubmit}>
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
