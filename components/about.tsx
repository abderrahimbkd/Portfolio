'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is <span className="font-medium">Boukad Abderrahim</span>.I am a <span className="italic">FullStack Developer </span> .I am always
        eager to expand my knowledge and Develop my skills.My passion for web Development drives me to constantly learn and grow. ensuring i stay
        up-to-date with the latest technologies and trends.With strong fondation in <span className="font-medium">Front-End</span> and{' '}
        <span className="font-medium">Back-End</span> Development.I have experience working with frameworks such as{' '}
        <span className="underline font-medium">Reactjs,Nextjs,Laravel</span> .I am also familiar with{' '}
        <span className="underline font-medium">TypeScript and Prisma</span>. Some of the projects that I have worked on include a personal portfolio
        website, a Ecommerce with Dashboard and a Hotel reservation... My dedication to my craft and my commitment to delivering high-quality
        work make me a valuable asset to any team. I am currently looking for a full-time position as a software developer.
      </p>
    </motion.section>
  );
}
