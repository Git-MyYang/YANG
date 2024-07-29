import { useEffect, useState } from 'react'
import style from './SearchDefault.module.scss'
import { searchHotApi } from '../../services' 
import classNames from 'classnames'

const SearchDefault = (props) => {

    const [hotList , setHotList] = useState([])

    const getList = async () => {
        const res = await searchHotApi()
        setHotList(res.data)
        console.log(hotList)
    }

    useEffect(() => {
        getList()
    },[])

    const toDel = () => {
        props.setSearchHistory([])
    }

  return (
    <div className={style.wrap}>
        { props.searchHistory.length > 0 &&
            <>
                <div className={style.title}><span>搜索历史</span> <p onClick={toDel}>清空</p></div>
                <ol className={style.ols}>
                    {props.searchHistory.map(v =>
                    <li className={style.lists} key={v}>{v}</li>
                    )}
                </ol>
            </>
        }

        <div className={style.title}>热门搜索</div>
        <ul className={style.uls}>
            {hotList.map((item,index) => 
                (<li key={item.searchWord} className={style.lis}>
                    <span><i className={classNames({ [style.hl]: index < 3 })}>{index + 1}.</i> {item.searchWord}</span>
                    {item.iconUrl && <img className={style.image} src={item.iconUrl} />}
                </li>)
            )}
        </ul>
    </div>
  )
}

export default SearchDefault
