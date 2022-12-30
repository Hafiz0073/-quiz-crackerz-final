import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = () => {
    const quiz = useLoaderData().data;
    // const { id, name } = quiz
    // console.log(name)
    return (
        <div>
            <h4 className='text-center'>{quiz.name}</h4>
            {

                quiz.questions.map(qz => <QuizOption
                    key={quiz.id}
                    qz={qz}
                ></QuizOption>)
            }


        </div >
    );
};

export default Quiz;