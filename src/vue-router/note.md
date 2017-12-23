###  vue-router笔记
#### 动态路由

由于组件复用，不会再次执行生命周期（mounted之类），内容不变化，解决办法
```
//  1. 监听 $route
'$route' ( to, from ) { //首次进入组件中不会被调用
    //  处理逻辑
}
//  2. 写在组件中
beforeRouteUpdate ( to, from, next ) { //首次进入组件中是否会被调用？
    //  处理逻辑完了
    //  要手动调用next
    next()
}
```

> 动态路由有高级（正则）匹配模式，可以实现这几种功能
+ 自定义路由样式 ( / --> ? )
+ 限制匹配 ( 只匹配数字：/:abc --> /:abc(\\\\d+) )

[文档推荐的高级匹配](https://github.com/vuejs/vue-router/blob/next/examples/route-matching/app.js)

