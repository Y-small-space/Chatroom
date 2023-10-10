import request from '@/utils/request'

// 分类：获取文章分类
export const artGetChannelsService = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await request.get('/my/cate/list')
    return response.data
  } catch (error) {
    throw error
  }
}

// 分类：添加文章分类
export const artAddChannelService = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await request.post('/my/cate/add', data)
    return response
  } catch (error) {
    throw error
  }
}

// 分类：编辑文章分类
export const artEditChannelService = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = request.put('/my/cate/info', data)
    return response
  } catch (error) {
    throw error
  }
}

// 分类：删除文章分类
export const artDelChannelService = (id) => {
  request.delete('my/cate/del', { params: { id } })
}

// 文章：获取文章列表
export const artGetListService = (params) => {
  // eslint-disable-next-line no-useless-catch
  try {
    request.get('/my/article/list', { params })
  } catch (error) {
    throw error
  }
}

// 文章：添加文章
export const artAddService = (data) => {
  try {
    request.post('/my/article/add', data)
  } catch (error) {
    console.log(error)
  }
}
