import React from 'react';
import { YukioItem } from '../types';

interface Props {
  item: YukioItem;
  isOwned: boolean;
  onToggle: (id: string) => void;
}

export const YukioCard: React.FC<Props> = ({ item, isOwned, onToggle }) => {
  return (
    <div
      className={`p-4 rounded-3xl shadow cursor-pointer transition-all ${
        isOwned ? 'bg-yukio-neon' : 'bg-white'
      }`}
      onClick={() => onToggle(item.id)}
    >
      <img src={item.imageUrl} className="w-full rounded-2xl mb-2" />
      <p className="text-center">{item.name}</p>
    </div>
  );
};
