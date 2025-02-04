// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "./users/user-list";
import { UserShow } from "./users/user-show";
import { PostList } from "./posts/post-list";
import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'
import HomePage from "./homepage";
import { authProvider } from "@/auth";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin dataProvider={dataProvider} dashboard={HomePage} authProvider={authProvider}>
    <Resource
      icon={PersonIcon}
      name="users"
      list={UserList}
      edit={EditGuesser}
      recordRepresentation="name"
      show={UserShow}
      
    />
    <Resource
      icon={ArticleIcon}
      name="posts"
      list={PostList}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;