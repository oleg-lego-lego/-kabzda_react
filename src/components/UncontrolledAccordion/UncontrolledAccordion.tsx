import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const onClickHandler = () => dispatch({type: TOGGLE_COLLAPSED})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <>
            <h3 onClick={props.onClick}>{props.title}</h3>
        </>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
