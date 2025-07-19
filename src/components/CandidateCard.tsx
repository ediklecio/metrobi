import type { FC, ReactNode } from 'react';
import Badges from './common/Badges';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialIcons: Record<string, ReactNode> = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
};

const CandidateCard: FC = () => {
  const candidate = {
    name: 'Ediklecio',
    photoUrl: './src/assets/profile.jpg',
    tags: ['React', 'Angular', 'Java', 'Node'],
    socials: [
        {
            name: 'linkedin',
            url: 'https://linkedin.com/in/ediklecio',
        },
        {
            name: 'github',
            url: 'https://github.com/ediklecio',
        },
        {
            name: 'instagram',
            url: 'https://instagram.com/ediklecio',
        },
    ]
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        About the candidate
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 mb-6">
        <img
          src={candidate.photoUrl}
          alt={candidate.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-purple-700">{candidate.name}</h3>
          <p>Front-End Developer | Full-Stack Developer</p>
        </div>
        <div className="w-0.5 bg-gray-200"></div>
        <div className="flex flex-col gap-1 sm:ml-auto text-right">
          {candidate.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-2 text-sm text-gray-600 hover:text-purple-700 hover:underline"
              aria-label={social.name}
            >
              <span className="hidden sm:inline">{social.url.replace(/https?:\/\/(www\.)?/, '')}</span>
              <span className="text-lg">{socialIcons[social.name]}</span>
            </a>
          ))}
        </div>
      </div>

      <Badges tags={candidate.tags} />
    </div>
  );
};

export default CandidateCard;