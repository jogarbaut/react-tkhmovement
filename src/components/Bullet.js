const Bullet = ({ title, subtitle, time }) => {
  return (
    <article className="relative pl-8 pb-8 pt-0 w-full justify-start">
      <div className="absolute h-full w-[1px] bg-primary-500 left-0 top-0"></div>
      <div className="absolute h-3 w-3 bg-primary-500 -left-1.5 top-0"></div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-small text-primary-500">{subtitle}</p>
      <p className="text-slate-500">{time}</p>
    </article>
  )
}

export default Bullet
