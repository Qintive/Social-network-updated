import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import ProfileInfo from './MyPost/Post/ProfileInfo/ProfileInfo'


const Profile = (props) => {

  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
      users={props.users} avaPhoto={props.avaPhoto} />
    <MyPostContainer />
  </div>
}

export default Profile;