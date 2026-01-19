import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import './style.css';

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex == index ? null : index )
    }
    return !items || (items.length === 0) ? "No items available" : (
        <div className='accordion'>
            {items.map((items, index) => {
                return <div key={index} className='accordion-item'>
                    <button className='accordion-title' onClick={() => handleToggle(index)} >
                        {items.title}
                        {activeIndex === index ? <FaChevronUp className='right' /> : <FaChevronDown className='right' />}
                    </button>
                    {activeIndex === index && <div className='accordion-content'>
                        {items.content}
                    </div>}
                </div>
            })}

        </div>
       
    )
}

export default Accordion;