function ajaxCall(funcName, args, callback) {
    $.ajax({
        contentType: 'application/json',
        data: JSON.stringify({
            "function": funcName,
            "args": args
        }),
        dataType: 'json',
        success: function(data){
            callback(data);
        },
        error: function(){
            callback({ Error: "API error"});
        },
        processData: true,
        type: 'POST',
        url: 'https://zqj23scaic.execute-api.us-east-1.amazonaws.com/default/SuggestionsJS'
    });
}

function handleError(error) {
    $('#error-target').html("<div class='alert alert-danger'>" + error + "</div>");
}

function getUrlVar(name)
{
    var pairs = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < pairs.length; i++)
    {
        var valueParts = pairs[i].split('=');

        if (valueParts[0] == name) {
            return valueParts[1];
        }
    }
}