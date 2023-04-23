import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const AccordionAlt = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <div key={item.id}>
        <div className="flex p-3 bg-gray-50 border-b items-center justify-between">
          {item.title}
        </div>
        <div className="border-b p-5">{item.description}</div>
      </div>
    )
  })

  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default AccordionAlt
