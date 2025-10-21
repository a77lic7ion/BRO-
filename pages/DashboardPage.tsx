import React, { useState, useEffect } from 'react';
import KpiCard from '../components/dashboard/KpiCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentActivities from '../components/dashboard/RecentActivities';
import { kpiData, performanceChartData, recentActivitiesData } from '../constants';
import { Kpi, ChartDataPoint, ActivityLog } from '../types';

const DashboardPage: React.FC = () => {
  // Mock data fetching
  const [loading, setLoading] = useState(true);
  const [kpis, setKpis] = useState<Kpi[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [activities, setActivities] = useState<ActivityLog[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKpis(kpiData);
      setChartData(performanceChartData);
      setActivities(recentActivitiesData);
      setLoading(false);
    }, 500); // Simulate network delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-full"><p>Loading dashboard...</p></div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart data={chartData} />
        <RecentActivities activities={activities} />
      </div>
    </div>
  );
};

export default DashboardPage;