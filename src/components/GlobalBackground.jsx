import React from 'react'
import { BACKGROUND_CONFIG } from '../constants'
import StarsCanvas from './canvas/Stars/Stars'

const GlobalBackground = () => {
  const hasStars = BACKGROUND_CONFIG.hero === 'stars' || BACKGROUND_CONFIG.sections === 'stars'

  if (!hasStars) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-50 w-screen h-screen pointer-events-none">
      <StarsCanvas alwaysRender={true} />
    </div>
  )
}

export default GlobalBackground
