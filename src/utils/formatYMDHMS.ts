export const formatYMDHMS = (date: Date): Date => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',  
    second: '2-digit',
    timeZoneName: 'short'
  }).format(date);
}