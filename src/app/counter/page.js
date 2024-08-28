'use client'
import { decrement, increment } from '@/redux/counterSlice'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='flex gap-2'>
                <Button color="primary" aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    Increment
                </Button>

                <span>{count}</span>

                <Button color="primary" aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </div>
        </div>
    )
}
export default Counter