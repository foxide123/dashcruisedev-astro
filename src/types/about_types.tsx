export type AboutType = {
  header: string;
  description: string;
  sectionHeader: string;
  sectionDescription: string;
  teamHeader: string;
  teamDescription: string;
  teamMembers: TeamMemberType[];
};

export type TeamMemberType = {
  name: string;
  imageUrl: string;
  role: string;
  description: string;
  bgColor: string;
  fb_url: string;
  ig_url: string;
  linkedin_url: string;
  twitter_url: string;
  upwork_url: string;
};
