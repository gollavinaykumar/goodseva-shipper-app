import { Driver, Truck, Trip, Bid, DashboardStats } from '../types';

export const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'Ramesh kamenani',
    avatar: 'https://i.pravatar.cc/150?img=12',
    status: 'assigned',
    hasLicense: true,
    hasInsurance: true,
  },
  {
    id: '2',
    name: 'Suresh Kumar',
    avatar: 'https://i.pravatar.cc/150?img=13',
    status: 'in-transit',
    hasLicense: true,
    hasInsurance: true,
  },
  {
    id: '3',
    name: 'Vijay Singh',
    avatar: 'https://i.pravatar.cc/150?img=14',
    status: 'available',
    hasLicense: true,
    hasInsurance: false,
  },
];

export const mockTrucks: Truck[] = [
  {
    id: '1',
    vehicleNumber: 'AP32 H 5643',
    location: 'HYD, Kukatapalli',
    status: 'in-transit',
    hasRegistration: true,
    hasInsurance: true,
    driver: mockDrivers[0],
    latitude: 17.4948,
    longitude: 78.3917,
  },
  {
    id: '2',
    vehicleNumber: 'TN09 AB 1234',
    location: 'Chennai, T Nagar',
    status: 'in-transit',
    hasRegistration: true,
    hasInsurance: true,
    driver: mockDrivers[1],
    latitude: 13.0418,
    longitude: 80.2341,
  },
  {
    id: '3',
    vehicleNumber: 'KA05 MN 7890',
    location: 'Bangalore, Whitefield',
    status: 'available',
    hasRegistration: true,
    hasInsurance: true,
    driver: mockDrivers[2],
    latitude: 12.9698,
    longitude: 77.7499,
  },
];

export const mockTrips: Trip[] = [
  {
    id: '1',
    tripId: 'ID 8274455',
    from: 'Hyderabad',
    to: 'Visakhapatnam',
    startDate: '10, Jul 2025',
    endDate: '14 Jul,2025',
    status: 'in-transit',
  },
  {
    id: '2',
    tripId: 'ID 8274456',
    from: 'Chennai',
    to: 'Bangalore',
    startDate: '12, Jul 2025',
    endDate: '15 Jul,2025',
    status: 'in-transit',
  },
  {
    id: '3',
    tripId: 'ID 8274457',
    from: 'Mumbai',
    to: 'Pune',
    startDate: '15, Jul 2025',
    endDate: '16 Jul,2025',
    status: 'scheduled',
  },
];

export const mockBids: Bid[] = [
  {
    id: '1',
    tripId: 'ID 8274455',
    amount: 45000,
    status: 'pending',
    from: 'Delhi',
    to: 'Jaipur',
  },
  {
    id: '2',
    tripId: 'ID 8274456',
    amount: 38000,
    status: 'accepted',
    from: 'Mumbai',
    to: 'Surat',
  },
];

export const mockDashboardStats: DashboardStats = {
  inTransit: 9,
  trucks: 23,
  bids: 11,
};
