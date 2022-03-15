import React, { useEffect,useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, defaultTheme, whiteTheme } from "./theme";
import HomePage from "./pages/HomePage/HomePage";


function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const selectedTheme = localStorage.getItem('theme');
        if (selectedTheme) {
            setTheme(selectedTheme);
        }
    },[])

    const handleSetTheme = (updateTheme) => {
        localStorage.setItem('theme', updateTheme);
        setTheme(updateTheme);
    }

    const isDarkTheme = theme === "dark";
    
    return (
        <ThemeProvider theme={isDarkTheme ? defaultTheme : whiteTheme}>
            <Router>
                <GlobalStyles />
                <Navbar setTheme={handleSetTheme} />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
