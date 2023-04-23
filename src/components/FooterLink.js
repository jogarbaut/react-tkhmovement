import AnchorLink from "react-anchor-link-smooth-scroll"

const FooterLink = ({to, children}) => {
  return (
    <AnchorLink
      href={`#${to}`}
      className="text-gray-300 transition duration-300 hover:text-primary-500"
    >
      {children}
    </AnchorLink>
  )
}

export default FooterLink
