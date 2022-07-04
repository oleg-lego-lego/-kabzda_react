import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'This is App'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={3}/>
            <Accordion title={'меню'}/>
            <Accordion title={'список'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

const PageTitle = (props: any) => {
    return (
        <h1>{props.title}</h1>
    )
}




export default App;
