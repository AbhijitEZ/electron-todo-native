let tag = $("h1");
let addTodoBtn = $("#addTodo");
let addTodoInput = $(".add-todo-input");


tag.on("click", function () {
  $(this).hide();
});

$("p").on("click", function () {
  tag.show();
});

addTodoBtn.on("click", function () {
  addTodoInput.addClass("show");
});

addTodoInput.on("keyup", function (e) {
  if (e.keyCode === 13) {
    $(".todo-container .items").append(`<li>${e.target.value}</li>`);
    e.target.value = ''
  }
});

$('.todo-container .items').on('click', function(e) {
  e.target.remove()
})