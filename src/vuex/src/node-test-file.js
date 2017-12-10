let x = {}

const obj = {
    a: 1,
    b: 2,
    c: 3,
    __ob__: function() {
        console.log( 'hehe' )
    }
}

x.obj = obj

const obj2 = {
    a: 0,
    b: 0,
    c: 0
}
x.obj.__ob__()

x.obj = { ...obj, ...obj2 }

console.log( 'obj', x.obj )
