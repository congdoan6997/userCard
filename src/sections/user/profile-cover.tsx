// @mui
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import { useTheme, alpha } from "@mui/material/styles";

// types
import { IUserProfileCover } from "src/types/user";

import {bgGradient} from 'src/theme/css'
import { useBoolean } from "src/hooks";
import  Portal  from "@mui/material/Portal";
import Fade from '@mui/material/Fade'
import { Card, Typography } from "@mui/material";



export default function ProfileCover({name, avatarUrl, role, coverUrl}: IUserProfileCover){
  const theme = useTheme();
  const hover = useBoolean(false);
  return (
    <Box sx={{
      color:'common.white',
      height: 1,
      ...bgGradient({
        imgUrl: coverUrl,
        color: alpha(theme.palette.primary.darker, 0.8)
      }),
      position: 'relative'
    }}>
      <Stack 
      direction={{xs: 'column', md: 'row'}}
      sx={{
        position: {md: 'absolute'},
        left: {md: 24},
        bottom: {md: 24},
        zIndex: {md: 10},
        pt:{xs: 5, md: 0}
      }}
      >
      <Avatar
      onMouseLeave= {hover.onFalse}
      onMouseEnter= {hover.onTrue} 
      component={'button'}
      src={avatarUrl}
      alt={name}
      sx={{
        mx:'auto',
        width: {xs: 64, md: 128},
        height: {xs: 64, md: 128},
        border: `solid 2px ${theme.palette.common.white}`,
        cursor: 'pointer'
      }} />
      <ListItemText 
      sx={{
        mt: 3,
        ml: {md: 3},
        textAlign: {xs: 'center', md: 'unset'}
      }}

      primary={name}
      secondary= {role}
      primaryTypographyProps={{
        typography: 'h4'
      }}
      secondaryTypographyProps={{
        mt: 0.5,
        color: 'inherit',
        component: 'span',
        typography: 'body2',
        sx: {opacity: 0.48}
      }}
      />

      </Stack>
      {hover ? (
        <Portal >
          <Fade in={hover.value}>
            <Box
          sx={{
            width: 1,
            height: 1
          }}>
            <Card sx={{width: 500, height: 100, backgroundColor:'violet',
            zIndex: 100}} >
              <Typography>
                I'm Portal
              </Typography>
            </Card>
          </Box>
          </Fade>
          
        </Portal>
      ): null}
    </Box>
  )
}