import {
  MdMusicNote,
  MdHome,
  MdSmartDisplay,
  MdSchool,
  MdOutlineFaceRetouchingNatural,
  MdCheckroom,
  MdGraphicEq,
  MdTheaterComedy,
  MdFitnessCenter,
  MdDeveloperMode
} from 'react-icons/md'
import {RiCodeLine,RiLiveFill} from 'react-icons/ri'
import {BiDumbbell} from 'react-icons/bi'

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
  { name: 'New', icon: <MdHome/>, },
  { name: 'Trading', icon: <MdGraphicEq />, },
  { name: 'Coding', icon: <RiCodeLine />, },
  { name: 'ReactJS', icon: <RiCodeLine />, },
  { name: 'NextJS', icon: <RiCodeLine />, },
  { name: 'Music', icon: <MdMusicNote /> },
  { name: 'Education', icon: <MdSchool />, },
  { name: 'Podcast', icon: <MdGraphicEq />, },
  { name: 'Movie', icon: <MdSmartDisplay />, },
  { name: 'Gaming', icon: <BiDumbbell />, },
  { name: 'Live', icon: <RiLiveFill />, },
  { name: 'Sport', icon: <MdFitnessCenter />, },
  { name: 'Fashion', icon: <MdCheckroom />, },
  { name: 'Beauty', icon: <MdOutlineFaceRetouchingNatural />, },
  { name: 'Comedy', icon: <MdTheaterComedy />, },
  { name: 'Gym', icon: <MdFitnessCenter />, },
  { name: 'Crypto', icon: <MdDeveloperMode />, },
];