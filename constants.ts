import { Kpi, ChartDataPoint, ActivityLog, TeamMember } from './types';

export const kpiData: Kpi[] = [
  { id: 'kpi_1', title: 'Inquiries Handled', value: '1,200', change: '45%', isPositive: true },
  { id: 'kpi_2', title: 'Data Entries', value: '23,240', change: '35%', isPositive: true },
  { id: 'kpi_3', title: 'VA Hours', value: '600', change: '21%', isPositive: true },
  { id: 'kpi_4', title: 'Customer Satisfaction', value: '98%', change: '2%', isPositive: true }
];

export const performanceChartData: ChartDataPoint[] = [
  { name: 'Mon', value: 2000 },
  { name: 'Tue', value: 2514 },
  { name: 'Wed', value: 2890 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 3490 },
  { name: 'Sat', value: 3200 },
  { name: 'Sun', value: 4100 },
];

export const recentActivitiesData: ActivityLog[] = [
  { id: '1', message: 'updated customer profile for Acme Inc.', user: 'Jabulani', avatar: 'https://i.pravatar.cc/32?u=a042581f4e29026702d' },
  { id: '2', message: 'completed 250 data entry tasks.', user: 'Thandiwe', avatar: 'https://i.pravatar.cc/32?u=a042581f4e29026703d' },
  { id: '3', message: 'resolved a high-priority support ticket.', user: 'Sipho', avatar: 'https://i.pravatar.cc/32?u=a042581f4e29026704d' },
  { id: '4', message: 'paused the "Social Media VA" service.', user: 'Admin', avatar: 'https://i.pravatar.cc/32?u=a042581f4e29026705d' },
  { id: '5', message: 'new invoice generated for the "Pro" plan.', user: 'System', avatar: 'https://i.pravatar.cc/32?u=a042581f4e29026706d' }
].map(activity => ({...activity, timestamp: '2 hours ago'}));

export const teamMembersData: TeamMember[] = [
    { id: '1', name: 'Jabulani Mthembu', email: 'jabulani@acme.com', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026702d' },
    { id: '2', name: 'Thandiwe Zulu', email: 'thandiwe@acme.com', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026703d' },
    { id: '3', name: 'Sipho Williams', email: 'sipho@acme.com', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704d' },
];