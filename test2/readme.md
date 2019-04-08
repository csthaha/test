- outline 轮廊
  绘制于元素周围的一条线，位于边框外围，可起到元素突出的作用（轮廊线不会占据空间，也不一定是矩形）；
     outline：#fff solid thick （颜色 线形 厚度）

- background-position 雪碧图： 多个图片集中在yi个图片中的图。
  background-position -42px 0; 图片往左移动 42 像素
    background-position -15px -30px； 图片往左平移15，往上平移30 像素

- margin-block-start :定义了一个元素逻辑块的开始边距，是用来元素的书写模式，方向 和文本方向进行实际边    界的衡量
  margin-block-start: 10px;  /* 绝对长度 */
  margin-block-start: 1em;   /* 文本的相对大小 */
  margin-block-start: 5%;    /* 相对于最近块容器的大小 */
- margin-block-end : 
- margin-inline-start
- margin-inline-end

-  word-wrap: break-word; 允许 长单词或 URL 地址换行到下一行
     word-wrap: normal  只在允许的断字点换行
     break-word：在长单词或者 URL 地址内部换行

 - vertical-align: middle; :设置元素的垂直对齐方式

 - input  autocomplete="off" : 是否让浏览器记入之前输入的值，默认值为 on

 - text-rendering: auto; 浏览器为速度，易读性，几何精度等自动优化来绘制文本

 - text-transform: none; 控制文本的大小写
   capitalize ：文本中的每个单词 以大写字母开头
   uppercase： 将单词转为 大写字母
   lowercase： 将单词转为 小写字母
   inherit    规定应该从父元素继承 text-transform 属性的值。

-  input{
     font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
     规定应该从父元素继承 text-transform 属性的值。

    
-  vertical-align: middle; //设置元素的垂直对齐方式
 }

 input submit{
     -webkit-appearance: push-button;
    user-select: none;
    white-space: pre; 
    align-items: flex-start;  弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
    text-align: center;       文字水平居中
    box-sizing: border-box;  除去 padding margin 边框 等之后盒子的 最终大小
 }

 - background-size: contain; 将图形扩展至最大尺寸，以使其宽度和高度完全适应内容区域
 
- text-rendering: optimizeLegibility; 浏览器的效果

-  white-space: nowrap;  规定段落中的文本不进行换行，直到遇到 br 标签为止
 
- vertical-align: middle; 设置元素的垂直对齐方式