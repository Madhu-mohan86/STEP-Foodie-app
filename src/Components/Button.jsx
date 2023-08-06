import React from 'react'

export default function Button({content,role,color}) {
  return (
    <div>
      <button className={`bg-[${color}] text-white font-Inter text-lg font-semibold px-3 py-2 w-full`}>{content}</button>
    </div>
  )
}
