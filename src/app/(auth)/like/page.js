'use client'
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaRegThumbsUp } from "react-icons/fa6";

const Like = () => {
    const [reaction, setReaction] = useState(null)
    const changeReaction = (newReaction) => {
        setReaction(reaction === newReaction ? null : newReaction)
    }
    return (
        <div>
            <div className='m-2 flex flex-row gap-3'>
                <FaRegThumbsUp onClick={() => changeReaction('like')} />
                <FaRegThumbsUp onClick={() => changeReaction('like')} />
                <FaRegThumbsUp onClick={() => changeReaction('like')} />
                <FaRegThumbsUp onClick={() => changeReaction('like')} />
            </div>
            <Button className={reaction == 'like' ? 'text-blue-400 font-semibold' : null}
                onClick={() => changeReaction('like')}><FaRegThumbsUp /> Like</Button>
        </div>
    )
}

export default Like