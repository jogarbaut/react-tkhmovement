import classNames from "classnames"
import AnchorLink from "react-anchor-link-smooth-scroll"

const NavLink = ({ to, children, selectedPage }) => {

  return (
    <AnchorLink 
      href={`#${to}`}
      className={`${selectedPage === to ? "text-primary-500 underline underline-offset-4" : ""} transition duration-300 hover:text-primary-500`}
    >
      {children}
    </AnchorLink>
  )
}

export default NavLink