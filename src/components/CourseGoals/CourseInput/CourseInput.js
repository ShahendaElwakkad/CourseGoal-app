import React, { useState } from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';


// const FormControl=styled.div`
//   margin: 0.5rem 0;
  
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background: ${props => props.invalid ? '#ffd7d7' : 'transparent'}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  //h3ml useState in case l user 3ml submit l haga unvalid or not( true or false).
  const[isValid, setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    //3shan lma adoos Add goal mn gher ma akteb l course goal, maytzwdsh pattern taht.
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
    <div
      className={`${styles['form-control']} ${!isValid && styles.invalid}`}
    >
      <label>Course Goal</label>
      <input type="text" onChange={goalInputChangeHandler} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
);
};


export default CourseInput;
