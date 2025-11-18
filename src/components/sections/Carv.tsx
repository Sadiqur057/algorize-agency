import React from 'react'
import CurvedLoop from '../ui/CurvedLoop'

export default function Carv() {
  return (
    <div className=''>


<CurvedLoop marqueeText="Be ✦ Creative ✦ With ✦ Algorize ✦ Tech ✦" />

{/* // With custom props */}
{/* <CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
  speed={3}
  curveAmount={500}
  direction="right"
  interactive={true}
  className="custom-text-style"
/> */}

{/* // Non-interactive with slower speed */}
{/* <CurvedLoop 
  marqueeText="Smooth Curved Animation"
  speed={1}
  curveAmount={300}
  interactive={false}
/> */}

    </div>
  )
}
