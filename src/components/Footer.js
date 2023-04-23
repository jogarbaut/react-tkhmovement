import logo from "../assets/logo.png"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <footer className="bg-black py-16 w-full">
      <div className="max-w-5xl mx-auto justify-between w--full md:flex-row flex flex-col gap-8 px-8">
        <div className="basis-1/3">
          <div className="max-w-[240px] bg-white p-4">
            <img
              src={logo}
              alt="logo"
              className="w-full h-auto object-contain"
            />
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
