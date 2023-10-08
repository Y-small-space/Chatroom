import request from '../utils/request'

// 注册接口
export const userRegisterService = async ({
  username,
  password,
  repassword
}) => {
  try {
    const response = request.post('/api/reg', {
      username,
      password,
      repassword
    })
    return response.data // 返回响应数据
  } catch (error) {
    console.error(error)
  }
}

// 登录接口
export const userLoginService = async ({ username, password }) => {
  try {
    const response = await request.post('/api/login', { username, password })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// 获取用户基本信息
export const userGetInfoService = async () => {
  try {
    const response = await request.get('/my/userinfo')
    return response
  } catch (err) {
    console.log(err)
  }
}
