import React, { useState } from 'react'

const CalBody = () => {

    const [value,setValue]=useState('')
   
  return (
    <div>
      <div class="calc">
        <div class="calcbody">
            <input type="text" value={value}/>
            <div class="buttons">
                <button onClick={e=>setValue("")} class="operator">AC</button>
                <button onClick={e=>setValue(value+e.target.value)} value='%' class="operator">%</button>
                <button onClick={e=>setValue(value.slice(0,-1))} value={'DEL'} class="operator"><i class="fa-solid fa-delete-left"></i></button>
                <button onClick={e=>setValue(value+e.target.value)} value='/' class="operator">/</button>

                <button onClick={e=>setValue(value+e.target.value)} value='7'>7</button>
                <button onClick={e=>setValue(value+e.target.value)} value='8'>8</button>
                <button onClick={e=>setValue(value+e.target.value)} value='9'>9</button>
                <button onClick={e=>setValue(value+e.target.value)} value='*' class="operator">x</button>

                <button onClick={e=>setValue(value+e.target.value)} value='4'>4</button>
                <button onClick={e=>setValue(value+e.target.value)} value='5'>5</button>
                <button onClick={e=>setValue(value+e.target.value)} value='6'>6</button>
                <button onClick={e=>setValue(value+e.target.value)} value='-' class="operator">-</button>

                <button onClick={e=>setValue(value+e.target.value)} value='1'>1</button>
                <button onClick={e=>setValue(value+e.target.value)} value='2'>2</button>
                <button onClick={e=>setValue(value+e.target.value)} value='3'>3</button>
                <button onClick={e=>setValue(value+e.target.value)} value='+' class="operator">+</button>

            </div>
            <div class="group">
                <div className="enthoo">
                <button onClick={e=>setValue(value+e.target.value)} value='0'>0</button>
                <button onClick={e=>setValue(value+e.target.value)} value='.' id="dot">.</button>
                </div>
                <div className="space">
                    <button onClick={e=>setValue(eval(value))} value='=' class="equal">=</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CalBody
