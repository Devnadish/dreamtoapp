import React from 'react'

async function page({searchParams}:{searchParams: {search: string}}) {
    const {search} = await searchParams
  return (
    <div className='flex flex-col items-center justify-center h-screen'>{search}</div>
  )
}

export default page