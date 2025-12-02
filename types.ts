import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Specialty {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
}

export interface BeforeAfterItem {
  title: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string; // Keeping generic if not provided, or removing
  cro: string;
  instagram: string;
}

export interface AboutContent {
  title: string;
  description: string;
  details: string[]; // For structure/equipment
  mission: string;
  vision: string;
  values: string;
}
