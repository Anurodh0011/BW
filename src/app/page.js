'use client'
import { Button } from '@nextui-org/react';
import { useState } from "react";

import React from 'react'

const Home = () => {
  let [num, setNum] = useState(10);
  const handleIncrement = () => {
    setNum(num + 1)
  }
  const handleDecrement = () => {
    setNum(num - 1)
  }
  return (
    <div>
      <Button onClick={handleDecrement}>-</Button>
      {num}
      <Button onClick={handleIncrement}>+</Button>
    </div>
  )
}




export default Home