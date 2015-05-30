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

var estados = ["BR","AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ] ;

var typingTimer;           
var doneTypingInterval = 5000

$(document).on("keyup paste" , '#input_label' , function() {
	CandidatoSvc.findAll($(this).val(), $("#estado_input option:selected").text() ).done(function(data) {
                        console.log(data[0]) ;
        });	
});
