export interface IEvent {
  _id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  category: 'Conference' | 'Workshop' | 'Competition' | 'Seminar';
  isPast: boolean;
}