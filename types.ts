export interface Kpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface ActivityLog {
  id:string;
  message: string;
  timestamp: string;
  user: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
}