// import React from 'react';

import React, { useState } from 'react';
import OPtion from '../Option/OPtion';
import './QuizOption.css'

const QuizOption = ({ qz }) => {
    const { name, correctAnswer, id, question, options } = qz;
    const questionSlice = question.slice(3, -4);
    console.log(options[0]);
    const validation = (option) => {
        const correct = (correctAnswer === option)
        console.log(correct, option)
        if (correct) {
            alert('your ans is correct')
        } else {
            alert('false')
        }
        console.log(correctAnswer);
    }

    // console.log(qz)

    return (
        <div className='quiz-container'>

            <h4>{questionSlice}</h4>
            <div className='option-container' >

                {
                    options.map((option, idx) =>
                        <OPtion
                            key={idx}
                            option={option}
                            validation={validation}
                        ></OPtion>
                    )


                }
            </div>


        </div>

    );
};

export default QuizOption;