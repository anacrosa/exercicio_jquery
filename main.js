$(document).ready(function(){

    $("#task-form").hide();

    $('header button').click(function () {
        $("#task-form").slideToggle();
    })

    // Adiciona tarefa ao submeter o formulário
    $('#task-form').submit(function(event){
        event.preventDefault();
        var taskName = $('#task-manager').val();
        if(taskName.trim() !== ''){
            $('#task-list').append('<li><span class="task-name">' + taskName + '</span><span class="task-actions"><button class="complete-btn">Concluir</button><button class="delete-btn">Excluir</button></span></li>');
            $('#task-manager').val('');
        }
    });

    // Marca tarefa como concluída ao clicar no botão "Concluir"
    $(document).on('click', '.complete-btn', function(){
        $(this).closest('li').find('.task-name').toggleClass('completed');
    });

    // Exclui a tarefa ao clicar no botão "Excluir"
    $(document).on('click', '.delete-btn', function(){
        $(this).closest('li').remove();
    });
});