import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';
import Statistics from '../Statistics/Statistics';
import './Quiz.css'


const Quiz = () => {
    const quiz = useLoaderData().data;
    // const { id, name, total } = quiz
    // console.log(name)
    // const quizlength = quiz.questions.length;
    // console.log(quizlength)
    return (

        <div >
            <h4 className='topic-title'>Quiz Of : {quiz.name}</h4>
            {

                quiz.questions.map((qz, idx) => <QuizOption
                    key={idx}
                    qz={qz}
                ></QuizOption>)
            }

        </div >
    );
};

export default Quiz;