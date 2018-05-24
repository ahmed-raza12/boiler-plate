import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DriverForm1 from './Driver1';
import DriverForm2 from './Driver2';
import VehicalIcon from 'react-icons/lib/md/directions-car';



/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class StepperContainer extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1,
    });
    window.scrollTo(0, 0);
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <DriverForm1 funPass={this.handleNext} /> ;
      case 1:
        return <div> <DriverForm2 finish={this.handleNext} goBack={this.handlePrev}/> </div> ;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const stepStyle = {
        // backgroundColor: '#057060',
        // margin : '10px 10px',
        marginTop : 50,
        // width : '200px',
        // border: '1px solid black',
        // borderRadius: 3,
        padding: '3px 15px',

    }

    const labelStyle = {
      color: '#057060',
      fontSize : 25
    }

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step style={stepStyle}>
            <StepLabel style={labelStyle}> Driver #1</StepLabel>
          </Step>
          <Step style={stepStyle}>
            <StepLabel  style={labelStyle}>Driver #2</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                {/* <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 1 ? 'Submit' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StepperContainer;