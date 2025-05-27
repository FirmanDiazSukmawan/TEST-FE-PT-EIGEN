export const cleanContent = (text?: string): string => {
  if (!text) return 'No Content';

 
  const needsCleaning = /\[\+\d+ chars\]|\r?\n/.test(text);

  if (!needsCleaning) return text;
  

  return text
    .replace(/\[\+\d+ chars\]/g, '')
    .replace(/\r?\n/g, ' ')
    .trim();
};
