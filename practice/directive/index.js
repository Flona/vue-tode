import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p v-show="active">show:{{text}}</p>
      <p v-if="active">v-if content</p>
      <p v-else>v-else content</p>
      <p v-text="text"></p>
      <p v-html="html"></p>
      <ul>
        <li v-for="n in 3" :key="n">{{n}}</li>
        <li v-for="(item, index) in arr" :key="item">{{item}}: {{index}}</li>
        <li v-for="(value, key, index) in obj" :key="value">{{value}}: {{key}}: {{index}}</li>
      </ul>
      <p v-on:click="handleClick">click</p>
      <input type="text" v-model.number="text"></input>
      <input type="text" v-model.trim="text"></input>
      <input type="text" v-model.lazy="text"></input>
      <div>
        <input type="checkbox" :value="4" v-model="arr"></input>
        <input type="checkbox" :value="5" v-model="arr"></input>
        <input type="checkbox" :value="6" v-model="arr"></input>
      </div>
      <div>
        <input type="radio" :value="4" v-model="picked"></input>
        <input type="radio" :value="5" v-model="picked"></input>
        <input type="radio" :value="6" v-model="picked"></input>
      </div>
      <p v-pre>show:{{text}}</p>
      <p v-once>show:{{text}}</p>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    html: `<span>this is html</span>`,
    arr: [4, 5, 6],
    obj: {a: 7, b: 8, c: 9},
    picked: '4'
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  }
})
