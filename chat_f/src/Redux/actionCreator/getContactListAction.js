import axios from "axios";
const userId = localStorage.getItem('userId')

function getContactListAction() {
  console.log(userId)
  return (dispatch) => {
    axios.get(`http://localhost:4000/api/friendList?userId=${userId}`)
      .then(res => {
        dispatch({
          type: "contact-user",
          payload: res.data
        })
      })
      .catch((error) => {
        console.log('Axios请求失败：', error)
      })
  }
}

export default getContactListAction