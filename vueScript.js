Vue.component('todo-item', {
  template: `
    <div @click="$emit(\'remove\')" style="font-size: 20pt;">
      {{ title }}
    </div>
  `,
  props: ['title']
})
window.onload = function(){
    new Vue({
      el: '#todo-list-example',
      data: {
        newTodoText: '',
        todos: [],
        nextTodoId: 0
      },
      methods: {
        addNewTodo: function () {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          })
          this.newTodoText = ''
        }
      }
    })
}
