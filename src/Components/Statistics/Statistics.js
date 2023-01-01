import React, { useContext, useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

const Statistics = () => {
    const [quizStatics, setQuizeStatistics] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const topicDataLoad = data.data.data;
                const quizStatistics = topicDataLoad.map(qzStatistics => {
                    const topicQzStatistics = {
                        id: qzStatistics.id,
                        name: qzStatistics.name,
                        total: qzStatistics.total
                    }
                    return topicQzStatistics;
                })
                console.log(quizStatistics)
                setQuizeStatistics(quizStatistics)
            }
            );

    }, [])



    return (
        <div>

            <LineChart width={400} height={300} padding={200} data={quizStatics} margin={{ top: 25, right: 10, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>

    );
};

export default Statistics;