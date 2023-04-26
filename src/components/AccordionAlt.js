import Button from "./Button"

const AccordionAlt = ({ items }) => {

  const handleScheduleClick = (link) => {
    window.location.href = link
  }

  const renderedItems = items.map((item, index) => {
    return (
      <article key={item.id}>
        <div className="flex p-3 bg-gray-50 border-b items-center justify-between">
          {item.title}
        </div>
        <div className="border-b p-5 flex gap-8">
          <div className="mx-auto">
          <div className="font-light mb-4 italic">{item.subtitle}</div>
          <div>{item.description}</div>
          </div>
          <div className="my-auto">
            <Button primary onClick={() => handleScheduleClick(item.link)}>
              Schedule
            </Button>
          </div>

        </div>
      </article>
    )
  })

  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default AccordionAlt
