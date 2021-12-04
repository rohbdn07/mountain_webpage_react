import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useFetchImages } from '../../../hooks/carousel/useFetchImages';
import { getImagesUrlFromStripe } from '../../../utils/getImages';
import { AutoPlaySwipeableViews } from './AutoPlaySwipeableViwes';

const HeroBannerSwipeable = () => {
  // useFetchImages() returns an object with original and thumbnail images
  const { original: carouselImages } = useFetchImages();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const imageUrlPath = getImagesUrlFromStripe(carouselImages);

  // console.log('carouselImages', carouselImages);
  const maxSteps = carouselImages?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {carouselImages.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 350,
                  display: 'block',
                  Width: 400,
                  overflow: 'hidden',
                  width: '100%',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
                src={imageUrlPath.length > 0 && imageUrlPath[index].imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default HeroBannerSwipeable;
