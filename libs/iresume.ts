interface IProfile {
  name: string;
  title: string;
  avatar: string;
  gravatar?: string;
  fullName: string;
  birthDate: string;
  location: string;
  social: { name: string; icon: string; url: string }[];
}

interface IEducation {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface IJob {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface SkillSection {
  name: string;
  tags: string[];
}

interface Skill {
  name: string;
  sections: SkillSection[];
}

export interface IResume {
  profile: IProfile;
  education: IEducation[];
  insiginias: { name: string; img: string; url: string }[];
  jobs: IJob[];
  profiles: Skill[];
}
