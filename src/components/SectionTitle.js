const SectionTitle = ({ children }) => {
  return (
    <div className="text-center w-full mb-16 mt-32 pt-16">
      <div className="w-[2px] h-[60px] bg-primary-500 mx-auto"></div>
      <h2 className="text-3xl font-bold my-8">{children}</h2>
      <div className="w-[120px] h-[2px] bg-primary-500 mx-auto"></div>
    </div>
  )
}

export default SectionTitle
