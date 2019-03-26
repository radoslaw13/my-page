export const CHANGE_LANG = 'CHANGE_LANG'

export function changeLang(language)  {
    return {
        type: CHANGE_LANG,
        language
    }
}