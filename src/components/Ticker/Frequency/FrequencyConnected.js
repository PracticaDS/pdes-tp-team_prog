import React from 'react'
import Frequency from './Frequency'
import FrequencyConnector from './FrequencyConnector'
import { TIMER_TIME } from '../../../utils/defaultValues'

const frequency = props => <Frequency {...props} frequency={TIMER_TIME} />

export default FrequencyConnector(frequency)
