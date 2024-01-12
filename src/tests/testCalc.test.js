import { mount } from "@vue/test-utils"
import Calc from "../components/Calc.vue"


describe('Calc', ()=>{
    test('test first operand input value', ()=>{
        const wrapper = mount(Calc)
        const input1 = wrapper.find("input[name=input1]")
        input1.setValue("1")
        expect(wrapper.vm.input1).toBe(1)
    })

    test('test second operand input value', ()=>{
        const wrapper = mount(Calc)
        const input2 = wrapper.find("input[name=input2]")
        input2.setValue("2")
        expect(wrapper.vm.input2).toBe(2)
    })

    it('test sum', ()=>{
        const wrapper = mount(Calc)
        const input1 = wrapper.find("input[name=input1]")
        input1.setValue("1")
        expect(wrapper.vm.input1).toBe(1)
        const input2 = wrapper.find("input[name=input2]")
        input2.setValue("2")
        expect(wrapper.vm.input2).toBe(2)

        const add = wrapper.find("button[name=add]")
        add.trigger('click')
        expect(wrapper.vm.result).toBe(3)
    })

    it('test substract', ()=>{
        const wrapper = mount(Calc)
        const input1 = wrapper.find("input[name=input1]")
        input1.setValue("1")
        expect(wrapper.vm.input1).toBe(1)
        const input2 = wrapper.find("input[name=input2]")
        input2.setValue("2")
        expect(wrapper.vm.input2).toBe(2)

        const substract = wrapper.find("button[name=substract]")
        substract.trigger('click')
        expect(wrapper.vm.result).toBe(-1)
    })

})