import { useState, useEffect } from "react";
import { Driver, Truck, Trip, Bid, DashboardStats } from "../types";
import {
  mockDrivers,
  mockTrucks,
  mockTrips,
  mockBids,
  mockDashboardStats,
} from "@/services/mockData";

export function useLogistics() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [bids, setBids] = useState<Bid[]>([]);
  const [stats, setStats] = useState<DashboardStats>(mockDashboardStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setDrivers(mockDrivers);
      setTrucks(mockTrucks);
      setTrips(mockTrips);
      setBids(mockBids);
      setStats(mockDashboardStats);
      setLoading(false);
    }, 500);
  };

  const getInTransitTrips = () =>
    trips.filter((trip) => trip.status === "in-transit");
  const getInTransitTrucks = () =>
    trucks.filter((truck) => truck.status === "in-transit");

  return {
    drivers,
    trucks,
    trips,
    bids,
    stats,
    loading,
    getInTransitTrips,
    getInTransitTrucks,
  };
}
