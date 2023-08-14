### 技术栈
```
 vue3.3.x + vuex + router + typescript + axios + Element-plus
```

### 1、封装
axios 封装，src/plugins/axios.ts  全局参数修改，src/api/  接口列表<br>
vuex 封装  module、getters、mutations、actions.state<br>

### 2、组件
#### 自定义国际化（目前仅支持中、英),兼容Element-plus 组件国际化，使用方法如下：
```vue
    <!--自定义使用-->
    <div>{{ $t("person.name") }}</div>
    <!--element-plus 使用-->
    <el-config-provider :locale="store.getters.getLocale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="50"
         :page-size="20"
         :pager-count="11"
         layout="prev, pager, next, jumper"
      />
    </el-config-provider>
    <!--store.getters.getLocale 为Element-plus 国际化locale,自定义切换语言可同时切换-->
```

组件  /components/lang.vue<br>
语言文件 /language/

#### 增加语言需更改 /components/lang.vue 、 main.ts,在如下处引用语言文件

####  lang.vue （此处修改的为Element-plus 组件国际化）
---- 此处需引用其他语言文件并重构下方判断语言类型 locale.value
```javascript
    import { computed, ref, defineEmits } from 'vue'
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
    import en from 'element-plus/dist/locale/en.mjs'
    
    const language = ref(locale.value)
    let localeElement = computed(() => (locale.value === 'zh-cn' ? zhCn : en))
    
    const toggle = () => {
        locale.value = locale.value === 'zh-cn' ? 'en' : 'zh-cn'
        localeElement = computed(() => (locale.value === 'zh-cn' ? zhCn : en))
    }
```
####  main.ts （此处修改的为自定义语言文件）
```javascript
    import { createI18n} from 'vue-i18n';
    import ZH from './language/zh-cn';
    import EN from './language/en';
    const messages = {
        'zh-cn': { ...ZH },
        en: { ...EN },
    };
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: defaultLanguage,
        messages
    });
```
#### 引入其他语言文件并增加messages  key   key需与Element-plus国际化语言文件保持一致
#### element-plus 语言列表：
https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang

### 动态增加自定义语言翻译
```typescript
    import { useI18n  } from 'vue-i18n';
    const { t, locale, setLocaleMessage } = useI18n();
    
    import ZH from '../language/zh-cn';
    import EN from '../language/en';
    
    ZH.helloWord = "你好"
    EN.helloWord =  "hello"
    setLocaleMessage('en', ZH);
    setLocaleMessage('zh-cn', EN);
    // 使用
    {{ t('helloWord') }}
```

