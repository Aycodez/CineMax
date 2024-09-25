import { FaHome, FaUser } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import {RiVideoAddLine} from 'react-icons/ri'

export const adminDashboardOptions = [
    {
        option: 'Dashboard',
      icon: <FaHome size={20}/>,
      link: '/admin'
    },
    {
        option: 'Movies',
      icon: <TbMovie size={20}/>,
      link: '/admin/movies'
    },
    {
        option: 'Tvshows',
      icon: <MdMovie size={20}/>,
      link: '/admin/tvshows'
    },
    {
        option: 'Genres',
      icon: <RiVideoAddLine size={20}/>,
      link: '/admin/genre'

    },
    {
        option: 'Users',
        icon: <FaUser size={20}/>,
        link: '/admin/blogs'
    }
]