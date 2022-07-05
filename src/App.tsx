import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
