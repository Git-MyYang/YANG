import { useState, useEffect } from 'react'

function top2(props) {

    const [active, setActive] = useState(-1)

    return (
        <>
            <li className="music">
                {props.name}
            </li>
        </>
    )

}

export default top2
