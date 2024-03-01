import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (

        <div>
            <Navbar />
            <div className='container'>
                <h3>Bem-vindo ao sistema de CRUD!!</h3>
                <h5>Esse projeto tem como objetivo principal consumir uma api.</h5>
            </div>
        </div>
    )
}

export default Home
