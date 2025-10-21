import React from 'react';
import Card from '../components/ui/Card';

const BillingPage: React.FC = () => {
  return (
    <Card>
      <h1 className="text-2xl font-bold text-foreground">Billing & Subscriptions</h1>
      <p className="mt-2 text-muted-foreground">This is where you would view your invoices and manage your subscription plan. This feature is currently under construction.</p>
    </Card>
  );
};

export default BillingPage;