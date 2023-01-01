import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic;
    const topicNavigate = useNavigate();
    const handleTopicNavigate = () => {
        topicNavigate(`/quiz/${id}`)
    }
    return (



        <Card border="success" style={{ width: '28rem', marginRight: '80px' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button onClick={handleTopicNavigate} variant="primary">Go Learning</Button>
            </Card.Body>
        </Card>










    );
};

export default Topic;