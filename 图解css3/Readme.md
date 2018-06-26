# 图解css3 笔记

### 清除浮动 p17
``` css
.clearfix::after,
.clearfix::before {
    display: table;
    content: "";
}
.clearfix::after {
    clear: both;
    overflow: hidden;
}
```