import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Button } from "./Button";

const allButtons = [
    'MC', 'M+', 'M-', 'MR',
    'C', '+/-', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '<', '0', '.']

const App = () => {

    const [inputValue, setInputValue] = useState<string | number>('')
    const [history, setHistory] = useState<string | number>('')
    const [action, setAction] = useState<string | number>('')
    const [memmoryValue, setMemmoryValue] = useState<string | null>('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let value: any = e.target.value.replace(/[^\d.]*/g, '')
        if (value.match(/\./g)?.length > 1) {
            value = value.substr(0, value.lastIndexOf("."))
        } else if (value.match(/\-/g)?.length > 1) {
            value = value.substr(0, value.lastIndexOf("-"))
        } else if (value.match(/\+/g)?.length > 1) {
            value = value.substr(0, value.lastIndexOf("+"))
        } else if (value.match(/\*/g)?.length > 1) {
            value = value.substr(0, value.lastIndexOf("*"))
        } else if (value.match(/\/\//g)?.length > 1) {
            value = value.substr(0, value.lastIndexOf("/"))
        }
        setInputValue(value)
    }

    const resultHandler = () => {
        if (inputValue === "0") {
            setHistory('')
            setAction('')
            setInputValue('Error')
        } else if (inputValue && history && action) {
            setHistory('')
            setAction('')
            setInputValue(eval(history + `${action}` + inputValue))
        }
    }

    const checkHandler = () => {
        if (inputValue !== '') {
            setHistory(inputValue)
            setInputValue('')
        }
        if (inputValue === '') {
            setHistory(history)
        }
        if (history !== '' && inputValue !== '') {
            setInputValue('')
            setHistory(eval(history + `${action}` + inputValue))
        }
        if (inputValue === '' && history === '') {
            setAction('')
        }
    }


    const onKeyPressCharCodeHandler = (action: string) => {
        setInputValue('')
        setAction(action)
        setHistory(inputValue)
        checkHandler()
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 42) {
            onKeyPressCharCodeHandler('*')
        } else if (e.charCode === 43) {
            onKeyPressCharCodeHandler('+')
        } else if (e.charCode === 45) {
            onKeyPressCharCodeHandler('-')
        } else if (e.charCode === 47) {
            onKeyPressCharCodeHandler('/')
        } else if (e.charCode === 13) {
            resultHandler()
        }
    }

    const onClick = (value: string) => {
        switch (value) {
            case '=':
                setInputValue(history)
                setHistory('')
                setAction('')
                resultHandler()
                break
            case '+':
                checkHandler()
                setAction(value)
                break
            case '-':
                checkHandler()
                setAction(value)
                break
            case '*':
                checkHandler()
                setAction(value)
                break
            case '/':
                setAction(value)
                checkHandler()
                break
            case 'C':
                setInputValue('')
                setHistory('')
                setAction('')
                break
            case '+/-':
                if (inputValue) {
                    setInputValue(-inputValue)
                }
                break
            case '1':
                setInputValue(inputValue + value)
                break
            case '2':
                setInputValue(inputValue + value)
                break
            case '3':
                setInputValue(inputValue + value)
                break
            case '4':
                setInputValue(inputValue + value)
                break
            case '5':
                setInputValue(inputValue + value)
                break
            case '6':
                setInputValue(inputValue + value)
                break
            case '7':
                setInputValue(inputValue + value)
                break
            case '8':
                setInputValue(inputValue + value)
                break
            case '9':
                setInputValue(inputValue + value)
                break
            case '0':
                setInputValue(inputValue + value)
                break
            case '.':
                if (inputValue.toString().includes(value)) {
                    value = ''
                }
                setInputValue(inputValue + value)
                break
            case '<':
                setInputValue(inputValue.toString().slice(0, -1))
                break
            case 'M+':
                setInputValue(Number(inputValue) + Number(memmoryValue))
                break
            case 'M-':
                setInputValue(Number(inputValue) - Number(memmoryValue))
                break
            case 'MR':
                localStorage.setItem('MR', JSON.stringify(inputValue))
                let getStorageValue: any = localStorage.getItem('MR')
                setMemmoryValue(JSON.parse(getStorageValue))
                break
            case 'MC':
                localStorage.removeItem('MR')
                setMemmoryValue('')
                break
        }
    }
    return (
        <div className="App">
            <h1>Calculator</h1>
            <div className="calc">
                <div>
                    <div className='result'>
                        <input className={'input-history'} value={history} readOnly type='text' />
                        <input className={'input-action'} value={action} readOnly type='text' />
                        <input className={'input-result'}
                            type="text"
                            autoFocus
                            onKeyPress={onKeyPressHandler}
                            value={inputValue} onChange={onChangeInput} />
                    </div>
                    <div className='buttons-table'>
                        {allButtons.map(b => <Button key={b} value={b} onClick={onClick} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
