import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Block, BlockType } from './blocks/Block';

interface BlockData {
  id: string;
  type: BlockType;
}

export function PageContent() {
  const [blocks, setBlocks] = useState<BlockData[]>([
    { id: '1', type: 'text' }
  ]);

  const addBlock = () => {
    setBlocks([...blocks, { 
      id: Date.now().toString(),
      type: 'text'
    }]);
  };

  const handleConvertBlock = (id: string, newType: BlockType) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, type: newType } : block
    ));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-1">
        {blocks.map((block) => (
          <Block 
            key={block.id} 
            id={block.id}
            type={block.type}
            onConvert={handleConvertBlock}
          />
        ))}
      </div>
      
      <button
        onClick={addBlock}
        className="mt-4 flex items-center gap-2 text-gray-500 hover:text-gray-700"
      >
        <PlusCircle className="h-5 w-5" />
        <span>Add block</span>
      </button>
    </div>
  );
}