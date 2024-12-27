import React, { useState, useRef, useEffect } from 'react';
import { CommandPalette } from '../CommandPalette';
import { BlockType } from './Block';

interface TextBlockProps {
  onConvert: (type: BlockType) => void;
}

export function TextBlock({ onConvert }: TextBlockProps) {
  const [content, setContent] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowCommands(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '/' && content === '') {
      e.preventDefault();
      setShowCommands(true);
    } else if (e.key === 'Escape') {
      setShowCommands(false);
    }
  };

  const handleCommandSelect = (commandId: BlockType) => {
    onConvert(commandId);
    setShowCommands(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type '/' for commands..."
        className="w-full resize-none bg-transparent border-none focus:outline-none focus:ring-0 p-1"
        rows={1}
      />
      {showCommands && (
        <CommandPalette
          onSelect={handleCommandSelect}
          onClose={() => setShowCommands(false)}
        />
      )}
    </div>
  );
}