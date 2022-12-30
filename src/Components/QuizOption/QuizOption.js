import React from 'react';

const QuizOption = ({ qz }) => {
    const { name, correctAnswer, id, question, options } = qz;
    // const [options] = [qz];
    console.log(qz)

    return (
        <div>
            <h2>ans{correctAnswer}</h2>
            <h2>Name{name}</h2>
            <h2>id{id}</h2>
            <h2>qes{question}</h2>
            <h2>option{options}</h2>
        </div>

    );
};

export default QuizOption;