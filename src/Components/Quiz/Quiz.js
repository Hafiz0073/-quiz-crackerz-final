import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = () => {
    const quiz = useLoaderData().data.questions;
    // const { id, name } = quiz
    // console.log(name)
    return (
        <div>
            <h2>Quiz Quantity{quiz.length}</h2>
            {
                quiz.map(qz => <QuizOption
                    key={quiz.id}
                    qz={qz}
                ></QuizOption>)
            }


        </div >
    );
};

export default Quiz;