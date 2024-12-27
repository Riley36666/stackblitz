import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

export function TodoBlock() {
  const [checked, setChecked] = useState(false);
  const [content, setContent] = useState('');

  return (
    <div className="flex items-center gap-2 p-1">
      <button
        onClick={() => setChecked(!checked)}
        className="flex-shrink-0 text-gray-500 hover:text-gray-700"
      >
        {checked ? (
          <CheckSquare className="h-5 w-5" />
        ) : (
          <Square className="h-5 w-5" />
        )}
      </button>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="To-do"
        className={`w-full bg-transparent border-none focus:outline-none focus:ring-0 ${
          checked ? 'line-through text-gray-400' : ''
        }`}
      />
    </div>
  );
}