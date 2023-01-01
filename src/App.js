import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import Topic from './Components/Topic/Topic';
import Quiz from './Components/Quiz/Quiz';
import Container from 'react-bootstrap/Container';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizID',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`),
          element: <Quiz></Quiz>
        },

        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },

        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }

      ]
    },
    {
      path: '*',
      element: <div><h2>There is no Data</h2></div>
    }


  ])
  return (

    <Container>
      <RouterProvider router={router}></RouterProvider>

    </Container>

  );
}

export default App;
