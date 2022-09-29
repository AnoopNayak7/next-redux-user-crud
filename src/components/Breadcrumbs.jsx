import React from 'react'

const Breadcrumbs = () => {
  return (
    <>
        <div className='flex gap-2 text-md mt-2 font-medium'>
            <div>Dashboard</div>
            <span>{'>>'}</span>
            <div className='text-primary font-medium'>Users</div>
        </div>
    </>
  )
}

export default Breadcrumbs