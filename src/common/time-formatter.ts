function formatTime(seconds: number | undefined): string {
  if (seconds === undefined) return '';
  const totalSecs = Math.floor(seconds);
  const sec = totalSecs % 60;
  const min = Math.floor(totalSecs / 60) % 60;

  if (totalSecs < 60 * 60) {
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }
  const hour = Math.floor(totalSecs / 3600);
  return `${hour}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

export default formatTime;
