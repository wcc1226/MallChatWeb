// 计数 count，用于区分标题 2 种状态
let count = 0
// 定时器句柄
let timer: null | number = null

// 先保存现有标题
const title = document.title

export default {
  // 是否闪烁中，
  isShaking: false,
  start() {
    // 不允许重复触发
    if (this.isShaking) return
    // 标识闪烁中
    this.isShaking = true
    // 开始计时
    timer = setInterval(() => {
      // count 除 2 取余，来判断显示还是为空
      if (count % 2 === 0) {
        document.title = `【新消息】${title}`
      } else {
        document.title = `【】${title}`
      }
      // 累加计数
      count++
    }, 1000)
  },
  // 重置闪烁逻辑
  clear() {
    // 清除定时器
    timer && clearInterval(timer)
    timer = null
    // 重置计数
    count = 0
    // 标记闪烁结束
    this.isShaking = false
    // 还原标题
    document.title = title
  },
}
