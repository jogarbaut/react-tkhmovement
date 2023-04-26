import logo from "../assets/logo.png"
import FooterLink from "./FooterLink"
import { FaInstagram, FaYelp, FaGoogle } from "react-icons/fa"
import NavButton from "./NavButton"

const Footer = () => {
  return (
    <footer className="bg-black py-16 w-full">
      <div className="max-w-5xl mx-auto justify-between w--full md:flex-row flex flex-col gap-8 px-8">
        <div className="basis-1/3">
          <div className="max-w-[240px] bg-white p-4 mb-4">
            <img
              src={logo}
              alt="logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-start gap-4">
        <NavButton to={'https://www.instagram.com/dr.takhuynh.dc/'}>
          <FaInstagram />
        </NavButton>
        <NavButton to={'https://www.yelp.com/biz/south-bay-rehab-and-performance-cupertino-5'}>
          <FaYelp />
        </NavButton>
        <NavButton to={'https://www.google.com/search?hl=en-US&gl=us&q=South+Bay+Rehab+and+Performance,+21629+Stevens+Creek+Blvd,+Cupertino,+CA+95014&ludocid=2591568071588085950&lsig=AB86z5V4qEBt6z_a03fT7OKh5Ryw#lrd=0x808fb58e41eadc7b:0x23f7196e2e4080be,1'}>
          <FaGoogle />
        </NavButton>
      </div>
        </div>
        <div className="basis-1/4 flex flex-col gap-1">
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <FooterLink to="home">Home</FooterLink>
          <FooterLink to="about">About</FooterLink>
          <FooterLink to="clinic">Clinic Information</FooterLink>
          <FooterLink to="services">Services & Scheduler</FooterLink>
          <FooterLink to="videos">Videos</FooterLink>
          <FooterLink to="testimonials">Testimonials</FooterLink>
        </div>
        <div className="basis-1/3 flex flex-col gap-1">
        <h4 className="text-white font-bold mb-4">Contact</h4>
          <div className="text-gray-300">Email: takhuynhmovement@gmail.com</div>
          <address className="text-gray-300">Address: 21629 Stevens Creek Boulevard, Cupertino, CA 95014 (USA)</address>
          <div className="text-gray-300">Phone Number: +1 (650) 564-3538</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
