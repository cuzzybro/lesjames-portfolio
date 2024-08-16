"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = () => {
  return (
    <TypeAnimation
        sequence={[
            'Test Engineer', 2000,
            'Automation Engineer', 2000,
            'Test Professional', 2000
        ]}
        wrapper='span'
        speed={80}
        deletionSpeed={90}
    />
  )
}

export default TypeWriter