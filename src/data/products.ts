export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Water Purification Systems',
    category: 'Water Treatment',
    description: 'Advanced water purification systems for pharmaceutical and laboratory applications.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Type I/II/III Water', 'UV Sterilization', 'TOC Reduction', 'USP Compliant']
  },
  {
    id: 2,
    name: 'RO Systems',
    category: 'Reverse Osmosis',
    description: 'High-efficiency reverse osmosis systems for pure water production.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High Recovery Rate', 'Low Operating Cost', 'Automated Operation', 'Remote Monitoring']
  },
  {
    id: 3,
    name: 'EDI Systems',
    category: 'Electrodeionization',
    description: 'Electrodeionization systems for continuous high-purity water production.',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Chemical-Free Operation', 'Consistent Quality', 'Low Maintenance', 'Energy Efficient']
  },
  {
    id: 4,
    name: 'DI Systems',
    category: 'Deionization',
    description: 'Deionization systems for removing ionic impurities from water.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High Purity Output', 'Regenerable Resins', 'Cost Effective', 'Scalable Design']
  },
  {
    id: 5,
    name: 'Ultrafiltration Systems',
    category: 'Filtration',
    description: 'Advanced ultrafiltration for removing bacteria and endotoxins.',
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['0.01 Micron Filtration', 'Pyrogen Removal', 'High Flow Rate', 'Easy Maintenance']
  },
  {
    id: 6,
    name: 'UV Sterilization Units',
    category: 'Sterilization',
    description: 'UV-based water sterilization systems for microbial control.',
    image: 'https://images.pexels.com/photos/3825574/pexels-photo-3825574.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['254nm UV-C Light', 'No Chemical Addition', 'Instant Disinfection', 'Low Power Consumption']
  },
  {
    id: 7,
    name: 'Storage & Distribution',
    category: 'Infrastructure',
    description: 'Complete storage and distribution systems for purified water.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Sanitary Design', 'Temperature Control', 'Circulation Loops', 'Validation Support']
  },
  {
    id: 8,
    name: 'Multi-Effect Distillation',
    category: 'Distillation',
    description: 'Multi-effect distillation systems for WFI production.',
    image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['WFI Quality', 'Energy Efficient', 'cGMP Compliant', 'Automatic Operation']
  },
  {
    id: 9,
    name: 'Pure Steam Generators',
    category: 'Steam Generation',
    description: 'High-quality pure steam generators for sterilization applications.',
    image: 'https://images.pexels.com/photos/4993237/pexels-photo-4993237.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Pyrogen-Free Steam', 'Quick Start-up', 'Compact Design', 'Full Automation']
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
