import React, { Fragment } from 'react'
import cardStyle from './exercise-card.module.css';


const ExerciseCard = props => {

    let exercises;
    if (props.exercises) {
        exercises = 
        (<div className={cardStyle.exercises}>
            {props.exercises.map(({ exercise}, i) =>
            <li className={cardStyle.exercise} key={i + 10}>{exercise}</li>)}
        </div>
        );
    }

    return (
        <Fragment key={props.id}>
                <li className={cardStyle.boxsection}>
                    <div className={cardStyle.box}>
                        <div className={cardStyle.header}>
                            <div className={cardStyle.topicbox}><h3 className={cardStyle.topic}>{props.topic}</h3></div>

                            <div className={cardStyle.timebox}><span className={cardStyle.time}>{props.time}</span></div>
                        </div>

                        {exercises}

                    </div>
                </li>
        </Fragment>
    )
}

export default ExerciseCard;

