'use client'
import { Button, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'

const Demo = () => {
  let [num, setNum] = useState(0)
  const handleChange = (opereation) => {
    opereation === "inc" ? setNum(num + 1) : setNum(num - 1)
  }
  return (
    <div className='flex items-center justify-center w-screen h-screen p-7 bg-slate-600'>

      <div className='w-1/3 h-2/4 flex flex-col justify-center items-center gap-4 bg-slate-400 p-1 rounded-lg'>
        Enter the Task Details
        <Input
          isRequired
          type="text"
          label="Task name"
          className="max-w-xs"
        />
        <Textarea
          label="Description(optional)"
          className="max-w-xs"
        />
        <div className='flex gap-3'>
          <Button className='w-14 p-3'>
            Cancel
          </Button>
          <Button color="success" className='w-14 p-3'>
            Add Task
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Demo