import { TradeActionEnum } from '../../types/TradeTypes'

export const formatAmount = (value: number) => `${value.toFixed(2)} €`

export const getActionColor = (value: TradeActionEnum) =>
    value === TradeActionEnum.BUY ? 'green' : 'red'
