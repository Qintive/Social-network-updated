import React, { useEffect, useState } from 'react'
import classes from './ProfileInfo.module.css'


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() =>{
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={classes.statusPosition}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={OnStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHook;