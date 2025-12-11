export interface Amenity {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  address: string;
  mapLink: string;
}