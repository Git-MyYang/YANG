export const ExamApi = () => {
    return fetch('http://zyxcl.xyz/exam_api/music/list').then( res => res.json() )
}