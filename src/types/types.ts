import { Project } from "../API";

export interface DescriptionProps {
    bio: Project["bio"];
    description: Project["description"];
}

export interface TokenProps {
    tokenUrl: Project["tokenSymbol"];
}

export interface GithubActivityProps {
    repoUrl: Project["githubRepoUrl"];
}

export interface TeamMember {
    name: string;
    surname: string;
    role: string;
    image: string;
    linkedIn: string;
}
export interface TeamProps {
    team: TeamMember[];
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqProps {
    faqs: FaqItem[];
}

export interface JobItem{
    category: string;
    title: string;
    type: string;
    remote: string;
    location: string;
    link: string;
}

export interface JobProps {
    jobs: JobItem[];
}

export interface ProjectProps {
    slug: string;
    name: string;
    bio: string;
    photo: string;
}

export interface FileUploadProps {
    setPath: (path: string) => void;
}