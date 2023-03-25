import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title: 'A first meetup', 
        image: 'https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_960_720.jpg',
        address: 'Some address 5, 2324 City'
    },
    {
        id:'m2',
        title: 'A Second meetup', 
        image: 'https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_960_720.jpg',
        address: 'Some address 5, 2324 City'
    },
    {
        id:'m3',
        title: 'A third meetup', 
        image: 'https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_960_720.jpg',
        address: 'Some address 5, 2324 City'
    },
    {
        id:'m4',
        title: 'A fourth meetup', 
        image: 'https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_960_720.jpg',
        address: 'Some address 5, 2324 City'
    },

]

const HomePage = (props) => {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>

    // <MeetupList meetups={props.meetups} />
 
  )
}

export async function getStaticProps() {
    // fetch data from the api 
    // fetch data from the file system 

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage