import Cross from './assets/shared/icon-close.svg'
import Hamburguer from './assets/shared/icon-hamburger.svg'
import Logo from './assets/shared/logo.svg'

import Moon from './assets/destination/image-Moon.webp'
import Mars from './assets/destination/image-Mars.webp'
import Europa from './assets/destination/image-Europa.webp'
import Titan from './assets/destination/image-Titan.webp'

import DouglasHurley from './assets/crew/image-Douglas-Hurley.webp'
import MikeShuttleworth from './assets/crew/image-Mark-Shuttleworth.webp'
import VictorGlover from './assets/crew/image-Victor-Glover.webp'
import AnoushehAnsari from './assets/crew/image-Anousheh-Ansari.webp'

import LaunchVehicle_P from './assets/technology/image-Launch-Vehicle-portrait.jpg'
import Spaceport_P from './assets/technology/image-Spaceport-portrait.jpg'
import SpaceCapsule_P from './assets/technology/image-Space-Capsule-portrait.jpg'
import LaunchVehicle_L from './assets/technology/image-Launch-Vehicle-landscape.jpg'
import Spaceport_L from './assets/technology/image-Spaceport-landscape.jpg'
import SpaceCapsule_L from './assets/technology/image-Space-Capsule-landscape.jpg'

import JSON from './data.json'

export const getData = (topic) => JSON[topic][1]

export const SRC = {
  Header: [
    Object.keys(JSON),
    Logo,
    Cross,
    Hamburguer
  ],
  Destination: [
    Moon,
    Mars,
    Europa,
    Titan
  ],
  Crew: [
    DouglasHurley,
    MikeShuttleworth,
    VictorGlover,
    AnoushehAnsari
  ],
  Technology: {
    'portrait': {
      0: LaunchVehicle_P,
      1: Spaceport_P,
      2: SpaceCapsule_P
    },
    'landscape': {
      0: LaunchVehicle_L,
      1: Spaceport_L,
      2: SpaceCapsule_L
    }
  }
}