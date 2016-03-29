// This is a manifest file that'll be compiled into application.js, which will include all the files
//
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree . 

var hide_spinner = function(){
	$('#spinner').hide();
}

var show_spinner= function(){
	$('#spinner').show(); 
}

var init_stock_lookup;


init_stock_lookup = function() {
	$('#stock-lookup-form').on('ajax:before', function(event,data,status){
		show_spinner();
	});

	$('#stock-lookup-form').on('ajax:after', function(event,data,status){
		hide_spinner();
	});

	$('#stock-lookup-form').on('ajax:success', function(event, data, status) {
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	});
	$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error) {
		hide_spinner(); 
		$('#stock-lookup-results').replaceWith(' ');
		$('#stock-lookup-errors').replaceWith('Stock was not found');
	});
};

$(document).ready(function() {
	init_stock_lookup();
});


