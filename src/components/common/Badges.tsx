import type { FC } from 'react';

interface BadgesProps {
  tags: string[];
}

const Badges: FC<BadgesProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-white border border-gray-300 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Badges;