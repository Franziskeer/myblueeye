export const state = () => ({
  brand: 'My Blue Eye',
  docsHostname: 'www.myblueye.shareplay.org'
})

export const getters = {
  settings: state => state.settings.state
}