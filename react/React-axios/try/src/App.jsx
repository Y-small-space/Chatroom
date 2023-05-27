import axios from 'axios';

function App() {
  const getStudentDate = function(){
    
    axios.get("http://localhost:3000/note").then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  return (
    <div>
      <button onClick={()=>getStudentDate()}>点我获取数据</button>
    </div>
  )
}

export default App;
