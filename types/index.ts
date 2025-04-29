export interface ChildProps {
    children: React.ReactNode;
}

export interface IBlog {
    title:string
    description:string
    author:IAuthor
    image:{url:string}
    tag:ICategoryAndtags
    createdAt:string
    content:{html:string}
    slug:string
    category:ICategoryAndtags
}
export interface IAuthor {
	name: string
	image: {url:string}
    bio:string
    blog:IBlog[]
    id:string
}

export interface ICategoryAndtags {
    name:string
    slug:string
}