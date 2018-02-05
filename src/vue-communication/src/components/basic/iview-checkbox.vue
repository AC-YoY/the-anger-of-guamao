<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">

            <!--这是✅-->
            <span :class="innerClasses"></span>

            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :value="label"
                v-model="model"
                :name="name"
                @change="change">

            <input
                v-if="!group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                :name="name"
                @change="change">
        </span>
        <slot><span v-if="showSlot">{{ label }}</span></slot>
    </label>
</template>


<script>
    import { findComponentUpward, oneOf } from '../utils/assist';
    import Emitter from '../mixins/emitter';

    const prefixCls = 'ivu-checkbox';

    export default {
        name: "IviewCheckbox",
        mixins: [ Emitter ],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            label: {
                type: [String, Number, Boolean]
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            size: {
                validator ( value ) {
                    return oneOf( value, ['small', 'large', 'default']);
                }
            },
            name: {
                type: String
            }
        },
        data () {
            return {
                model: [],
                currentValue: this.value,
                group: false,
                showSlot: true,
                parent: findComponentUpward(this, 'IviewCheckboxGroup')
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            this.parent = findComponentUpward(this, 'IviewCheckboxGroup');
            console.log( 'iview-checkbox parent', this )
            if ( this.parent ) {
                this.group = true;
            }
            if (!this.group) {
                this.updateModel();
                this.showSlot = this.$slots.default !== undefined;
            } else {
                this.parent.updateModel(true);
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }
                //  这是点击了之后 原生input做的
                const checked = event.target.checked;
                this.currentValue = checked;

                let value = checked ? this.trueValue : this.falseValue;
                this.$emit('input', value);

                if (this.group) {       //  如果是组合使用
                    this.parent.change(this.model);
                } else {
                    this.$emit('on-change', value);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            updateModel () {
                this.currentValue = this.value === this.trueValue;
            }
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                this.updateModel();
            },
            model ( vla ) {
                console.log( 'group 数组变化了', vla )
            }
        }
    };
</script>
