import React from 'react'
import classes from './Friends.module.css';


const Friends = (props) => {

    return (
        <div className={classes.friends}>
            <div className={classes.item}>
                <img src={props.photo} className={classes.photo}></img>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
        </div>
    )

}

export default Friends;