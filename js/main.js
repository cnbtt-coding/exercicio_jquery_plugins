$(document).ready(function() {

    $('#telefone').mask('(00) 00000 - 0000', {
        placeholder: '(00) 00000 - 0000'
    })


    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Insira seu CPF'
    })


    $('#cep').mask('00000-000', {
        placeholder: 'Insira seu CEP'
    })

    $('form').validate({
        rules: {

            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            telefone: {
                required: true
            },

            cpf: {
                required: true
            },

            endereco: {
                required: true
            },

            cep: {
                required: true
            }
        },

        messages: {
            nome: '<p class="error-message">Nome incompleto</p>',
            email:'<p class="error-message">E-mail inválido</p>',
            telefone:'<p class="error-message">Telefone inválido</p>',
            cpf: '<p class="error-message">CPF inválido</p>',
            endereco: '<p class="error-message">Endereço inválido</p>',
            cep: '<p class="error-message">CEP inválido</p>'
        },

        submitHandler: function(form) {

            var nome = $('#nome').val();

            alert(`Parabéns ${nome}, seu cadastro foi realizado com sucesso !`)

            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#cpf').val('');
            $('#endereço').val('');
            $('#cep').val('');
        }
    })
})