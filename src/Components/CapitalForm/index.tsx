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
            <p className='subtitle'>Combien de fonds souhaitez-vous investir ?</p>

            <Form.Item
                name={'capital'}
                rules={[
                    {
                        required: true,
                        message: 'Oops! Veuillez entrer un numéro valide',
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
                        Exécuter la simulation
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default CapitalForm
