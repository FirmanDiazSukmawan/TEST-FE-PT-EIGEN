export const getDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short', 
    year: 'numeric',
  };

  return date.toLocaleDateString('id-ID', options); 
};
