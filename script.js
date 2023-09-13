$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("active");
  });
});

$(document).ready(function () {
  
    showAllElements();


    $('.option').click(function () {
        var target = $(this).data('target');
        switch (target) {
            case 'all':
                showAllElements();
                break;
            case 'card':
                hideAllElements();
                showElements('.card');
                break;
            case 'datatable':
                hideAllElements();
                showElements('.table');
                break;
            case 'todolist':
                hideAllElements();
                showElements('.list-group');
                break;
        }
    });

    function hideAllElements() {
        $('.card, .table, .list-group').hide();
    }

    function showAllElements() {
        $('.card, .table, .list-group').show();
    }

    function showElements(selector) {
        $(selector).show();
    }
});

$(document).ready(function () {
  
    $('#addTaskBtn').click(function () {
        var newTaskText = $('#newTask').val().trim();
        if (newTaskText !== '') {
            addTask(newTaskText);
            $('#newTask').val('');
        }
    });

  
    $('#newTask').keypress(function (e) {
        if (e.which === 13) {
            $('#addTaskBtn').click();
        }
    });


    function addTask(taskText) {
        var listItem = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>');
        listItem.append('<span>' + taskText + '</span>');
        listItem.append('<button class="btn btn-danger btn-sm deleteTask">Delete</button>');

        $('#todoList').append(listItem);

 
        listItem.find('.deleteTask').click(function () {
            listItem.remove();
        });
    }
});
