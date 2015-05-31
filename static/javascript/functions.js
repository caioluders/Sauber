var CandidatoSvc = {
	api: 'http://api.transparencia.org.br/api/v1/candidatos',
	token: 'ZGSPFRkoCRfA',
	get: function(url) {
        	return $.ajax({url: url, headers: {'App-Token': this.token}});
	},

findAll: function(nome , estado , cargp , partido ) {
	var params = '?nome=' + nome + '&estado=' + estado; 
	if (partido != null) {
		params.concat('&partido=' + partido);
	}

	return this.get(this.api.concat(params));
}
}

$(document).on("keyup paste" , '#input_label' , function()  {
	CandidatoSvc.findAll($(this).val(), $("#estado_input option:selected").text() ).done(function(data) {
		var i ;
		$("#container").empty() ;
		for (i = 0 ; i < data.length ; i++ ){
			if ( data[i].foto == null ) {
				data[i].foto = "https://www.drupal.org/files/profile_default.jpg";
			}
				$("#container").append("<a href='#"+data[i].id+"'><div class='politico'>"+"<img class='foto amarelo' src='"+data[i].foto+"' />"+"<p class='nome'>Nome: "+data[i].nome+"</p>"+"<p class='cargo'>Cargo: "+data[i].cargo+"</p>"+"<p class='filiacao'>Partido: "+data[i].partido+"</p>"+"<p class='estado'>Estado: "+data[i].estado+"</p>"+"</div></a>");
		}
        });	
});
