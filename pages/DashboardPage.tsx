import React, { useState, useEffect } from 'react';
import KpiCard from '../components/dashboard/KpiCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentActivities from '../components/dashboard/RecentActivities';
import AiInsights from '../components/dashboard/AiInsights';
import { kpiData, performanceChartData, recentActivitiesData } from '../constants';
import { Kpi, ChartDataPoint, ActivityLog } from '../types';

const DashboardPage: React.FC = () => {
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
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] space-y-4 text-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div>
          <p className="text-foreground font-semibold">ZA-BPO Agent</p>
          <p className="text-muted-foreground text-sm">Aggregating real-time operations data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AiInsights kpis={kpis} chartData={chartData} />
        <PerformanceChart data={chartData} />
        <RecentActivities activities={activities} />
      </div>
    </div>
  );
};

export default DashboardPage;