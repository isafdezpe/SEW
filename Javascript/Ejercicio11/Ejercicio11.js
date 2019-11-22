class BuscadorAnime {

    constructor() {
        this.apicall = "https://kitsu.io/api/edge/anime?filter[text]=";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='https://kitsu.docs.apiary.io/'>Kitsu Api</a>"
    }

    buscar() {
        $("ul").remove();
        $("p").remove();
        var query = $("#buscar").val();
        query = escape(query);
        var url = this.apicall + query;
        this.cargarJson(url);
        $("#buscar").val("");
    }

    cargarJson(urlSite) {
        $.ajax({
            dataType: "json",
            url: urlSite,
            method: 'GET',
            success: function(datos) {
                var content = "<ul>";
                for (var d in datos.data) {
                    content += "<li><h2>"+ datos.data[d].attributes.titles.en_jp 
                        +"</h2><img src='" + datos.data[d].attributes.posterImage.small + "'alt='Poster'/>" 
                        + "<p>Start date: " + datos.data[d].attributes.startDate + 
                        "</p><p>" + datos.data[d].attributes.synopsis + "</p></li>"
                }  
                content += "</ul>";
                $("#buscarButton").after(content);
            },
            error: function() {
                $("#buscarButton").after("<p>¡Tenemos problemas! No puedo obtener JSON de <a href='https://kitsu.docs.apiary.io/'>Kitsu Api</a></p>");
            }
        });
    }
}

var buscador = new BuscadorAnime();