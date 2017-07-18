//index
var index = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				let aLi = document.getElementsByTagName('li');
				for(let i=0;i<aLi.length;i++){
					aLi[i].index = i;
					aLi[i].onclick = function(){
						alert(this.index)
					}
				}
			})
		})
	}
}
//about
var about = {
	init: function(inp,btn) {
		require(['jquery'],function($){
			$(document).ready(function(){	
			  $(btn).click(function(){
			  	alert($(inp).val())
			  })
			})
		})
	}
}
//news
var news={
	init:function(par){
		require(['jquery'],function($){
			$(document).ready(function(){
				alert(par)
			})
		})
	}
}
exports.index = index;
exports.about = about;
exports.news=news;