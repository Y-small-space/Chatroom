import request from '@/utils/request'

// 获取文章分类
export const artGetChannelsService = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await request.get('/my/cate/list')
    return response.data
  } catch (error) {
    throw error
  }
}

// 添加文章分类
export const artAddChannelService = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await request.post('/my/cate/add', data)
    return response
  } catch (error) {
    throw error
  }
}

// 编辑文章分类
export const artEditChannelService = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = request.put('/my/cate/info', data)
    return response
  } catch (error) {
    throw error
  }
}

// 删除文章分类
export const artDelChannelService = (id) =>
  request.delete('my/cate/del', { params: { id } })
