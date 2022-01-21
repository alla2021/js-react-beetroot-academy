export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}

export interface Posts {
  id: string;
  title: string;
}

export interface UserProps{
  users: User[];
}

export interface UserPosts{
  posts: Posts[];
}

