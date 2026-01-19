export interface CardProps {
  children?: React.ReactNode;
  // Add more card-specific props here
}

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  // Add more button-specific props here
}

// Add more interfaces as needed for the project
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount?: string;
}


interface Review {
  id: string;
  comment: string;
  rating: number;
  author: string;
  createdAt: string;
}

interface ReviewSectionProps {
  propertyId: string;
}