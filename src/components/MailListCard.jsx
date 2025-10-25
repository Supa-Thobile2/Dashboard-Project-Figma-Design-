import React from 'react'
import { FaLink, FaStar } from 'react-icons/fa'

function MailListCard() {
  return (
    <div className='border-2 p-4 flex items-center justify-between'>
        <div>
            <input type="checkbox" name="" id="" />
        </div>
        <div>
            <FaStar/>
        </div>
        <div>
            Kraken
        </div>
        <div>
            <p>Your account</p>
        </div>
        <div>
            <FaLink/>
        </div>
        <div>
            date
        </div>

    </div>
  )
}

export default MailListCard