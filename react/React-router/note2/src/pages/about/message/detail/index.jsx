import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const m = useParams()
    return (
    <div>
        {m.content} 
    </div>
  )
}
