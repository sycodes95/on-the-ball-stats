import { format } from "date-fns"


export const formatYMD = (date: Date) => {
  return format(date,'yyyy-MM-dd')
}