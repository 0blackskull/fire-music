/*
Input: secondsValue: number
Return: string
*/

export function secondsToTimeTag(secondsValue) {
  const secondsInt = Math.floor(secondsValue);
  const minutesValue = Math.floor(secondsInt / 60);
  const seconds = secondsInt % 60;

  return `${String(minutesValue).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
} 