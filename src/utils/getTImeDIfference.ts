export const getTimeDifference = (fixtureDate: Date, currentDate: Date) : string => {
  let diff = fixtureDate.getTime() - currentDate.getTime() ;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  let message = '';
  if (days > 0) return message += `${days}D `;
  if (hours > 0) return message += `${hours}h `;
  if (minutes > 0) return message += `${minutes}m `;
  if (seconds > 0) return message += `${seconds}s `;

  return message.trim();
}