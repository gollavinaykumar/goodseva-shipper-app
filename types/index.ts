export interface Driver {
  id: string;
  name: string;
  avatar: string;
  status: 'assigned' | 'available' | 'in-transit';
  hasLicense: boolean;
  hasInsurance: boolean;
}

export interface Truck {
  id: string;
  vehicleNumber: string;
  location: string;
  status: 'in-transit' | 'available' | 'maintenance';
  hasRegistration: boolean;
  hasInsurance: boolean;
  driver: Driver;
  latitude?: number;
  longitude?: number;
}

export interface Trip {
  id: string;
  tripId: string;
  from: string;
  to: string;
  startDate: string;
  endDate: string;
  status: 'in-transit' | 'completed' | 'scheduled';
}

export interface Bid {
  id: string;
  tripId: string;
  amount: number;
  status: 'pending' | 'accepted' | 'rejected';
  from: string;
  to: string;
}

export interface DashboardStats {
  inTransit: number;
  trucks: number;
  bids: number;
}
