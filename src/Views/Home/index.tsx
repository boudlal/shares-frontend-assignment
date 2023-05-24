import React, { useState } from 'react'

import './index.css'
import CapitalForm from '../../Components/CapitalForm'

function Home(): JSX.Element {
    const [capital, setCapital] = useState<number>(0)

    return (
        <div className='home'>
            <header className='header'>
                <p className='title'>Devenir Plus Riche Que Riche</p>
            </header>

            <section className='body'>
                <CapitalForm onSubmit={(amount: number) => setCapital(amount)} />
            </section>
        </div>
    )
}

export default Home
