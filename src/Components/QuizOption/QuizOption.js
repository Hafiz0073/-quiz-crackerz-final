// import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import React, { useState } from 'react';

const QuizOption = ({ qz }) => {
    const { name, correctAnswer, id, question, options } = qz;
    const questionSlice = question.slice(3, -4);
    const validation = (correctAnswer) => {
        console.log(correctAnswer);
    }

    console.log(qz)

    return (
        <div>
            {/* <h2>ans{correctAnswer}</h2> */}
            {/* <h2>Name{name}</h2>
            <h2>id{id}</h2> */}
            <h4>{questionSlice}</h4>


            {
                options.map(option =>

                    <li className='mb-3'>  <Button variant="secondary" size="lg" onClick={() => validation(correctAnswer)} value="Input" type="radio" >{option}</Button></li>)
            }



        </div>

    );
};

export default QuizOption;