export enum TradeActionEnum {
    BUY = 'buy',
    SELL = 'sell',
}

export interface TradeType {
    date: Date
    action: TradeActionEnum
    name: string
    unitPrice: number
    totalShares: number
    total: number
    totalWallet: number
    expectedProfit?: number
}
