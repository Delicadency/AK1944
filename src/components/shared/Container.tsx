import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="mx-auto w-full max-w-[767px] px-[16px] tablet:max-w-[1279px] desktop:max-w-[1440px] desktop:px-[24px]">
        {children}
    </div>
  )
}

export default Container