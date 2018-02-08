// Copy from iView

export default {
    bind (el, binding, vnode) {
        // console.log( '元素', el )
        // console.log( '绑定', binding )
        function documentHandler (e) {
            // console.log( '触发了没', e.target )
            if (el.contains(e.target)) {
                // console.log( '内部' )
                return false;
            }
            // console.log( '继续' )
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
};
