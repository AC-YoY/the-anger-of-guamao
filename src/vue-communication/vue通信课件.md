
### 1. vue组件通信

#### 1.1 设计组件需要考虑的内容

- props
- 可触发事件/api/emit
- slot

> 另外 v-model, .sync

### 2. 用btn组件来展示这五个语法
#### 2.1 slot （滚动组件）
#### 2.2 emit (.native)
#### 2.3 props (单向数据流|子组件更改数据)
#### 2.4 v-model (v-model)
#### 2.5 .sync

### 3. 自定义指令

---------------------------------------------------

// 单项数据流的例子

var con = {
    name: 'Choc',
}

var p = new Person( con )

p.name = 'x'


// 恐怕无论如何考虑这里都是不应该改变的
con.name ? x
