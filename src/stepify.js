		(function( $ ) {
			$.fn.stepify = function(options) {
				var settings = $.extend({
					blockEl : 'section',
					nextBtn : '.page-next',
					nextCheck : null,
					backBtn	 : '.page-back',
					backCheck : null,
					skipBtn : '.page-skip',
					skipCheck : null,
					tabShow : 0
				}, options );
				
				var currTab = settings.tabShow;
				var self = this;
				
				var showBlock = function(){

					self.find(settings.blockEl).each(function(i, block){

						var block = $(block);
						if (i === currTab){
							block.show();
						} else {
							block.hide();
						}
					});
				}
				
				showBlock();
				
				this.find(settings.nextBtn).click(function(){
					
					var passed = true;
					
					if (typeof(settings.nextCheck) === 'function') {
						passed = settings.nextCheck(currTab);
					}
					
					if (passed) {
						currTab++;
						showBlock();
					}

				});
				
				this.find(settings.backBtn).click(function(){
					
					var passed = true;
					
					if (typeof(settings.backCheck) === 'function') {
						passed = settings.backCheck(currTab);
					}
					
					if (passed) {
						currTab--;
						showBlock();
					}

				});
				
				this.find(settings.skipBtn).click(function(){
					
					var passed = true;
					
					if (typeof(settings.skipCheck) === 'function') {
						passed = settings.skipCheck(currTab);
					}
					
					if (passed) {
						currTab++;
						showBlock();
					}

				});
			};
		}( jQuery ));