import React from 'react'
import { RingLoader } from 'react-spinners'

function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <RingLoader color="#632EE3" size={150} />
    </div>
  )
}

export default Loading
