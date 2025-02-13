import React from 'react'
import { GiBabyfootPlayers } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { MdBabyChangingStation } from "react-icons/md";
import { GiBabyBottle } from "react-icons/gi";
import { PiBabyBold } from "react-icons/pi";
import { PiBabyCarriageBold } from "react-icons/pi";

const BackGround = () => {
return (
    <div className=' z-[-1]  absolute w-[100%] h-[100%]'>
        <div className='backGround-icons text-[50px] rotate-[0deg] top-[30%] left-[5%] '><GiBabyfootPlayers/></div>
        <div className='backGround-icons text-[50px] rotate-[15deg] top-[60%] left-[85%] '><FaBaby/></div>
        <div className='backGround-icons text-[50px] rotate-0 top-[12%] left-[8%] '><MdBabyChangingStation/></div>
        <div className='backGround-icons text-[60px] rotate-[-20deg] top-[10%] left-[80%] '><GiBabyBottle/></div>
        <div className='backGround-icons text-[80px] rotate-[15deg] top-[80%] left-[2%] '><PiBabyBold/></div>
        <div className='backGround-icons text-[70px] rotate-[35deg] top-[53%] left-[20%] '><PiBabyCarriageBold/></div>
    </div>
)
}

export default BackGround