<template>
  <div class="calculator">
    <input v-model.number="input1" name="input1"/>
    <input v-model.number="input2" name="input2"/>
    = {{ result }}
  <div class="keyboard">
    <button name="add" v-on:click='calculate("+")'>+</button>
    <button name="substract" v-on:click='calculate("-")'>-</button>
    <button name="div" @click='calculate("/")'>/</button>
    <button name="mult" @click='calculate("*")'>*</button>
    <button name="sqr" @click='calculate("sqr")'>sqr</button>
    <button name="integer" @click='calculate("integer")'>integer</button>
    <br>
    <br>
    <button @click="toggleEl">Показать экранную клавиатуру</button>
    <div v-if="isVisibleKeyboard">
      <br>
      <div class="keyboardNumbers">
      <button v-for="(n, idx) in numbers" type="number" :key="idx" @click="numberButtons(n)"> {{ n }} </button>
      <button @click="deleteButton()" type="number">Delete</button>
      <br>
      <br>
      <input v-bind:value="{field:'operand1'}" @click="inputField()" type="radio" id="one" v-model="picked">
      <label for="one">operand1</label>
      <input v-bind:value="{field:'operand2'}" @click="inputField()" type="radio" id="two" v-model="picked">
      <label for="two">operand2</label>
      <br>
      <span>Выбрано: {{ picked.field }}</span>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Calc',
  data() {
    return{
      input1: 0,
      input2: 0,
      textArea: 0,
      picked: '',
      fieldValue: 0,
      pickedPlace: 0,
      result: 0,
      toRound: 0,
      isVisibleKeyboard: false,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
  },

  props: {},

  methods:{

    inputField(){
      let pm = this
      if (this.picked.field == 'operand1'){
        pm.textArea = this.input1
      } else if(this.picked.field == 'operand2') {
        pm.textArea = this.input2
      }
    },

    calculate(operation = "+"){
      switch (operation) {
        case "+":
        this.add();
        break;
        case "-":
        this.substract();
        break;
        case "/":
        this.div();
        break;
        case "*":
        this.mult(); 
        break;
        case "integer":
          this.integer();
        break;
        case "sqr":
          this.sqr();
        break;
      }
            },
    add(){
      this.result = this.input1*1 + this.input2*1
    },

    substract(){
      this.result = this.input1 - this.input2
    },

    mult(){
      const{input1,input2} = this
      this.result = input1 * input2
    },

    div(){
      this.result = this.input1 / this.input2
    },

    sqr(){
      this.result = this.input1 ** this.input2
    },

    integer(){
      this.toRound = this.input1 / this.input2
      this.result = Math.trunc(this.toRound)
    },

    toggleEl(){
      this.isVisibleKeyboard = !this.isVisibleKeyboard
    },

    numberButtons(n){
    let vm = this
    if (this.picked.field == 'operand1'){
    vm.input1 += "" + n
    } else if (this.picked.field == 'operand2') { 
    vm.input2 += "" + n
    }
  },

    deleteButton(){
    let lm = this
    if (this.picked.field == 'operand1') {
    lm.input1 = lm.input1.slice(0,-1)+ ""
    } else if (this.picked.field == 'operand2') { 
    lm.input2 = lm.input2.slice(0,-1)+ ""
    }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
