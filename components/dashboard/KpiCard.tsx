import React from 'react';
import Card from '../ui/Card';
import { Kpi } from '../../types';
import { ChevronUpIcon } from '../icons';

interface KpiCardProps {
  kpi: Kpi;
}

const KpiCard: React.FC<KpiCardProps> = ({ kpi }) => {
  return (
    <Card>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium text-muted-foreground">{kpi.title}</h3>
        <div className="flex items-baseline mt-2">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">{kpi.value}</p>
          {kpi.change && (
            <div className={`ml-2 flex items-baseline text-sm font-semibold ${kpi.isPositive ? 'text-primary' : 'text-red-500'}`}>
              <ChevronUpIcon className={`h-4 w-4 ${kpi.isPositive ? '' : 'transform rotate-180'}`} />
              <span>{kpi.change}</span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1">from last month</p>
      </div>
    </Card>
  );
};

export default KpiCard;