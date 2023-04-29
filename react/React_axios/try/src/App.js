import axios from 'axios';

function App() {
  const getStudentDate = function(){
    axios.get("http://localhost:5050/students").then(
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
      <button onClick={()=>getStudentDate()}>点我获取学生数据</button>
    </div>
  )
}

export default App;
