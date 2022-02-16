$(document).ready(function() {
	var inTouch = document.getElementById('inTouch');
	//E-mail Ajax Send
	$("#order_our1").submit(function() { //Change
		$("#order_our1").addClass("form_get_submitted");
		$("#inTouch").addClass("in_touch_submitted");
		$(".wrap_down_inp").addClass("wrap_inp_submitted");
		$(".wrap_inp").addClass("wrap_inp_submitted");
		$("#sub_request").addClass("show_sub_request");
    swal({
    text: "Message was sent. Our team will contact you soon.",
    button: "OK"
    });
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      console.log('done');
			setTimeout(function() {
				// Done Functions

				th.trigger("reset");
			}, 1000);
		});

		return false;
	});
});


var box = document.getElementById('box1');
var squiggle = document.querySelectorAll('.squiggle');
var squiggle2 = document.querySelectorAll('.squiggle2');
var wall = document.getElementById('wall');

window.addEventListener('scroll', () => {
  if(box.getBoundingClientRect().top < window.innerHeight) {
    squiggle.forEach(item1 => {
      item1.classList.add('squiggle_anim');
    });
    squiggle2.forEach(item2 => {
      item2.classList.add('squiggle2_anim');
    });
    wall.classList.add('wall_animation');
  }
});

var lines = document.getElementById('lines1');
var num = 99;

function secvention() {
  num++;
  var source = `./public/images/lines/Lines${num}.png`;
  lines.src = source;
  if(num < 152) {
    requestAnimationFrame(secvention);
  }
}

window.addEventListener('load', () => {
  secvention();
});
