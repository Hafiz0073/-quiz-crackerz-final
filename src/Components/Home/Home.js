import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Home = () => {
    const topic = useLoaderData();


    return (
        <Container>
            <div style={{ backgroundColor: 'lightcyan', padding: '20px' }}>
                <h2>Learning Pro</h2>
                <p>You will Develope your career the below topics</p>
            </div>
            <div style={{ margin: '27px' }}>

                <Row xs={1} md={2} lg={3} className="g-4 flex ">
                    {
                        topic.data.map(topic =>
                            // console.log(topic))
                            <Topic
                                key={topic.id}
                                topic={topic}
                            ></Topic>)

                    }
                </Row>
            </div>

        </Container>
    );
};

export default Home;