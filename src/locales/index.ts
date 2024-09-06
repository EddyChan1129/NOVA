import { createI18n } from 'vue-i18n'
import CN from './zh-CN.json'
import US from './en-US.json'
import TW from './zh-TW.json'

const messages = {
    'zh-CN': {
        login: '登入',
        register: '註冊',
    },
    'en-US': {
        login: 'Login',
        register: 'Register',
    },
    'zh-TW': {
        login: '123',
        register: '123',
    },
}

const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'zh-TW',
    messages: {
        'zh-CN': CN,
        'en-US': US,
        'zh-TW':TW
    },
})

// 使用 import.meta.glob 動態導入語言包
const locales = import.meta.glob('./*.json', { import: 'default' })

// 動態設置語言
export async function setLocale(locale) {
    // 如果語言已經加載，直接設置為當前語言
    if (i18n.global.availableLocales.includes(locale)) {
        i18n.global.locale.value = locale
        return
    }

    // 動態加載語言包並設置為當前語言
    const messages = await loadLocaleMessages(locale)
    i18n.global.setLocaleMessage(locale, messages)
    i18n.global.locale.value = locale
}


// 加載語言包
async function loadLocaleMessages(locale) {
    const localePath = `./${locale}.json`
    if (locales[localePath]) {
        return await locales[localePath]()
    } else {
        throw new Error(`${locale} not found`)
    }
}

export default i18n





