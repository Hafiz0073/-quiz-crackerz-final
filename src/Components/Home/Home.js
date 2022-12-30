import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Home = () => {
    const topic = useLoaderData();
    // const [cart, setCart] = useState([])
    // const [quiz, setQuiz] = useState([])
    // const handleAddToCart = (tshirt) => {
    //     const exist = cart.find(ts => ts._id === tshirt._id);
    //     if (exist) {
    //         alert('tshirt already added')
    //     }
    //     else {
    //         const newCart = [...cart, tshirt]
    //         setCart(newCart);
    //         alert('Successfully added')
    //     }
    //     // console.log(tshirt)

    // }
    // const handleLearnTopic = (topic) => {
    //     const exist = quiz.find(qz => qz.id === topic.id)
    //     console.log(topic, quiz)
    //     return handleLearnTopic;
    // }
    // const [topic1, setTopic] = useState(topic.data);
    // // console.log(topic1)
    // const handleAddToCart = (topic) => {
    //     const exist = topic1.find(ts => ts.id === topic.id);

    //     const newCart = [...topic1, topic]
    //     setTopic(newCart);


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