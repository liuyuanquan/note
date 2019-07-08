import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default ({
  Vue,
  options, 
  router, 
  siteData,
  isServer
}) => {
  Vue.use(Antd)
}