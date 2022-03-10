import React, { useEffect,useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, defaultTheme, darkTheme } from "./theme";
import HomePage from "./pages/HomePage/HomePage";


function App() {
    const [theme] = useState('light');
    const isDarkTheme = theme === "dark";
    
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
            <Router>
                <GlobalStyles />
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
