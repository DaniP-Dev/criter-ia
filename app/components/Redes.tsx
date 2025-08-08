import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IconType } from 'react-icons';

type SocialStat = {
  name: string;
  icon: IconType;
  followers: string;
  url: string;
  colorClass: string;
  bgClass: string; // Nuevo campo para el gradiente
};

const socialStats: SocialStat[] = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    followers: '100',
    url: 'https://www.facebook.com/profile.php?id=61578752468834',
    colorClass: 'text-blue-600',
    bgClass: 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    followers: '1000',
    url: 'https://x.com/Somoscriteria',
    colorClass: 'text-sky-400',
    bgClass: 'bg-gradient-to-br from-sky-400 via-blue-400 to-sky-300',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    followers: '300',
    url: 'https://www.instagram.com/somoscriteria/',
    colorClass: 'text-pink-500',
    bgClass: 'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    followers: '500',
    url: 'https://www.linkedin.com/company/somos-criteria/about/?viewAsMember=true',
    colorClass: 'text-blue-700',
    bgClass: 'bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400',
  },
];

const Redes = () => {
  return (
    <section className="w-full max-w-5xl mx-auto pt-12 ">
      <h3 className="text-center text-2xl mb-2 font-bold  text-navyblue tracking-tight  ">
        Seguidores en redes sociales
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
        {socialStats.map((social) => {
          const Icon = social.icon as React.ElementType;
          return (  
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.bgClass} flex flex-col items-center rounded-2xl shadow-lg p-5 hover:scale-105 hover:shadow-2xl transition group`}
            >
              <div
                className={`rounded-full bg-white/80 p-4 shadow-inner group-hover:scale-110 transition`}
              >
                <Icon className={`text-3xl ${social.colorClass} drop-shadow`} />
              </div>
              <div className="text-xl font-extrabold text-navyblue group-hover:text-white transition">
                {social.followers}
              </div>
              <div className="text-xs font-medium text-white sm:text-bluegray tracking-wide uppercase group-hover:text-white transition">
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