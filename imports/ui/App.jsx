import React from 'react'
import { Hello } from './Hello.jsx'
import { Info } from './Info.jsx'

const medication = [
    {
        _id: 1,
        name: 'Medication 1',
        dose: '100mg',
        frequency: '1x a day',
        taken: false,
    },
    {
        _id: 2,
        name: 'Medication 2',
        dose: '100mg',
        frequency: '1x a day',
        taken: false,
    },
    {
        _id: 3,
        name: 'Medication 3',
        dose: '100mg',
        frequency: '1x a day',
        taken: false,
    },
]
export const App = () => (
    <div>
        <h1>Welcome to Meteor!</h1>
        <Hello />
        <Info />
    </div>
)
