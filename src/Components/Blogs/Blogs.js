import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <div>
                <div>
                    <h4>How Does Context API Work?</h4>
                    <p>
                        Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
                    </p>
                    <p>
                        Using context, we can avoid passing props through intermediate elements:
                    </p>
                    <p>
                // Context lets us pass a value deep into the component tree
                        // without explicitly threading it through every component.
                        // Create a context for the current theme (with "light" as the default).
                        const ThemeContext = React.createContext('light');

                        ///class App extends React.Component 
                        {/* //render() {
                    // Use a Provider to pass the current theme to the tree below.
                    // Any component can read it, no matter how deep it is.
                    // In this example, we're passing "dark" as the current value.
                    //return (
                    //<ThemeContext.Provider value="dark">
                    /// <Toolbar />
                    //</ThemeContext.Provider>
                    );
                }
                } */}
                    </p>
                </div>
                <div>
                    <h4>Purpose of react router</h4>
                    <p>We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

                        A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its applications, check out this blog: Navigate React Router programmatically.</p>
                </div>

            </div>
        </Container>
    );
};

export default Blogs;