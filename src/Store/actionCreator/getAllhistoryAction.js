import axios from "axios";

const userId = sessionStorage.getItem('userId')

function getAllhistoryAction() {
  return (dispatch) => {
    axios.get(`http://localhost:4000/api/chatHistory/${userId}`)
      .then(res => {
        console.log('res:',res.data);
        dispatch({
          type: "chathistory-content",
          payload: res.data
        })
      })
      .catch((error) => {
        console.log('Axios请求失败：', error)
      })
  }
}

export default getAllhistoryAction