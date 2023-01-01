// import React from 'react';

import React, { useState } from 'react';
import OPtion from '../Option/OPtion';
import './QuizOption.css'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const QuizOption = ({ qz }) => {
    const { name, correctAnswer, id, question, options, total } = qz;
    const questionSlice = question.slice(3, -4);
    // console.log(options[0]);
    const validation = (option) => {
        const correct = (correctAnswer === option)
        console.log(correct, option)
        if (correct) {
            alert('your ans is correct')
        } else {
            alert('Wrong Answer')
        }
        // console.log(correctAnswer);
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // console.log(qz)

    return (
        <div className='quiz-container'>


            <h4>{questionSlice}</h4>
            <div className='quiz-option-container'>
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
                <div className='hero-icon'>
                    <>
                        <FontAwesomeIcon icon={faEye} onClick={handleShow}></FontAwesomeIcon>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Correct Answer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {correctAnswer}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
            </div>


        </div>

    );
};

export default QuizOption;