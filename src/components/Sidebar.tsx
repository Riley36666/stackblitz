import React from 'react';
import { Search, Plus, ChevronDown, File, Settings } from 'lucide-react';

export function Sidebar() {
  const pages = [
    { id: '1', title: 'Getting Started' },
    { id: '2', title: 'Project Ideas' },
    { id: '3', title: 'Reading List' },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold">Workspace</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-gray-200 rounded-md"
          />
        </div>

        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
          <Plus className="h-4 w-4" />
          <span>New page</span>
        </button>

        <div className="space-y-1">
          {pages.map((page) => (
            <button
              key={page.id}
              className="flex items-center gap-2 w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <File className="h-4 w-4" />
              <span>{page.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}