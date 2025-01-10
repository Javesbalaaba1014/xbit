export const calculateMaturityDate = (investmentDate: string): Date => {
  const date = new Date(investmentDate);
  date.setMonth(date.getMonth() + 1);
  return date;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getRemainingDays = (maturityDate: Date): number => {
  const now = new Date();
  const diff = maturityDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}; 