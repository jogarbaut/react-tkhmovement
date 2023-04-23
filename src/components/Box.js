import { GoLocation, GoClock, GoDeviceMobile} from 'react-icons/go'

const Box = ({ title, subtitle, description_1, description_2, icon }) => {
  let renderedIcon

  switch (icon){
    case 'GoLocation':
      renderedIcon = <GoLocation className='text-2xl text-white font-bold' />
      break
    case 'GoClock':
      renderedIcon = <GoClock className='text-2xl text-white font-bold' />
      break
    case 'GoDeviceMobile':
      renderedIcon = <GoDeviceMobile className='text-2xl text-white font-bold' />
      break
    default:
      renderedIcon = <></>
  }

  return (
    <article className="rounded border bg-gray-50 text-center p-8 w-full flex flex-col gap-2">
      <div className='flex justify-center'>
        <div className='p-4 bg-primary-500 rounded'>{renderedIcon}</div>
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-secondary-500 font-semibold">{subtitle}</p>
      <p className="">{description_1}</p>
      <p className="">{description_2}</p>
    </article>
  )
}

export default Box
