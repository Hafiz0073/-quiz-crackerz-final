import React from 'react';
import Button from 'react-bootstrap/Button';


const OPtion = ({ option, validation }) => {
    return (
        <div>
            <li className='mb-3'>  <Button variant="outline-primary" size="lg" onClick={() => validation(option)} value="Input" type="radio" >{option}</Button></li>
        </div>
    );
};

export default OPtion;