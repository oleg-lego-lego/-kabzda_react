import React from "react";
import {RatingValuePropsType} from "../../App";

type RatingPropsType = {
    value: RatingValuePropsType
    onClick: (value: RatingValuePropsType) => void
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValuePropsType) => void
    value: RatingValuePropsType
}

const Star = (props: StarPropsType) => {
    return (
        <span onClick={() => props.onClick(props.value)}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}