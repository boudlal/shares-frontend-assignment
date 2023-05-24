import React from 'react'
import './index.css'
import Table, { ColumnsType } from 'antd/es/table'
import { TradeActionEnum, TradeType } from '../../types/TradeTypes'
import moment from 'moment'
import { formatAmount, getActionColor } from './index.utils'

const columns: ColumnsType<TradeType> = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (date: Date) => moment(date).format('DD/MM/YYYY'),
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (value: TradeActionEnum) => (
            <span style={{ color: getActionColor(value) }}>{value}</span>
        ),
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Prix Unitaire',
        dataIndex: 'unitPrice',
        key: 'unitPrice',
        render: (unitPrice: number) => formatAmount(unitPrice),
    },
    {
        // eslint-disable-next-line quotes
        title: "NOMBRE D'ACTION",
        dataIndex: 'totalShares',
        key: 'totalShares',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (total: number) => formatAmount(total),
    },
    {
        title: 'Portefeuille',
        dataIndex: 'totalWallet',
        key: 'totalWallet',
        render: (totalWallet: number) => formatAmount(totalWallet),
    },
]

type TradesTableProps = {
    trades: TradeType[]
    performance: number
}

function TradesTable({ trades = [], performance }: TradesTableProps): JSX.Element {
    return (
        <div className='table-container'>
            <Table
                columns={columns}
                dataSource={trades}
                pagination={false}
                scroll={{ y: 350 }}
                bordered
                rowKey={(trade: TradeType) => `${trade.date}-${trade.name}-${trade.unitPrice}`}
            />

            {performance && (
                <p className='performance-text'>
                    Temps total d&apos;execution : {(performance / 1000).toFixed(4)} secondes{' '}
                </p>
            )}
        </div>
    )
}

export default TradesTable
