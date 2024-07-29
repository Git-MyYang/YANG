
export const searchHotApi = () => {
    return fetch('https://zyxcl.xyz/music/api/search/hot/detail').then( res => res.json() )

}

export const searchSuggestApi = (keywords) => {
    return fetch(`https://zyxcl.xyz/music/api/search/suggest?keywords=${keywords}`).then( res => res.json() )
}

export const searchApi = (keywords) => {
    return fetch(`https://zyxcl.xyz/music/api/search?keywords=${keywords}`).then( res => res.json() )
}