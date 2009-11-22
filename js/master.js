$('document').ready(function() {

	var default_clock_options = {
		format: '%H:%M',
		foreground: '#fff',
		utc: true,
		timeout: 60000
	}
	
	$('#clock-initlab').jclock($.extend(default_clock_options, {utcOffset: 2}));
	$('#clock-syn2cat').jclock($.extend(default_clock_options, {utcOffset: 1}));
	$('#clock-bcn').jclock($.extend(default_clock_options, {utcOffset: 1}));
	$('#clock-tetalab').jclock($.extend(default_clock_options, {utcOffset: 1}));
	$('#clock-tog').jclock($.extend(default_clock_options, {utcOffset: 0}));
	$('#clock-alphaone').jclock($.extend(default_clock_options, {utcOffset: -5}));
	$('#clock-familab').jclock($.extend(default_clock_options, {utcOffset: -5}));
	$('#clock-hive13').jclock($.extend(default_clock_options, {utcOffset: -5}));
	$('#clock-kwartzLab').jclock($.extend(default_clock_options, {utcOffset: -5}));
	$('#clock-freeside').jclock($.extend(default_clock_options, {utcOffset: -5}));
	$('#clock-makerslocal256').jclock($.extend(default_clock_options, {utcOffset: -6}));
	$('#clock-pumpingone').jclock($.extend(default_clock_options, {utcOffset: -6}));
	$('#clock-cowtown').jclock($.extend(default_clock_options, {utcOffset: -6}));
	
	$("#stream-activation input:checkbox").change(function(){
		$("#stream-activation input:radio[name='" + this.name "']").toggle();
		$("#stream-" + this.name).toggleClass("inactive");
	})
	
	$("#stream-activation input:radio[name='track']").change(function(){
		var current_track = $("#current_track").val();
		$("#stream-activation input:checkbox[name='" + current_track + "']").attr('checked', true);
		$("#stream-" + current_track).toggleClass("inactive");
		
		$("#track-video").html($("#stream-" + this.value + " .stream-video").html().replace("250", "500").replace("200", "400"));
		$("#track-title").html($("#stream-" + this.value + " .stream-title").html());
		
		$("#stream-activation input:checkbox[name='" + this.value + "']").attr('checked', false);
		$("#current_track").val(this.value);
		$("#stream-" + this.value).toggleClass("inactive");
	})
});