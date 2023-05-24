import React from 'react'
import { Input, Button, Form } from 'antd'

import './index.css'

interface CapitalFormProps {
    onSubmit: (capital: number) => void
    isLoading: boolean
}

function CapitalForm({ onSubmit, isLoading }: CapitalFormProps): JSX.Element {
    return (
        <Form name='capital' onFinish={(values: { capital: number }) => onSubmit(values.capital)}>
            <p className='subtitle'>How Much Funds Do You Want To Invest?</p>

            <Form.Item
                name={'capital'}
                rules={[
                    {
                        required: true,
                        message: 'Oops! Please Enter A Valid Capital',
                        pattern: new RegExp(/^[1-9][0-9]*$/),
                    },
                ]}
            >
                <div className='capital-section row justify-content-center'>
                    <Input className='capital-input' size='large' placeholder='100000' />
                    <span className='capital-currency'>€</span>
                </div>
            </Form.Item>

            <div className='actions'>
                <Form.Item>
                    <Button
                        loading={isLoading}
                        className='submit-button'
                        type='primary'
                        size='large'
                        htmlType='submit'
                    >
                        Run Simulation
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default CapitalForm
