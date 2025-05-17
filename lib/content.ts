import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContent(filename: string) {
  const filePath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}

export function getAllContent() {
  return {
    profile: getContent('profile.md'),
    education: getContent('education.md'),
    experience: getContent('experience.md'),
    skills: getContent('skills.md'),
    research: getContent('research.md'),
    publications: getContent('publications.md'),
    talks: getContent('talks.md'),
    teaching: getContent('teaching.md'),
  };
} 