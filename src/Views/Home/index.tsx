import React, { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import './index.css'
import CapitalForm from '../../Components/CapitalForm'
import { useQuery } from '@tanstack/react-query'
import { getSimulation, onQueryError, onQuerySuccess } from './index.utils'

import { TradeType } from '../../types/TradeTypes'

function Home(): JSX.Element {
    const [capital, setCapital] = useState<number>(0)
    const [trades, setTrades] = useState<TradeType[] | undefined>(undefined)
    const [performance, setPerformance] = useState<number>(0)

    const { isFetching, refetch } = useQuery({
        queryKey: ['simulation', capital],
        queryFn: () => getSimulation(capital),
        onError: onQueryError,
        onSuccess: (data: AxiosResponse) => onQuerySuccess(data, setTrades, setPerformance),
        retry: 0,
        enabled: false,
    })

    useEffect(() => {
        if (capital > 0) refetch()
    }, [capital])

    return (
        <div className='home'>
            <header className='header'>
                <p className='title'>Devenir Plus Riche Que Riche</p>
            </header>

            <section className='body'>
                {trades ? (
                    <div>{/* Trades Table Here */}</div>
                ) : (
                    <CapitalForm
                        onSubmit={(amount: number) => setCapital(amount)}
                        isLoading={isFetching}
                    />
                )}
            </section>
        </div>
    )
}

export default Home
