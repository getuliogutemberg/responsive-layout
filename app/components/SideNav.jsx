import React from 'react'

const SideNav = () => {
    return (
        <div className='flex-none w-20 bg-purple-400 flex flex-col justify-between p-4' >
        <div>
          <p>Nav Start</p>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>

        </div>
        <p>Nav end</p>
        </div>
    )
}

export default SideNav