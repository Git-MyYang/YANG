import './App.css'
import { useState, useRef } from 'react'
import Header from './components/header/Header'
import SearchDefault from './components/searchDefault/SearchDefault.jsx'
import SearchResult from './components/searchResult/SearchResult.jsx'
import SearchSuggest from './components/searchSuggest/SearchSuggest.jsx'
import { searchSuggestApi, searchApi } from './services/index.js'

function App() {
  // 渲染展示的页面
  const [curPage, setcurPage] = useState(0)
  // 历史记录列表
  const [searchHistory, setSearchHistory] = useState([])
  // 搜索建议列表
  const [suggestList, setSuggestList] = useState([])
  // 搜索内容，传给接口的 keywords
  const [searchText, setSearchText] = useState('')
  // 搜索建议防抖延时器
  const suggestTimer = useRef(null)
  // 获取 Header 组件的方法
  const HeaderRef = useRef(null)

  // 搜索建议
  const getSuggest = async val => {
    const res = await searchSuggestApi(val)
    setSuggestList(res.result?.songs || [])
    console.log(res,suggestList)
  }
  // 输入框输入内容，展示搜索建议
  const onInput = (val) => {
    setcurPage(1)
    setSearchText(val)
    // 添加防抖
    if (suggestTimer.current) clearTimeout(suggestTimer.current)
    suggestTimer.current = setTimeout(() => {
      getSuggest(val)
    }, 500)
  }

  // 没有搜索内容，跳转默认页面
  const onChange = (val) => {
    if(val.length === 0){
      setSuggestList([])
      setcurPage(0)
    }
  }

   // 开始搜索
   const startSearch = async val => {
    setcurPage(2) // 展示搜索结果页面
    HeaderRef.current.setSearchText(val) // 把要搜索的内容添加到input中
    addHistory(val) // 添加历史记录
    setSearchText(val) // 存要搜索的内容
    // getSearchResult(0, val) // 开始搜索
  }

    // 存历史记录
    const addHistory = val => {
      const index = searchHistory.indexOf(val)
      const arr = [...searchHistory]
      if (index > -1) {
        arr.splice(index, 1)
      } else if (searchHistory.length === 10) {
        arr.pop()
      }
      arr.unshift(val)
      setSearchHistory(arr)
    }
  

  const renderPage = () => {
    if(curPage === 0){
      return <SearchDefault searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>
    }else if(curPage === 1){
      return <SearchSuggest list={suggestList} searchText={searchText} onSearch={startSearch}/>
    }else if(curPage === 2){
      return <SearchResult />
    }
  }
  return (
    <div>
        <Header 
        ref={HeaderRef}
        onChange={onChange}
        onInput={onInput}
        onSearch={startSearch}
        />
        <div>
          {renderPage()}
        </div>
    </div>
  )
}

export default App
