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
});