import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import { Alert, Button, FormGroup, Input } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import newsletterImage from '../../../assets/images/newspaperImage03.jpg';

/**
 * @description Form component for the newsletter subscription form.
 * @param {*} onSubmit - Function to be called when the form is submitted.
 * @param {*} onChange - Function to be called when the form is changed.
 * @param {*} error - Error message to be displayed.
 * @param {*} loading - Boolean to indicate if the form is loading.
 * @param {*} success - Boolean to indicate if the form was successfully submitted.
 * @param {*} email - Email address to be displayed in the form.
 * @returns {React.Component} - Returns a React component.
 */
const Form = ({ onSubmit, formError, success, email, handleInputChange }) => {
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
              fontSize: '1.5rem',
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
                color="black"
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
                  opacity: 0.85,
                  padding: '0rem'
                }}>
                <Input
                  type={'email'}
                  placeholder={'Enter you email...'}
                  autoFocus={false}
                  sx={{ color: 'white', border: 'none' }}
                  name={'email'}
                  value={email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </FormGroup>
            <CardContent>
              <Typography
                variant="body2"
                color="black"
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
                onClick={onSubmit}>
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formError: PropTypes.string,
  success: PropTypes.bool,
  email: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired
};

export default Form;
