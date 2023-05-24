import React, { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'

import CapitalForm from '../../Components/CapitalForm'
import { getSimulation, onQueryError, onQuerySuccess, reset } from './index.utils'
import { TradeType } from '../../types/TradeTypes'
import TradesTable from '../../Components/TradesTable'
import './index.css'

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
                <p className='title'>Devenir plus riche que riche</p>
            </header>

            <section className='body'>
                {trades ? (
                    <div>
                        <TradesTable trades={trades} performance={performance} />

                        <div>
                            <Button
                                className='submit-button'
                                type='primary'
                                size='large'
                                onClick={() => reset(setTrades, setPerformance)}
                            >
                                Réexécuter la simulation
                            </Button>
                        </div>
                    </div>
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
