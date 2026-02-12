import { BOOKING_URLS } from "../constants"

const largeServiceDataArray = [
  {
    id: 1,
    title: "New Patients Evaluation & Treatment",
    subtitle: "Recommended for first time patients",
    description_1: "A thorough history of the chief complaint and other health history screening will be done.",
    description_2: "Followed by a movement assessment, breath work, soft tissue (IASTM and cupping if needed), adjustment, and corrective exercises.",
    link: BOOKING_URLS.NEW_PATIENT
  }]

const smallServiceDataArray = [
  {
    id: 1,
    title: "Follow Up",
    subtitle: "Returning patients",
    description_1: "Take the next step towards building physical and mental resiliency.",
    description_2: "",
    link: BOOKING_URLS.FOLLOW_UP
  },
  {
    id: 2,
    title: "Adjustment Only",
    subtitle: "",
    description_1: "For patients who want to come in solely for adjustments. Soft tissue will be done. Although this option is offered, we highly recommend the full follow-up. Exercises and load are what will create long term change.",
    description_2: "",
    link: BOOKING_URLS.ADJUSTMENT_ONLY
  },
  {
    id: 3,
    title: "Cupping & Blading",
    subtitle: "",
    description_1: "",
    description_2: "",
    link: BOOKING_URLS.CUPPING_BLADING
  },
  {
    id: 4,
    title: "Consult",
    subtitle: "",
    description_1: "Unsure and want to have a brief discussion about possible options? Consults are available!",
    description_2: "",
    link: BOOKING_URLS.CONSULT
  }
]

export { largeServiceDataArray, smallServiceDataArray }