import React from 'react';
import { Heading, ListTodo, Type, Image, Table2 } from 'lucide-react';

interface Command {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
}

interface CommandPaletteProps {
  onSelect: (commandId: string) => void;
  onClose: () => void;
}

export function CommandPalette({ onSelect, onClose }: CommandPaletteProps) {
  const commands: Command[] = [
    {
      id: 'heading',
      icon: <Heading className="h-4 w-4" />,
      label: 'Heading 1',
      description: 'Large section heading'
    },
    {
      id: 'todo',
      icon: <ListTodo className="h-4 w-4" />,
      label: 'To-do list',
      description: 'Track tasks with a to-do list'
    },
    {
      id: 'text',
      icon: <Type className="h-4 w-4" />,
      label: 'Text',
      description: 'Just start writing with plain text'
    },
    {
      id: 'image',
      icon: <Image className="h-4 w-4" />,
      label: 'Image',
      description: 'Upload or embed an image'
    },
    {
      id: 'table',
      icon: <Table2 className="h-4 w-4" />,
      label: 'Table',
      description: 'Add a table to your page'
    }
  ];

  return (
    <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
      <div className="p-2">
        <div className="text-xs text-gray-500 px-2 pb-2">Basic blocks</div>
        {commands.map((command) => (
          <button
            key={command.id}
            className="w-full flex items-start gap-2 p-2 hover:bg-gray-100 rounded-md text-left"
            onClick={() => onSelect(command.id)}
          >
            <div className="flex-shrink-0 text-gray-600 mt-0.5">{command.icon}</div>
            <div>
              <div className="text-sm font-medium">{command.label}</div>
              <div className="text-xs text-gray-500">{command.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}