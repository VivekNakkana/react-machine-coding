import React, { useState, useCallback, useEffect, useRef }  from 'react'

const Generator = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [symbolAllowed, setSymbolAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null)

    const generatePasswors = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed) {
            str += '0123456789'
        }
        if (symbolAllowed) {
            str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
        }
        for (let i = 1; i < length; i++) {
            const char = Math.floor(Math.random() * str.length +1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numberAllowed, symbolAllowed])

    useEffect(() => {
        generatePasswors()
    }, [length, numberAllowed, symbolAllowed])

    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current.select()
    }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3' >Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-4 gap-2 '>
            <input type='text'
             value={password}
             placeholder='Password'
             className='outline-none rounded-lg bg-amber-50 w-full py-1 px-3'
             readOnly
             ref = {passwordRef}
             />
             <button onClick={copyPasswordToClipboard} className='bg-gray-700 rounded-lg p-2  hover:bg-gray-600 cursor-pointer text-white'>Copy </button>
        </div>
        <div className='flex text-sm gap-x-2' >
            <div className='flex items-center gap-x-1'>
                <input type='range'
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
                />
                <label className='text-white' htmlFor='length' >Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input 
                type='checkbox'
                defaultChecked={numberAllowed}
                onChange={() => { setNumberAllowed((prev) => !prev) }}
                />
                <label className='text-white' htmlFor='number' >Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input 
                type='checkbox'
                defaultChecked={symbolAllowed}
                onChange={() => { setSymbolAllowed((prev) => !prev) }}
                />
                <label className='text-white' htmlFor='symbol' >Symbols</label>
            </div>
        </div>
    </div>
  )
}

export default Generator