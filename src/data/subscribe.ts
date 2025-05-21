/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 16:17:44
 * @LastEditTime: 2025-05-21 16:30:31
 */
interface PricingPlan {
  title: string;
  offFor: string;
  left: number;
  price: number;
  originalPrice: number;
  cheapest: boolean;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    title: 'Starter',
    offFor: '50% off for new users',
    left: 7,
    price: 29,
    originalPrice: 58,
    cheapest: false,
    description: 'Receive 40 professional headshots featuring 5 distinct backgrounds and attire options.',
    features: [
      '40 professional headshots',
      'Multiple backgrounds and attire options',
      'High-quality, AI-generated images'
    ],
    buttonText: 'Get your 40 headshots'
  },
  {
    title: 'Professional',
    offFor: '50% off for new users',
    left: 7,
    price: 39,
    originalPrice: 78,
    cheapest: false,
    
    description: 'Obtain 120 high-quality headshots with 12 unique settings and outfit combinations.',
    features: [
      '120 professional headshots',
      'Multiple backgrounds and attire options',
      'High-quality, AI-generated images'
    ],
    buttonText: 'Get your 120 headshots',
    isPopular: true
  },
  {
    title: 'Executive',
    offFor: '50% off for new users',
    left: 7,
    price: 59,
    originalPrice: 118,
    cheapest: true,
    description: 'Acquire 250 premium headshots showcasing 25 diverse backgrounds and wardrobe selections.',
    features: [
      '250 professional headshots',
      'Multiple backgrounds and attire options',
      'High-quality, AI-generated images'
    ],
    buttonText: 'Get your 250 headshots'
  }
];
