$(document).ready(function(){
	 
		$('.scrollspy').scrollSpy();
		$('.button-collapse').sideNav();
  		$('.button-collapse').click(removeOverlay);
  		function removeOverlay() {
		  $('div[id^=sidenav-overlay]').remove();
		}
		var options = [
			{selector: '#nav_f', offset: 500, callback: function(el) {
				Materialize.fadeInImage($(el));
			} },
			{selector: '#index-banner', offset: 500, callback: function(el) {
				Materialize.fadeInImage($(el));
			} },
			{selector: '#intro', offset: 50, callback: function(el) {
				Materialize.fadeInImage($(el));
			} },
			{selector: '#work', offset: 200, callback: function(el) {
				Materialize.fadeInImage($(el));
			} },
			{selector: '#progress', offset: 200, callback: function(el) {
				var bar=  new ProgressBar.Circle(progress, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('C');
						$( "#progress" ).mouseenter(function() {
					  	circle.setText(value + '%');bar.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('C');bar.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar.text.style.fontSize = '2rem';
				bar.text.style.color = 'blue';

				bar.animate(0.67);  // Number from 0.0 to 1.0

				
			} },
			{selector: '#progress1', offset: 200, callback: function(el) {
				var bar1=  new ProgressBar.Circle(progress1, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('C++');
						$( "#progress1" ).mouseenter(function() {
					  	circle.setText(value + '%');bar1.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('C++');bar1.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar1.text.style.fontSize = '2rem';
				bar1.text.style.color = '#062288';

				bar1.animate(0.5);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress2', offset: 200, callback: function(el) {
				var bar2=  new ProgressBar.Circle(progress2, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('Python');
						$( "#progress2" ).mouseenter(function() {
					  	circle.setText(value + '%');bar2.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('Python');bar2.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar2.text.style.fontSize = '2rem';
				bar2.text.style.color = 'red';

				bar2.animate(0.4);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress3', offset: 200, callback: function(el) {
				var bar3=  new ProgressBar.Circle(progress3, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('JavaScript');
						$( "#progress3" ).mouseenter(function() {
					  	circle.setText(value + '%');bar3.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('JavaScript');bar3.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar3.text.style.fontSize = '2rem';
				bar3.text.style.color = 'orange';

				bar3.animate(0.35);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress4', offset: 200, callback: function(el) {
				var bar4=  new ProgressBar.Circle(progress4, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('HTML');
						$( "#progress4" ).mouseenter(function() {
					  	circle.setText(value + '%');bar4.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('HTML');bar4.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar4.text.style.fontSize = '2rem';
				bar4.text.style.color = '#FFC0CB';

				bar4.animate(0.7);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress5', offset: 200, callback: function(el) {
				var bar5=  new ProgressBar.Circle(progress5, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('CSS');
						$( "#progress5" ).mouseenter(function() {
					  	circle.setText(value + '%');bar5.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('CSS');bar5.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar5.text.style.fontSize = '2rem';
				bar5.text.style.color = '#07f022';

				bar5.animate(0.6);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress6', offset: 200, callback: function(el) {
				var bar6=  new ProgressBar.Circle(progress6, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('SQL');
						$( "#progress6" ).mouseenter(function() {
					  	circle.setText(value + '%');bar6.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('SQL');bar6.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar6.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar6.text.style.fontSize = '2rem';
				bar6.text.style.color = '#f00707';

				bar6.animate(0.65);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress7', offset: 200, callback: function(el) {
				var bar7=  new ProgressBar.Circle(progress7, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('Flask');
						$( "#progress7" ).mouseenter(function() {
					  	circle.setText(value + '%');bar7.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('Flask');bar7.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar7.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar7.text.style.fontSize = '2rem';
				bar7.text.style.color = '#86FC01';

				bar7.animate(0.60);  // Number from 0.0 to 1.0
			}},
			{selector: '#progress8', offset: 200, callback: function(el) {
				var bar8=  new ProgressBar.Circle(progress8, {
				color: '#927070',
				// This has to be the same size as the maximum width to
				// prevent clipping
				strokeWidth: 4,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					autoStyleContainer: false
				},
				from: { color: '#927070', width: 1 },
				to: { color: '#000000 ', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText('Django');
						$( "#progress8" ).mouseenter(function() {
					  	circle.setText(value + '%');bar8.text.style.fontSize = '4rem';circle.path.setAttribute('stroke-width', 4);
					}).mouseleave(function() {
					  	circle.setText('Django');bar8.text.style.fontSize = '2rem';circle.path.setAttribute('stroke-width', 3);
					});
				}
				
					}
				});
				bar8.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				bar8.text.style.fontSize = '2rem';
				bar8.text.style.color = '#FC7301';

				bar8.animate(0.4);  // Number from 0.0 to 1.0
			}},

		];
		Materialize.scrollFire(options);

		$('.modal').modal();

	});