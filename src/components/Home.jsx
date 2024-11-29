import React from 'react'
import AssignmentVid from './videos/AssignmentVid.mp4'
import AssignmentVid2 from './videos/AssignmentVid2.mp4'

function Home() {
    return (
       <div>
         <div className='flex flex-col justify-center md:flex-row '>
            <div className='w-[100%] flex justify-end mt-10'>
                <video src={AssignmentVid2} className='w-full md:w-[85%] ' autoPlay muted></video>
            </div>
            <div className='w-[100%]  flex justify-start items-center mt-3 md:mt-10'>
                <div className='ml-4'>
                    <h1 className='text-3xl md:text-5xl text-gray-800 font-bold w-full mb-5'> Your <span className='text-[var(--primary-blue)]'>Read Aloud</span> app</h1>
                    <p className='text-lg md:text-2xl w-full md:w-[80%]'>Get short reading passages in English regularly.
                        Read, get feedback, improve your reading.</p>
                </div>
            </div>
        </div>

         <div className='flex flex-col justify-center md:flex-row '>
            <div className='w-[100%] flex justify-end mt-10'>
                <video src={AssignmentVid} className='w-full md:w-[78%] ' autoPlay muted loop></video>
            </div>
            <div className='w-[100%]  flex justify-start items-center mt-3 md:mt-10'>
                <div className='mx-4 md:mx-auto w-full md:w-[70%]  '>
                    <h1 className='text-3xl md:text-4xl text-gray-800 font-medium w-full mb-5'> Get Feedback</h1>
                    <p className='text-lg md:text-2xl w-full md:w-[85%]'>The app will highlight the <span style={{backgroundColor:'#ff0'}}>mistakes</span> and give you a score</p>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Home
