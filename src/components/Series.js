import React from 'react'
import Header from './Header'
import HomePageMovie from './HomePageMovie'
import HomePageList from './HomePageList'

function Series() {
    return (
        <div className='w-full h-screen text-black bg-black'>
            <Header />
            <div className='w-full h-screen bg-black'>
                <HomePageMovie />
                <HomePageList />
            </div>
        </div>
    )
}

export default Series