<template>
  <div id="app">
      <!-- <vuedraggable class="wrapper" v-model="list">
        <transition-group>
          <div v-for="item in list" :key="item" class="item">
            <p>{{item}}</p>
          </div>
        </transition-group>
      </vuedraggable> -->
      <router-view></router-view>
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable';

export default {
  name: 'App',
  data () {
    return {
      msg: 'sdgg',
      list: [1,2,3,4,5,6],
      data: [
        {
          year: 2019,
          months: {
            id: 4,
            month: 11
          }
        },
        {
          year: 2019,
          months: {
            id: 3,
            month: 12
          }
        },
        {
          year: 2020,
          months: {
            id: 2,
            month: 11
          }
        },
        {
          year: 2020,
          months: {
            id: 1,
            month: 12
          }
        },
      ]
    }
  },
  components: {
    vuedraggable
  },
  created() {
    this.dataSort();
  },
  methods: {
    dataSort() {
      for (let i = 0; i < this.data.length - 1; i++) {
        let firstYear = this.data[i].year;
        for (let j = i + 1; j < this.data.length; j++) {
          let secondYear = this.data[j].year;
          // 如果第一个元素的年份小于第二个元素的年份,就互换位置
          if(firstYear < secondYear) {
            // console.log("firstYear", firstYear, "secondYear", secondYear);
            let tempNum = this.data[i];
            let tempnum2 = this.data[j];
            this.data[i] = this.data[j];
            this.data[j] = tempNum;
            firstYear = this.data[i].year;
            // console.log("firstYear", firstYear, "secondYear", secondYear,"tempNum", tempNum,"tempnum2", tempnum2, "前一个", i ,"id1:", this.data[i].months.id, "后一个", j ,"id2:",  this.data[j].months.id);
            // 先是4和2互换。=》 2/3/4/1；再是3和1互换=》 2/1/4/3
          }else if(firstYear == secondYear) {// 如果第一个年份和第二个年份相等，则比较月份
            let month1 = this.data[i].months.month;
            let month2 = this.data[j].months.month;
            if(month1 < month2) {
              let tempNum = this.data[i];
              this.data[i] = this.data[j];
              this.data[j] = tempNum;
              firstYear = this.data[i].year;
            }
          }
        }
      }
      // console.log(this.data);
    }
  },
  updated() {
    // console.log(this.list);
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item{
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
</style>
