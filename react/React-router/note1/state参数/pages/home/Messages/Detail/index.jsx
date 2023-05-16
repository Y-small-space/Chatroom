export default function Detail(props){
    const {id, title} = props.match.params;
    const content = [
        {id:'01',content:'FIRST'},
        {id:'02',content:'SECOND'},
        {id:'03',content:'THIRD'}
    ]
    const result = content.find((obj)=>{
        return (obj.id===id)
    })
    return(
        <ul>
            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{result.content}</li>
        </ul>
    )
}