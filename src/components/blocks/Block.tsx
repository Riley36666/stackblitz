import React from 'react';
import { PlusCircle, GripVertical } from 'lucide-react';
import { TextBlock } from './TextBlock';
import { TodoBlock } from './TodoBlock';
import { HeadingBlock } from './HeadingBlock';
import { ImageBlock } from './ImageBlock';
import { TableBlock } from './TableBlock';

export type BlockType = 'text' | 'todo' | 'heading' | 'image' | 'table';

interface BlockProps {
  id: string;
  onConvert: (id: string, type: BlockType) => void;
  type: BlockType;
}

export function Block({ id, type, onConvert }: BlockProps) {
  const renderBlock = () => {
    switch (type) {
      case 'todo':
        return <TodoBlock />;
      case 'heading':
        return <HeadingBlock />;
      case 'image':
        return <ImageBlock />;
      case 'table':
        return <TableBlock />;
      default:
        return <TextBlock onConvert={(newType) => onConvert(id, newType)} />;
    }
  };

  return (
    <div className="group relative flex items-start gap-2 p-2 hover:bg-gray-50 rounded-lg">
      {renderBlock()}
    </div>
  );
}