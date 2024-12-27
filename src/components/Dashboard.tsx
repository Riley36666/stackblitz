import React from 'react';
import { supabase } from '../lib/supabase';
import { LogOut } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { PageContent } from './PageContent';

interface DashboardProps {
  onSignOut: () => void;
}

export function Dashboard({ onSignOut }: DashboardProps) {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
          <h1 className="text-lg font-semibold">My Workspace</h1>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <PageContent />
        </main>
      </div>
    </div>
  );
}