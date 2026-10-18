export interface Project {
  name: string;
  description: string;
  url: string;
  linkLabel: string;
  newest?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Reaction Drill',
    description: 'Web app for reaction training that generates large color or number signals at a configurable interval, with sets and rest breaks.',
    url: 'https://reaction-drill.vercel.app',
    linkLabel: 'Open web app',
    newest: true
  },
  {
    name: 'Zikir Indonesia',
    description: 'Zikir and worship reminder app — available on Google Play. Rating 4.9 from 1.3k reviews · 10k+ downloads',
    url: 'https://play.google.com/store/apps/details?id=com.zikirindonesia',
    linkLabel: 'View on Play Store'
  },
  {
    name: 'Zikir Indonesia (TV)',
    description: 'An app made for smart Android TVs that shows prayer times and plays Quran murottal on demand.',
    url: 'https://play.google.com/store/apps/details?id=com.zikirindonesia.tv',
    linkLabel: 'View on Play Store'
  }
];
