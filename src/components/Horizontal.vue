<template>
  <div id="horizontal">
    <h1><router-link to="/">首页</router-link></h1>
    <input id="down" type="button" value="▼" /><br>
    <input v-model="num"  type="text" step="1" min="1" max="100" width="400"/> 
    <ul>
      <li style="z-index: 5;">
        <a class="on" href="#">
          <span class="num">1</span>
          <span class="step">STEP1</span>
        </a>
      </li>
      <li style="z-index: 4;">
        <a href="#">
          <span class="num">2</span>
          <span class="step">STEP2</span>
        </a>
      </li>
      <li style="z-index: 3;">
        <a href="#">
          <span class="num">3</span>
          <span class="step">STEP3</span>
        </a>
      </li>
      <li style="z-index: 2;">
        <a href="#">
          <span class="num">4</span>
          <span class="step">STEP4</span>
        </a>
      </li>
      <li style="z-index: 1;">
        <a href="#">
          <span class="num">5</span>
          <span class="step">STEP5</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Horizontal',
  data() {
    return {
      num: 1
    }
  }
}
</script>
<style scoped>
/* 下划线去除：   a{text-decoration:none}
		文本缩进标签 text-indent 不会影响总体宽度（padding会）
		需要将a标签设置为块元素，才能设高宽、hover效果   代码：a{display:block}
		hover格式   a:hover{} */
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
} /* 初始化页面设置*/
ul {
  list-style: none;
  height: 50px;
  padding-left: 30px;
} /*给水平菜单添加整体背景，需要对height和width进行设置，因为菜单<li>浮动后，<li>脱离了文档流，导致<ul>将失去高度和宽度；如果需要对<ul>进行整体背景设置，首先要给定义宽，高*/
/* list-style: none;无序列表圆点去除 */
li {
  float: left;
  margin-top: 20px;
  margin-left: -20px;
  position: relative; /*margin-left: -20px;箭头叠加；保证z-index有效*/
} /* //将垂直菜单变成水平菜单 */
a {
  text-decoration: none;
  display: block;
  height: 30px;
  line-height: 30px;
  width: 120px;
  color: #fff;
  background-color: #ccc;
  margin-bottom: 1px;
  text-align: center;
  vertical-align: middle;
  /* background: url(../../public/t1.svg) no-repeat 100% 0; */
  /* background: url(images/lable.png) no-repeat 100% 0; */
  background-position: 0 -29px;
}
.on {
    background-position: 0 0px;
}
a:hover {
  background-position: 0 0px;
  background: url(../../public/t1.svg) no-repeat 100% 0;
}
/* background-position: 0 -30px;背景图片沿着y轴上移30px,x轴不变 */
/* color 字体颜色；不知为什么-30会有1像素偏差，在Google浏览器， ie没有 */
.num {
  font-size: 16px;
  letter-spacing: 8px; /* （字间距） */
  vertical-align: middle;
}
.step {
  vertical-align: middle; /*  vertical-align 属性设置元素的垂直对齐方式 */
}
</style>
