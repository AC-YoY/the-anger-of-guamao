###  vue-router笔记
#### 动态路由

由于组件复用，不会再次执行生命周期（mounted之类），内容不变化，解决办法
```
//  1. 监听 $route
'$route' ( to, from ) { //首次进入组件中不会被调用
    //  处理逻辑
}
//  2. 写在组件中
beforeRouteUpdate ( to, from, next ) { //首次进入组件中不会被调用
    //  处理逻辑完了
    //  要手动调用next
    next()
}
//  使用时候建议这样一并管理
mounted () {
    init()
}
'$route' ( to, from ) {
    init()
}
```

> 动态路由有高级（正则）匹配模式，可以实现这几种功能
+ 动态参数可有可无 ( /:num? )
+ 路由可有可无 ( /(sub/)?ssub )
+ 限制匹配 ( 只匹配数字：/:abc --> /:abc(\\\\d+) )

[文档推荐的高级匹配](https://github.com/vuejs/vue-router/blob/next/examples/route-matching/app.js)

#### 编程式导航

```
//  push  假设sub对应的就是/sub路径
router.push( { name: 'sub', params: { num: '123' } } )
    ==> /sub/123
router.push( { name: 'sub', query: { key: 'value' } } )
    ==> /sub?key=value
router.push( path: 'sub/123' )  // 使用path，params无效，就必须自己提供完整的url

//  replace 替换当前url，不保留记录
router.replace( { name: 'sub', params: { num: '123' } } )

//  go
router.go( 1 )
router.go( -1 )
```

#### 声明式
```
<router-link :to="{ name: 'sub', params: { num: 123 }}">User</router-link>
```

#### props将动态路由作为props属性传递给组件
```
{
    path: 'sub/:num(\\d+)?',
    props: {
        default: true,
        'another-view': true,
    },
}
// 注意！要在组件里接收
{
    props: {
        num: { required: true }
    }
}
```
