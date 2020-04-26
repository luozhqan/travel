export default {
  changeCity (state, city) {
    state.city = city
    // 改变城市时，存入localStorage
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
