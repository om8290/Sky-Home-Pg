import { Wifi, Zap, Coffee, ShieldCheck, Droplets, UserCheck } from 'lucide-react';
import { Amenity, ContactInfo } from './types';

export const PG_NAME = "Sky Homes PG";
export const PG_TAGLINE = "Your home away from home near SRM University.";

import pgroom1 from "./assets/img1.jpeg";
import pgbuilding from "./assets/img2.jpeg";
import pgfood from "./assets/img3.jpeg";
import pgstudy from "./assets/img4.jpeg";
import pglobby from "./assets/img5.jpeg";
import pgfriends from "./assets/img6.jpeg";
import heroImage from "./assets/new.jpeg";
import newImage from "./assets/new1.jpeg";
import logoImage from "./assets/logo1.png"

export const HEROIMAGE = heroImage
export const NEWIMAGE = newImage
export const LOGOIMAGE = logoImage

export const CONTACT_INFO: ContactInfo = {
  phone1: "+91 9917839363", // Placeholder realistic Indian mobile format
  phone2: "+91 9045021489",
  address: "Ram Vihar, Opp. Aakash Vihar Metro Pillar No 1041, Near SRM Institute of Science and Technology, Modinagar",
  // Constructed Google Maps search query
  mapLink: "https://www.google.com/maps/search/?api=1&query=Ram+Vihar+opp+aakash+vihar+near+srm+institute+of+science+and+technology+modinagar"
};

export const AMENITIES: Amenity[] = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Unlimited fibre internet for your studies and entertainment."
  },
  {
    icon: Zap,
    title: "24/7 Power Backup",
    description: "Uninterrupted power supply so your work never stops."
  },
  {
    icon: Coffee,
    title: "Hygienic Meals",
    description: "Freshly prepared, home-style breakfast, lunch, and dinner."
  },
  {
    icon: Droplets,
    title: "RO Water",
    description: "Clean and safe drinking water available 24/7."
  },
  {
    icon: ShieldCheck,
    title: "Secure Premises",
    description: "CCTV surveillance and secure gated entry."
  },
  {
    icon: UserCheck,
    title: "Daily Housekeeping",
    description: "Clean rooms and hygienic washrooms maintained daily."
  }
];

export const GALLERY_IMAGES = [
  pgroom1,
  pgfriends,
  pgfood,
  pgstudy,
  pglobby,
  pgbuilding,
];

export const AI_SYSTEM_INSTRUCTION = `
You are the virtual manager of Ram Vihar Student PG.
Your goal is to answer questions from potential student tenants or their parents.

Key Details:
- Name: ${PG_NAME}
- Location: ${CONTACT_INFO.address} (Very close to SRM Modinagar)
- Amenities: Wifi, Power Backup, RO Water, Food, Housekeeping, CCTV.
- Atmosphere: Quiet, study-oriented, safe.

Rules:
1. Be polite, professional, and welcoming.
2. If asked about PRICE or RENT, strictly say: "Please contact the owner directly at ${CONTACT_INFO.phone1} or ${CONTACT_INFO.phone2} for the latest room tariffs and availability." Do not guess the price.
3. Emphasize the proximity to SRM Institute (walking distance).
4. Keep answers short and concise (under 3 sentences usually).
`;
