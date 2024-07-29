import { useState, useEffect } from 'react'
import { ExamApi } from '../../../services'

function top4(props) {

    const [count, setCount] = useState(0)

    const tobank = () => {
        console.log('打印了',props.ovo)
        props.setOvo(!props.ovo)
    }
  
    return (
        <>
            <li>
                <div>Bank</div>
                <p
                className={`flag2 ${props.ovo ? 'left' : "" }`}
                onClick={() => tobank()}
                >
                    <span></span>
                </p>
            </li>
        </>
    )

}

export default top4