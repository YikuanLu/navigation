import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'
import {
  Radio
} from 'element-ui'

// 自定义主题样式(这里我们会在这个文件内引入我们所需的组件的样式)
// import '../assets/theme/element-theme.scss'

Vue.use(Radio, { locale })
