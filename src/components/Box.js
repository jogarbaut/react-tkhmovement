const Box = ({ title, subtitle, description_1, description_2, icon }) => {
  return (
    <article className="border rounded-xl border-slate-500 text-center p-8 w-full">
      <div>{icon}</div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-primary-500">{subtitle}</p>
      <p className="font-light">{description_1}</p>
      <p className="font-light">{description_2}</p>
    </article>
  )
}

export default Box
