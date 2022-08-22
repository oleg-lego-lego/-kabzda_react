import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";
import {DifficultUseMemo, HelpUseMemo} from "./components/UseMemo/UseMemoUseCallback";
import {UseState} from "./components/UseState/UseState";
import {UseEffect} from "./components/useEffect/useEffect";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState(false)

    let items = [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]

    return (
        <div className={"App"}>
            <PageTitle title={'oleg'}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[{title: 'oleg', value: 1},
                           {title: 'dmitri', value: 2},
                           {title: 'kris', value: 3}]}
                       onClick={() => {
                       }}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Select items={items} onChange={() => {}} value={'1'}/>
            <DifficultUseMemo/>
            <HelpUseMemo/>
            <UseState/>
            <UseEffect/>
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
