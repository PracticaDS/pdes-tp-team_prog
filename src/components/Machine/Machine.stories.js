import React from 'react'

import { storiesOf } from '@storybook/react'
import crafter from '../../assets/crafter.png'
import furnace from '../../assets/furnace.png'
import seller from '../../assets/seller.png'
import starter from '../../assets/starter.png'
import transporter from '../../assets/transporter.png'

import Machine from './Machine'

storiesOf('Machine', module).add('Crafter', () => <Machine image={crafter} />)
storiesOf('Machine', module).add('Furnace', () => <Machine image={furnace} />)
storiesOf('Machine', module).add('Seller', () => <Machine image={seller} />)
storiesOf('Machine', module).add('Starter', () => <Machine image={starter} />)
storiesOf('Machine', module).add('Transporter', () => <Machine image={transporter} />)
