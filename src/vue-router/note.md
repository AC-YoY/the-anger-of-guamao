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

### 进阶篇
#### 钩子函数

最重要的next()
```
next()          --> 执行to的导航
next( false )   --> 回到from的导航
next( '/aaa' 或者 { path: '/aaa' })   --> 跳转到其他导航
```

全局导航 --> 定义在全局的router上
```
router.beforeEach( ( to, from, next ) => {
    console.log( '全局钩子，任何路由变化都会调用' )
    next()
} )
router.afterEach( ( to, from ) ) => {
    // 不能再更改路由了
}
```

单个路由的钩子
```
{
    path: '/foo',
    component: Foo,
    beforeEnter: (to, from, next) => {
        // ...
    }
}
```

单个组件的钩子
```
beforeRouteEnter (to, from, next) {
// 在渲染该组件的对应路由被 confirm 前调用
// 不！能！获取组件实例 `this`
// 因为当守卫执行前，组件实例还没被创建
},
beforeRouteUpdate (to, from, next) {
// 在当前路由改变，但是该组件被复用时调用
// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
// 可以访问组件实例 `this`
},
beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // !!!通常用next( false )来阻止用户提交前放弃修改
}
```

#### meta信息
```
//  这个可以用来给路由定义一些需要的功能
//  如是否 需要登录
//  在全局钩子中 判断登录状态，不行就退出
//  这个功能很巧妙，看官网文档
```

#### 路由的动画