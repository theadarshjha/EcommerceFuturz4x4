// data/filters.ts
export type FiltersType = {
    [key: string]: string[];
  };
  
  export const filters: FiltersType = {
    interior: ['Seat Covers', 'Floor Mats', 'Dash Kits', 'Sun Shades'],
    exterior: ['Bumpers', 'Side Steps', 'Roof Racks', 'Hood Deflectors'],
    camping: ['Tents', 'Sleeping Bags', 'Camping Chairs', 'Coolers'],
    'alloy-wheels': ['Alloy Wheels', 'Wheel Covers', 'Lug Nuts'],
    lighting: ['LED Lights', 'Fog Lights', 'Headlights', 'Tail Lights'],
  };
  