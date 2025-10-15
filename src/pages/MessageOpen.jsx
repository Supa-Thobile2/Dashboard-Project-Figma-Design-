import React from 'react'
import { MobileHeader } from '../components'
import { FaEllipsis, FaPhone, FaWindows } from 'react-icons/fa6'

function MessageOpen() {
  return (
    <div>
        <MobileHeader/>
        <div>
            <h3>Message</h3>
            <div>
                <div className='flex  justify-between gap-2'>
                    <div>image</div>
                    <div className='flex item-center flex-col'>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='flex  justify-between gap-2'>
                        <div><FaPhone/></div>
                        <div>









                            <FaWindows/>
                        </div>
                        <div><FaEllipsis/></div>
                    </div>
                </div>
                <div>
                    <p>Today</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageOpen