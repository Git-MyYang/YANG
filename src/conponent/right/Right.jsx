import { useState, useEffect } from 'react'
import { ExamApi } from '../../services' 
import Top2 from "./top2/top2.jsx"
import Top3 from "./top3/top3.jsx"
import Top4 from "./top4/top4.jsx"

function Right(props) {

    const [ExamList , setExamList] = useState([])
    const getList = async () => {
        const res = await ExamApi()
        setExamList(res.value)
        console.log(ExamList)
    }

    useEffect(() => {
        getList()
    },[])

    const toname = () => {
        props.setFlag(!props.flag)
    }

    return (
        <div>
            <ol className="rightBOX">
                <li>
                    <div>Power</div>
                    <p
                    className={`flag1 ${props.flag ? 'left' : ''}`}
                    onClick={() => toname()}
                    >
                        <span></span>
                    </p>
                </li>

                <Top2 name={props.Active} setExamList={setExamList} ExamList={ExamList} setOvo={props.setOvo} ovo={props.ovo} setFlag={props.setFlag} flag={props.flag} />

                <Top3 />

                <Top4  setOvo={props.setOvo} ovo={props.ovo} audios={props.audios}/>
                
            </ol>
        </div>
    )
}

export default Right