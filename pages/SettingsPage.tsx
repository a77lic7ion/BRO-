import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { teamMembersData } from '../constants';
import { TeamMember } from '../types';
import { UserPlusIcon } from '../components/icons';

const SettingsPage: React.FC = () => {
    const [name, setName] = useState('Thabo Moloi');
    const [company, setCompany] = useState('Acme Inc.');
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [teamMembers] = useState<TeamMember[]>(teamMembersData);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setSaved(false);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }, 1000);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Card>
                <h2 className="text-xl font-bold text-foreground">Profile Information</h2>
                <p className="mt-1 text-sm text-muted-foreground">Update your personal and company details.</p>
                <form onSubmit={handleSave} className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                            <Input id="fullName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                            <Input id="companyName" type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-end items-center pt-4 border-t border-border">
                        {saved && <span className="text-sm text-primary mr-4 transition-opacity duration-300">Saved!</span>}
                        <div className="w-full sm:w-auto sm:max-w-xs">
                             <Button type="submit" disabled={isSaving} className="w-full sm:w-auto">
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>

            <Card>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Team Members</h2>
                        <p className="mt-1 text-sm text-muted-foreground">Manage who has access to this workspace.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                        <Button variant="secondary" className="w-full sm:w-auto">
                            <UserPlusIcon className="w-4 h-4 mr-2" />
                            Invite Member
                        </Button>
                    </div>
                </div>
                <div className="mt-6 flow-root">
                    <ul role="list" className="-my-4 divide-y divide-border">
                        {teamMembers.map((person) => (
                            <li key={person.email} className="py-4 flex items-center space-x-4">
                                <img className="h-10 w-10 rounded-full" src={person.avatar} alt={`${person.name} avatar`} />
                                <div className="flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-foreground">{person.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-muted-foreground">{person.email}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default SettingsPage;