export const formatTimeUS = (timestamp: number) => {
  if (checkCurrentTime(timestamp)) {
    return "Now"
  }
  const date = new Date(timestamp * 1000); 
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, hourCycle: 'h12'}).toLowerCase();
}

export const checkCurrentTime = (timestamp: number) => {
  return new Date(timestamp * 1000).getHours() === new Date().getHours();
}

export const getTodaysDayOfWeek = () => {
  return new Date().toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "long" })
}

