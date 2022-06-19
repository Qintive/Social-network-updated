import { Typography } from '@material-ui/core'
import React from 'react'
import Preloader from '../../../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return (
      <Preloader />
    )
  }

  return <div className={classes.grid}>
    <div className={classes.poster}>
      <img src='https://stihi.ru/pics/2015/04/25/5860.jpg' />
    </div>
    <div className={classes.poster} />
    <div className={classes.avatar}>
      <img src={props.avaPhoto} />
    </div>
    <div className={classes.gridArea}>
      <div className={classes.statusProfile}>
      <Typography variant='h6'>
          <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} putPhoto={props.putPhoto} />
        </Typography>
      </div>
      <div>
        <Typography variant='h6'>
          Name: Developer Develov
        </Typography>
        <Typography variant='h6'>
          Age: 21
        </Typography>
        <Typography variant='h6'>
          City: Moscow
        </Typography>
      </div>
    </div>
  </div>
}
export default ProfileInfo;