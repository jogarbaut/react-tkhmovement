import React from "react"

const NavButton = ({ children, to }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="h-7 w-7 bg-primary-500 border border-primary-500 flex items-center text-white justify-center rounded-full hover:bg-white hover:text-primary-500 p-2 cursor-pointer duration-300"
    >
      {children}
    </a>
  )
}

export default NavButton
