import { format } from "date-fns"


export const formatDMY = (date: Date) => {
  return format(date,'dd-MM-yyy')
}