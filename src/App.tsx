import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'www'}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={3}/>
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
