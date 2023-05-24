import axios, { AxiosError, AxiosResponse } from 'axios'
import { notification } from 'antd'
import { TradeType } from '../../types/TradeTypes'
import { Dispatch, SetStateAction } from 'react'

export const getSimulation = async (capital: number): Promise<AxiosResponse<any, any>> => {
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/simulate?capital=${capital}`)
}

export const onQueryError = (error: AxiosError) => {
    const response = error.response?.data as { message: string }
    notification.error({ message: response?.message, duration: 5 })
}

export const onQuerySuccess = (
    data: AxiosResponse,
    setTrades: Dispatch<SetStateAction<TradeType[] | undefined>>,
    setPerformance: Dispatch<SetStateAction<number>>,
) => {
    const response = data.data as { trades: TradeType[]; performance: number }
    setTrades(response.trades)
    setPerformance(response.performance)
}

export const reset = (
    setTrades: Dispatch<SetStateAction<TradeType[] | undefined>>,
    setPerformance: Dispatch<SetStateAction<number>>,
) => {
    setTrades(undefined)
    setPerformance(0)
}
