import React from 'react';
// import MyLocalImage from '../../../public/Group 22269MYtime.png';
import desire from '../../../public/Desire.png';
import GaInfra from '../../../public/Group 22284test.png';
import Duke from '../../../public/Duke.png';
import prompt from '../../../public/Prompt.png';
import CHEM from '../../../public/Chem.png';
import banas from '../../../public/Banas.png';
import Acem from '../../../public/Acme.png';
import Angel from '../../../public/Angel.png';
import Bodal from '../../../public/Bodal.png';
import  rotodel from '../../../public/RotoDel.png';
import  Rantamni from '../../../public/Ratnamni.png';
import Image from 'next/image';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const Icons = {
  Desire: ({ size = 100, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={desire}
      alt="Local Icon"
      width={size}
      height={size}
    //   style={{ color }}
      className={className}
    />
  ),
  GAInfra: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={GaInfra}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  Duke: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={Duke}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  prompt: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={prompt}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  
  Chem: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={CHEM}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  
  
  Acem: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={Acem}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  Angel: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={Angel}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  Bodal: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={Bodal}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  rotodel: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={rotodel}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  Rantamni: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={Rantamni}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  
  banas: ({ size = 60, color = 'currentColor', className = '' }: IconProps) => (
    <Image
      src={banas}
      alt="Local Icon"
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  ),
  
};

export default Icons;
