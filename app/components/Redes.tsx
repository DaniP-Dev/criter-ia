import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IconType } from 'react-icons';

type SocialStat = {
  name: string;
  icon: IconType;
  followers: string;
  url: string;
  colorClass: string;
};

const socialStats: SocialStat[] = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    followers: '12,500',
    url: 'https://facebook.com/',
    colorClass: 'text-blue-600',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    followers: '8,200',
    url: 'https://twitter.com/',
    colorClass: 'text-blue-400',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    followers: '15,300',
    url: 'https://instagram.com/',
    colorClass: 'text-pink-500',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    followers: '5,900',
    url: 'https://linkedin.com/',
    colorClass: 'text-blue-700',
  },
];

const Redes = () => {
  return (
    <section className="w-full max-w-2xl mx-auto py-12">
      <h3 className="text-center text-2xl font-bold mb-8 text-navyblue tracking-tight">
        Seguidores en redes sociales
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {socialStats.map((social) => {
          const Icon = social.icon as React.ElementType;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-5 hover:scale-105 hover:shadow-2xl transition group border border-gray-100"
            >
              <div
                className={`rounded-full bg-gray-50 p-4 mb-3 shadow-inner group-hover:scale-110 transition`}
              >
                <Icon className={`text-3xl ${social.colorClass} drop-shadow`} />
              </div>
              <div className="text-xl font-extrabold text-navyblue mb-1 group-hover:text-blue-600 transition">
                {social.followers}
              </div>
              <div className="text-xs font-medium text-bluegray tracking-wide uppercase">
                {social.name}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Redes;