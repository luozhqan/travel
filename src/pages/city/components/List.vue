<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>

          </div>
      </div>

      <div class="area"
      v-for="(item, key) of cities"
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </li>

        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // mapState除了数组还可以是对象
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      // 现在，当调用 Mutations 时，就可以直接调用changeCity，同时把 city传递过去。
      this.changeCity(city)
      // 改变城市，转跳到首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
    // 把 Vuex 中一个叫 changeCity 的 mutation，映射到这个组件的一个名叫 changeCity 的方法里
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc

.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0

  .title
    padding-left: .2rem
    line-height: .54rem
    background: #eee
    color: #666
    font-size: .26rem

  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem

    .button-wrapper
      float: left
      width: 33.33%

      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem

  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
