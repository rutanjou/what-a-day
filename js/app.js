(function(){


	var app={

		setDay: null,
		setMonth: null,
		setYear: null,
		errorsTab: [],

		init:function(){
			this.listerners();
		},

		listerners:function(){
			$('#setSubmit').on('click',this.setValue.bind(this))
		},

		setValue:function(){
			
			this.errorsTab.length = 0; // errorsTab = []
			this.setDay = $('#setDay').val();
			this.setMonth = $('#setMonth').val();
			this.setYear = $('#setYear').val();

			this.verifyDay();
			this.verifyYear();

			this.verifyError();

		},

		verifyDay:function(){
			$('#setDay').css('borderColor', '#47b8e0');
			if(this.setDay<1 || this.setDay>31){
				this.errorsTab.push('Le jour doit être compris entre 1 et 31!');
				$('#setDay').css('borderColor', 'red');
			}
		},

		verifyYear:function(){
			$('#setYear').css('borderColor','#47b8e0');
			if(this.setYear < 1){
				this.errorsTab.push("L'année doit etre supérieure à 0");
				$('#setYear').css('borderColor','red');
			}
		},

		verifyError:function(){
			$('#message').html('');
			if(this.errorsTab.length>0){
				for(var i = 0; i<this.errorsTab.length; i++){
					$('#message').append(this.errorsTab[i])
				}
			}
		}

	}

	app.init()
})();