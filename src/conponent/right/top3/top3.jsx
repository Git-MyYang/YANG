import { useState, useEffect, useRef } from 'react'

function top3(props) {
    // const audioRef = useRef(null);
    const [range, setRange] = useState(100)

    const handleVolumeChange = (e) => {
        setRange(e.target.value)
        // audioRef(range)
        if (props.audios) {
            props.audios.volume = e.target.value / 100
            console.log(1)
        }
    };

    useEffect(() => {
        // 确保音频元素已经加载
        if (props.audios) {
            props.audios.load();
          console.log(111)
        }
    });
    return (
        <>
            <li>
                <input type="range"
                min="0"
                max="100"
                step="1"
                value={range}
                onChange={handleVolumeChange}
                 />
            </li>
        </>
    )

}

export default top3