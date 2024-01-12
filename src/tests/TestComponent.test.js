import TestComponent from './TestComponent.vue'
import { mount } from '@vue/test-utils'
import { expect } from '@jest/globals'


describe('Test TestComponent', ()=>{
    test('Test Props', ()=>{
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello World"
            }
        })
        expect(wrapper.text()).toContain('The message is: Hello World')
    })
})



/*
1- Component import
2- Mount Component
2.1- Test method
3- Passed Props 
4- default text === text from component template
*/