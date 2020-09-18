export const state = () => ({
  brand: 'My Blue Eye',
  docsHostname: 'www.theeyeblue.com'
})

export const getters = {
  settings: state => state.settings.state
}