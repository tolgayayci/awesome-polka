export interface DescriptionProps {
    bio: string;
    details: string;
}

export interface FaqProps {
    question: string;
    answer: string;
}

export interface TeamProps {
    name: string;
    surname: string;
    role: string;
    image: string;
    linkedIn: string;
}

export interface JobProps {
   category: string;
   title: string;
   type: string;
   remote: string;
   location: string;
   link: string;
}

export interface FileUploadProps {
    setPath: (path: string) => void;
}