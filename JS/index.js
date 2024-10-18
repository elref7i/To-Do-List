'use strict';
//* HTML Element
// let iconColumnTasks = document.querySelector('#column-tasks');
// let iconRowTasks = document.querySelector('#grid-tasks');
// let buttonAddTask = document.querySelector('#add-task');
let Test = document.querySelector('.task-data');

//* function

$('.btn').on('click', function (e) {
  $('.task-data').show(500);
  $('html').css({ overflow: 'hidden' });
});

$('.task-data').on('click', function (e) {
  if ($(e.target).is($(this))) {
    $(this).hide(500);
  }
});

function addTask() {
  const data = {
    nextUp: {},
    inProgress: {},
    done: {},
  };
}
$('.input-data').on('click', function () {
  console.log($('#status-input').val());
  console.log($('#category-input').val());
  console.log($('#title-input').val());
  console.log($('#description-input').val());
});
