export interface Project {
    id: string;
    logo: string;
    name: string;
    description: string;
    socials: Array<Object>;
    mainCategory: string;
    subCategory: string;
    objectID: string;
}
  
export interface Article {
    id: string;
    title: string;
    description: string;
    project: string;
    date: string;
    image: string;
    category: string;
    originalLink: string;
    objectID: string;
}