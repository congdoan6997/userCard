// @mui
import Contaner from "@mui/material/Container"
import Card from '@mui/material/Card'
import Tabs, {tabsClasses} from '@mui/material/Tabs'

//
import ProfileCover from "../profile-cover"
import Iconify from "src/components/iconify";
import { Tab } from "@mui/material";
const TABS = [
  {
    value: 'profile',
    label: 'Profile',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'followers',
    label: 'Followers',
    icon: <Iconify icon="solar:heart-bold" width={24} />,
  },
  {
    value: 'friends',
    label: 'Friends',
    icon: <Iconify icon="solar:users-group-rounded-bold" width={24} />,
  },
  {
    value: 'gallery',
    label: 'Gallery',
    icon: <Iconify icon="solar:gallery-wide-bold" width={24} />,
  },
];
const user = {
  name : "Doan pro",
  role: "admin",
  avartarUrl : "public/avatar_25.jpg",
  coverUrl: "public/cover_4.jpg"
}
export default function UserProfileView(){

  return (
    <Contaner maxWidth={'lg'}>
      <Card sx={{
        mb: 3,
        height: 290,
        position: 'relative',
        borderRadius: '16px'
      }}>
        <ProfileCover role={user.role} name={user.name} 
        avatarUrl={user.avartarUrl} coverUrl={user.coverUrl} />
        <Tabs sx={{
          height: '48px',
          // padding: '0 12px',
          width: 1,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          bgcolor: 'background.paper',
          [`& .${tabsClasses.flexContainer}`]:{
            justifyContent: {md: 'flex-end', sm: 'center'}
          }
          
        }}>
          {TABS.map((tab) => (
            <Tab key={tab.value}
            value ={ tab.value}
            icon = {tab.icon}
            label={tab.label} />
          ))}
        </Tabs>
      </Card>
    </Contaner>

  )
}