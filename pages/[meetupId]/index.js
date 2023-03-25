import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {
  return (
      <MeetupDetail
      img='https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_960_720.jpg'
      title = 'First Meetup'
      address = "some address, some city 13245"
      description = "this is a description for first meetup"
      />
    )
}

export default MeetupDetails