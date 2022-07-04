import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

const AppTitle = () => {
    return (
        <>This is App</>
    )
}

const Rating = () => {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

const Star = () => {
    return (
        <div>star</div>
    )
}

const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

const AccordionTitle = () => {
    return (
        <div>
            <h3>меню</h3>
        </div>
    )
}

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
