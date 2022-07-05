import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)

    return (
        <div className={"App"}>
            <OnOff/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
