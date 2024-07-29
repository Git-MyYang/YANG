import { useState,useEffect, useRef } from 'react'
import { ExamApi } from '../../services' 
import classNames from 'classnames'
import style from './Left.module.scss'

function Left(props) {
    const [active, setActive] = useState(-1)
    const [ExamList , setExamList] = useState([])
    const getList = async () => {
        const res = await ExamApi()
        const list = res.value
        list.forEach(v => v.flag = false)
        setExamList(list)
        // console.log(ExamList)
    }

    useEffect(() => {
        getList()
    },[])

    const ondown = (v,i) => {
        v.flag = true
        if(v.flag===true){
            setActive(i)
            props.setname(v.id)
            // console.log(props.flag)
            if(props.flag === false){
                const audio = new Audio(props.ovo ? v.bankUrl : v.url)
                props.setAudios(props.audios)
                audio.play();
            }
        }
    }
    const onUP = (v,i) => {
        v.flag = false
        if(v.flag === false){
            setActive(-1)
        }
    }
    useEffect(() => {
        const handleKeyPress = (event) => {
            ExamList.map((v,i) => {
                if(event.key.toUpperCase() === v.keyTrigger){
                  v.flag = !v.flag
                  if(v.flag===true){
                        props.setname(v.id)
                        setActive(i)
                        // console.log(props.flag)
                        if(props.flag === false){
                            const audio = new Audio( props.ovo ? v.bankUrl : v.url )
                            audio.play()
                            audio.volume = event.target.value / 100
                            props.setAudios(audio.volume)
                        }
                  }else{
                    setActive(-1)
                  }
                }
            })
        }
        // 添加键盘事件监听器
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyPress);
        // 清理函数，移除事件监听器
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('keyup', handleKeyPress);
        };
      }, [ExamList,props.ovo,props.flag]);
    return (
        <div>
            <ul className="leftBOX">
                {ExamList.map((item,index)=>{  
                })}

                {ExamList.map((item,index) =>
                    <li 
                    className={ props.flag===true ? (classNames( {[style.acs]:index === active} )) : (classNames( {[style.active]:index === active} ))}
                    key={item.id}
                    onMouseDown={() => ondown(item,index)}
                    onMouseUp={() => onUP(item,index)}
                    >
                        {item.keyTrigger}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Left