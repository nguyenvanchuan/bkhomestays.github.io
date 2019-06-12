$(document).ready(function() {
	var autoLoad= setInterval(function(){
		$('#btn-next').trigger('click');
	},3000);

	$('#btn-next').click(function(event) {
		clearInterval(autoLoad);
		var slide_sau = $('.active1').next();
		var vi_tri_hien_tai = $('.active1_nut').index()+1;
		if(slide_sau.length!=0){
			$('.active1').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active1');
			});
			slide_sau.addClass('active1').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active1_nut');
			$('.nut-slide ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active1_nut');
		}else{
			$('.active1').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active1');
			});
			$('.slide:first-child').addClass('active1').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active1_nut');
			$('.nut-slide ul li:nth-child(1)').addClass('active1_nut');
		}
	});
	$('#btn-prev').click(function(event) {
		clearInterval(autoLoad);
		var slide_truoc = $('.active1').prev();
		var vi_tri_hien_tai = $('.active1_nut').index()+1;
		if(slide_truoc.length!=0){
			$('.active1').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active1');
			});
			slide_truoc.addClass('active1').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active1_nut');
			$('.nut-slide ul li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active1_nut');
		}else{
			$('.active1').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active1');
			});
			$('.slide:last-child').addClass('active1').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
						// xử lý nút 
			$('.nut-slide ul li').removeClass('active1_nut');
			$('.nut-slide ul li:last-child').addClass('active1_nut');
		}
	});

	$('.nut-slide ul li').click(function(event) {
		clearInterval(autoLoad);
		var vi_tri_hien_tai = $('.active1_nut').index()+1;
		var vi_tri_click = $(this).index()+1;
		$('.nut-slide ul li').removeClass('active1_nut');
		$(this).addClass('active1_nut');
		if(vi_tri_click>vi_tri_hien_tai){
			$('.active1').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active1');
			});
			$('.slide:nth-child('+vi_tri_click+')').addClass('active1').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}
		if(vi_tri_click<vi_tri_hien_tai){
			$('.active1').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active1');
			});
			$('.slide:nth-child('+vi_tri_click+')').addClass('active1').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}

	});

});