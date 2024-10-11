import React from 'react'
import { RiReactjsLine, RiNodejsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiTailwindcss, SiGithub, SiJavascript } from "react-icons/si";
import { TbBrandCpp, TbSql, TbCube } from "react-icons/tb";
import { FaRegSnowflake, FaAws } from "react-icons/fa";
import { SiApacheairflow, SiApachekafka } from "react-icons/si";


const TechStacks = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h1 className='my-20 text-center text-4xl'>
            Technologies </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className='text-7xl text-cyan-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiNodejsLine className='text-7xl text-green-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiExpress className='text-7xl text-yellow-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className='text-7xl text-green-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandCpp className='text-7xl text-blue-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbSql className='text-7xl text-orange-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiTailwindcss className='text-7xl text-cyan-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiGithub className='text-7xl text-white-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiApacheairflow className='text-7xl text-blue-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaRegSnowflake className='text-7xl text-blue-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbCube className='text-7xl text-red-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaAws className='text-7xl text-white-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiJavascript className='text-7xl text-yellow-400'/>
                  </div>
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiApachekafka className='text-7xl text-white-400'/>
                  </div>
            </div>
    </div>
  )
}

export default TechStacks