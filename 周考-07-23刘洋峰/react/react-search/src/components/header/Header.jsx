import { useImperativeHandle, useState, forwardRef, useEffect } from 'react'
import style from './Header.module.scss'

const Header = (props, ref) => {
    const [searchText , setSearchText] = useState("")
    const [isShow , setisShow] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
 
    const handleFocus = () => {
      setIsFocused(true);
      isFocused === false ? setisShow(true)  : setisShow(false)
    };
   
    const handleBlur = () => {
      setIsFocused(false);
      isFocused === false ? setisShow(true) : setisShow(false)

    };

    const onChange = e => {
        setSearchText(e.target.value.trim())
        
        // 通知父组件正在输入
        props.onInput(e.target.value.trim(),e)
    }

    const noDel = () => {
        // setisShow(true)
        setSearchText('')
    }

    useEffect(() => {
        // 监听数据框改变通知父组件
        props.onChange(searchText)
    },[searchText])

    useImperativeHandle(ref, () => {
        return {
            setSearchText
        }
    }, [])
    
    return (
        <div className={style.Header}>
            <div className={style.input} >
                <input type="text" placeholder='请输入搜索的歌手/歌曲' value={searchText} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur}/>
                {searchText && <span onClick={noDel}>X</span>}
            </div>
            {<div className={style.del} style={{isShow}} onClick={noDel} >取消</div>}
        </div>
    )
}

export default forwardRef(Header)