import React, { useState } from 'react';

export function HeadingBlock() {
  const [content, setContent] = useState('');

  return (
    <input
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Heading 1"
      className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-2xl font-bold p-1"
    />
  );
}