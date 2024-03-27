import axios from "axios";
const userId = sessionStorage.getItem('userId')

function getUserMessageAction() {
  return (dispatch) => {
    axios.get(`http://localhost:4000/api/showprofile/${userId}`)
      .then(res => {
        const date = new Date(res.data.birthday);
        const formattedDate = date.toLocaleDateString();
        localStorage.setItem('userMessage', JSON.stringify({ ...res.data, birthday: formattedDate }))
        dispatch({
          type: "user-message",
          payload: { ...res.data, birthday: formattedDate }
        })
      })
      .catch((error) => {
        console.log('Axios请求失败：', error)
      })
  }
}

export default getUserMessageAction;