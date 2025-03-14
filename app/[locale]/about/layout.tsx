import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="py-12 sm:py-24 px-6 max-w-6xl">
        {children}
    </div>
  )
}

export default layout