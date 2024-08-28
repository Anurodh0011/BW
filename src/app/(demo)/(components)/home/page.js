'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import Demo from '../addTask/page'

const Home = () => {

    return (
        <div>
            <Button color="primary" className='m-44' onClick={<Demo />}>
                Add a new task
            </Button>
        </div>
    )
}

export default Home