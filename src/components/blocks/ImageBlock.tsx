import React, { useState } from 'react';
import { Image, Upload } from 'lucide-react';

export function ImageBlock() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="w-full">
      {!imageUrl ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-500">Click to upload or paste an image URL</p>
          <input
            type="text"
            placeholder="Paste an image URL..."
            className="mt-4 w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
      ) : (
        <div className="relative group">
          <img
            src={imageUrl}
            alt="Uploaded content"
            className="w-full rounded-lg"
          />
          <button
            onClick={() => setImageUrl('')}
            className="absolute top-2 right-2 p-1 bg-white rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}