import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined
  } from "@ant-design/icons";
import CreateMediaPage from "../components/create-film";
import FilmsListAdminComponent from "../components/films";
import HomeAdminComponent from "../components/home";
import UsersListAdminComponent from "../components/users";

const pages = [
    {name:" صفحه اصلی" , key:"home" , icon:<HomeOutlined /> , component:<HomeAdminComponent />},
    {name:"لیست کاربران" , key:"users" , icon:<UserOutlined /> , component:<UsersListAdminComponent />},
    {name:"لیست فیلم ها" , key:"films" , icon:<VideoCameraOutlined /> , component:<FilmsListAdminComponent />},
    {name:"ایجاد فیلم جدید" , key:"create_media" , icon:<UploadOutlined /> , component:<CreateMediaPage />},
]

export default pages