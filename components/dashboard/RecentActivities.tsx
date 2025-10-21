import React from 'react';
import Card from '../ui/Card';
import { ActivityLog } from '../../types';

interface RecentActivitiesProps {
  activities: ActivityLog[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <Card className="col-span-1">
      <h3 className="text-lg font-medium text-foreground mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start space-x-4">
            <img className="h-8 w-8 rounded-full mt-1" src={activity.avatar} alt={`${activity.user} avatar`} />
            <div className="flex-1">
              <p className="text-sm text-foreground">
                <span className="font-semibold">{activity.user}</span> {activity.message}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentActivities;