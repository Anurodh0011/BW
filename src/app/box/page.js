'use client'
import { changeBackgroundColor, changeShape, increaseWidth, moveRight, moveLeft } from '@/redux/reducerSlice/boxSlice'
import { Button } from '@nextui-org/react'
import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const { padding, width, isCircle, marginLeft, height, margin, borderRadius, backgroundColor } = useSelector((state) => state.box)
    const area = borderRadius ? Math.PI * (width / 2) ** 2 : width * height
    const handleChange = (e) => {
        dispatch(changeBackgroundColor(e.target.value))
    }
    return (
        <div>

            <div
                onClick={() => dispatch(changeShape())}
                style={{
                    position: 'absolute',
                    marginLeft: marginLeft,
                    backgroundColor: backgroundColor, width: width, margin: margin, height: height, borderRadius: borderRadius
                }}>
            </div>
            <input onChange={handleChange} placeholder="Property:value" />
            area is {area}
            <Button onClick={() => dispatch(changeToCircle())}>+</Button>
            <button onClick={() => dispatch(increaseWidth())}>-</button>
            <Button onClick={() => dispatch(moveLeft())}><FaArrowLeft /></Button>
            <Button onClick={() => dispatch(moveRight())}><FaArrowRight /></Button>
            <Button onClick={() => dispatch(moveUp())}><FaArrowUp /></Button>
            <Button onClick={() => dispatch(moveDown())}><FaArrowDown /></Button>


        </div>
    )
}

export default Box