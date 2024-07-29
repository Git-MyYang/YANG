import { useState } from 'react'
import style from './SearchSuggest.module.scss'


const SearchSuggest = (props) => {
    // const format = v => {
    //     const reg = new RegExp(props.searchText, 'gi')
    //     console.log(reg)
    // }
    // format()
  return (
    <div >
        {props.list.length === 0 ?
        <div>没有匹配内容，请重新输入。</div>
        :
        <ul className={style.suguls}>
            {props.list.map((item,index) =>
                <li
                    key={item.id}
                    onClick={() => props.onSearch(item.name)}
                >{index + 1}. {item.name}</li>    
            )}
        </ul>
        }
    </div>
  )
}

export default SearchSuggest
