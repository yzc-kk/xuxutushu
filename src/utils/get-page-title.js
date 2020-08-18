import defaultSettings from '@/settings'

const title = defaultSettings.title || '栩栩图书'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
