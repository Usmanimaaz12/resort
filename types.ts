import React from 'react';

export interface NavigationItem {
    label: string;
    href: string;
  }
  
  export interface Amenity {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
  }
  
  export interface Villa {
    id: number;
    name: string;
    price: string;
    capacity: string;
    size: string;
    image: string;
    features: string[];
  }
  
  export interface Review {
    id: number;
    name: string;
    location: string;
    rating: number;
    text: string;
    avatar: string;
  }

  export interface Experience {
    id: number;
    title: string;
    description: string;
    image: string;
  }