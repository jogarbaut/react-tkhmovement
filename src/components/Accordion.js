import AccordionItem from "./AccordionItem"

const Accordion = ({ items }) => {
  return (
    <div className="border-x border-t rounded">
      {items.map((item) => {
        return <AccordionItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default Accordion
