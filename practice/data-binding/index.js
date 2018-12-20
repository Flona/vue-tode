import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `<div :class="{active:active,tab:tab}">{{contant}}</div>`,
  // template: `<div :class="[tab?'tab':'']">{{contant}}</div>`,
  template: `<div :style="[style1, style2]">this is contant</div>`,
  // template: `<div v-text="html"></div>`,
  // template: `<div v-html="html"></div>`,
  data: {
    contant: 'this is contant',
    html: '<span>v-html<span>',
    active: false,
    tab: true,
    style1: {color: 'red', fontSize: '20px'},
    style2: {color: 'pink'}
  }
})
