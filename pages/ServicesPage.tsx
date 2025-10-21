import React from 'react';
import Card from '../components/ui/Card';

const ServicesPage: React.FC = () => {
  return (
    <Card>
      <h1 className="text-2xl font-bold text-foreground">Manage Services</h1>
      <p className="mt-2 text-muted-foreground">This is where you would manage your active BPO services. This feature is currently under construction.</p>
    </Card>
  );
};

export default ServicesPage;