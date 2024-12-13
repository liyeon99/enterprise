gsap.defaults({
	ease:"none"
})

//언어 선택
$('.btn-lang').click(function (e) {
  $('.lang-list').toggleClass('on');
});

$(window).scroll(function() {
  $('.lang-list').removeClass('on');
});

// 탑버튼
// 버튼 클릭 시 상단으로 스크롤
$('.btn-top').click(function (e) { 
	$('html,body').animate({scrollTop:0},400);
	return false;
});

//intro
const intro = gsap.timeline({
	scrollTrigger: {
		trigger: ".sc-intro",
		start: "top top",
		end: "+=600%",// 700vh
		scrub: 0,
		pin: true, // 애니메이션 완료 될 때까지 섹션 유지
		markers: false,
		onEnterBack: function() {
      $('.sc-intro .scroll').removeClass('hidden');
    }
	}
});

intro
		.to(".sc-intro", {'--opacity': 1,}) 
		.from(".sc-intro .d01", {autoAlpha: 0,},'<') 
    .to(".sc-intro .d01", {autoAlpha: 0,
			onStart:function(){
				$('#header').addClass('on');
			},
			onReverseComplete:function(){
				$('#header').removeClass('on');
			},
		})
    .from(".sc-intro .d02", {autoAlpha: 0,})
    .to(".sc-intro .d02", {autoAlpha: 0,})
    .from(".sc-intro .d03", {autoAlpha: 0,})
    .to(".sc-intro .d03", {autoAlpha: 0,})
    .from(".sc-intro .d04", {autoAlpha: 0,
			onComplete: function(){
				$('.sc-intro .scroll').addClass('hidden');
			},
		})

//비주얼
const visual = gsap.timeline({
	scrollTrigger: {
			trigger: ".sc-visual",
			start: "top top",
			end: "+=600%",
			scrub: 0,
			pin: true,
			markers: false,
	}
});

visual
	.to(".sc-visual", {'--opacity': 1,}) 
	.from(".sc-visual .headline", { autoAlpha: 0,},)
	.to(".sc-visual .headline span:nth-child(1)", { xPercent: 100,},'b')
	.to(".sc-visual .headline span:nth-child(3)", { xPercent: -100,}, 'b')
	.to(".sc-visual", {'--opacity': 0,}) 
	.to(".sc-visual .headline", { autoAlpha: 0,}, 'c')
	.to(".sc-visual .bg:nth-child(3)", { height: 0,},)
	.to(".sc-visual .bg:nth-child(2)", { height: 0,},)
	.from(".sc-visual .desc", { autoAlpha: 0,},)
	.to(".sc-visual", {'--opacity': 1,});


	const possibility = gsap.timeline({
		scrollTrigger: {
				trigger: ".sc-possibility",
				start: "top top",
				end: "+=200%",
				scrub: 0,
				pin: true,
				markers: false,
				//리사이징시 값 갱신
				invalidateOnRefresh:true,
		}
	});
	possibility
	.to('.sc-possibility .group-possibility',{xPercent:-100})
	.to('.sc-possibility .group-possibility',{
		x:function(){
			return window.innerWidth-100;
		}
	},'<')
	
// area1
const area1Headline = $('.sc-safety .area1 .headline');
const area1 = gsap.timeline({
	scrollTrigger: {
			trigger: ".area1",
			start: "top top",
			end: "100% 80%",
			scrub: 0,
			markers: false,
			invalidateOnRefresh:true,
	}
});
area1
.to('.sc-safety .area1 .group-x',{
	x:function() {
		return area1Headline.outerWidth()*-1;
	}
})
//duration 1
.to('.sc-safety .area1 .card-item:nth-child(2)',1,{x:40*-1,xPercent:-100},'a')
.to('.sc-safety .area1 .card-item:nth-child(3)',1,{x:40*-2,xPercent:-100*2},'a')
.to('.sc-safety .area1 .card-item:nth-child(4)',1,{x:40*-3,xPercent:-100*3},'a')

.to('.sc-safety .area1 .card-item .icon-lock:nth-child(2)',0.5,{opacity:0},'b-=1') // 둘이 합쳐 1초 
.to('.sc-safety .area1 .card-item .icon-lock:nth-child(1)',0.5,{opacity:1},'b-=0.5')

const color = gsap.timeline({
	scrollTrigger: {
			trigger: ".group-color",
			start: "top 95%",
			end: "100% 80%",
			scrub: 0,
			markers: false,
	}
});

color
.from('.group-color .box:nth-child(1)',{xPercent:-50})
.from('.group-color .box:nth-child(2)',{xPercent:-50},'<')
.from('.group-color .box:nth-child(3)',{xPercent:50},'<')
const color2 = gsap.timeline({
	scrollTrigger: {
			trigger: ".group-color",
			start: "top 45%",
			end: "100% 30%",
			scrub: 0,
			markers: false,
			onEnter:function(){
				$('.group-color').addClass('show')
			},
			onLeaveBack:function(){
				$('.group-color').removeClass('show')
			}
	}
});
color2.from('.group-color .headline',{autoAlpha:0})

gsap.set('.area2 .left-wrap',{autoAlpha:0})
ScrollTrigger.create({
	trigger: '.area2', 
	start: "0 0", 
	end: "bottom bottom", 
	markers:false,
	onEnter:function(){
		gsap.set('.area2 .left-wrap',{autoAlpha:1})
		gsap.set('.area1 .card-list',{autoAlpha:0})
	},
	onLeaveBack:function(){
		gsap.set('.area2 .left-wrap',{autoAlpha:0})
		gsap.set('.area1 .card-list',{autoAlpha:1})
	}
});

const area3 = gsap.timeline({
	scrollTrigger: {
			trigger: ".area3",
			start: "top top",
			end: "bottom bottom",
			scrub: 0,
			markers: false,
			invalidateOnRefresh:true,
			onEnter:function(){
				gsap.set(".area2 .card-item.gradient", { opacity: 0 });
        gsap.set(".area3 .card-item.gradient", {opacity: 1,});
				gsap.to('.area3 .card-item .bg', { 
					filter: 'blur(20px)', 
					duration: 1 // 애니메이션 속도(1초 동안 블러 효과 적용)
				});
			},
			onLeaveBack:function(){
				gsap.set(".area2 .card-item.gradient", { opacity: 1 });
        gsap.set(".area3 .card-item.gradient", {opacity: 0,})
			},
	}
});
gsap.set('.sc-safety .area3 .card-item:nth-child(1)', { zIndex: 4 });
gsap.set('.sc-safety .area3 .card-item:nth-child(2)', { zIndex: 3 });
gsap.set('.sc-safety .area3 .card-item:nth-child(3)', { zIndex: 2 });
gsap.set('.sc-safety .area3 .card-item:nth-child(4)', { zIndex: 1});
area3
.to('.sc-safety .area3 .card-item:nth-child(2)',{x:40*-1,xPercent:-100},'a')
.to('.sc-safety .area3 .card-item:nth-child(3)',{x:40*-2,xPercent:-100*2},'a')
.to('.sc-safety .area3 .card-item:nth-child(4)',{x:40*-3,xPercent:-100*3},'a')

const area4 = gsap.timeline({
	scrollTrigger: {
			trigger: ".area4",
			start: "top top",
			end: "bottom bottom",
			scrub:0,
			markers: false,
			invalidateOnRefresh:true,
			onEnter:function(){
				gsap.set(".area3", { opacity: 0 });
        gsap.set(".area4 .card-item", {opacity: 1,});
				$('.area4 .headline').addClass('on');
			},
			onLeaveBack:function(){
				gsap.set(".area3", { opacity: 1 });
        gsap.set(".area4 .card-item", {opacity: 0,});
				$('.area4 .headline').removeClass('on');
			},
	}
});
area4.to('.area4 .headline',{opacity:1});
const financeHeadline = $('.sc-finance .headline');
const finance = gsap.timeline({
	scrollTrigger: {
			trigger: ".sc-finance",
			start: "top top",
			end: "bottom bottom",
			scrub: 0,
			invalidateOnRefresh:true,
			onUpdate:function(self){
				if(self.progress >= 0.5){
					gsap.set(".tradition", { autoAlpha: 0 });
					gsap.set(".future", { autoAlpha: 1 });
				}else{
					gsap.set(".tradition", { autoAlpha: 1 });
					gsap.set(".future", { autoAlpha: 0 });
				}
			},
			toggleClass:'on',
			// onEnter: () => {
			// 	gsap.to(".group-arrow", { autoAlpha:1 });
			// },
			// onLeave: () => {
			// 	gsap.to(".group-arrow", { autoAlpha:0 });
			// },
			// onEnterBack: () => {
			// 	gsap.to(".group-arrow", { autoAlpha:1 });
			// },
			// onLeaveBack: () => {
			// 	gsap.to(".group-arrow", { autoAlpha:0 });
			// }
	}
});
finance
.to('.sc-finance .group-x',{
	xPercent:-100,
	x:function() {
		return window.outerWidth;
	},
})

const creator = gsap.timeline({
	scrollTrigger: {
		trigger: ".sc-creator .group-creator",
		start: "top top",
			end: "bottom bottom",
			scrub: 0,
			markers:false,
			invalidateOnRefresh:true,
		}
});
creator
.from(".sc-creator .group-creator .title-area", {autoAlpha: 0,}) 
.to(".sc-creator .group-creator .title-area", {autoAlpha: 1,},) 
.from(".sc-creator .group-creator .scroll", {autoAlpha: 0,},) 
.to(".sc-creator .group-creator .scroll", {autoAlpha: 1,},) 

const wiselyHeadline = $('.group-wisely .headline');
const wisely = gsap.timeline({
	scrollTrigger: {
			trigger: ".wisely-area",
			start: "top top",
			end: "bottom bottom",
			scrub: 0,
			invalidateOnRefresh:true,
			onEnter:function(){
				gsap.to('.group-wisely .card-bg', { 
					filter: 'blur(20px)', 
					duration: 1 // 애니메이션 속도(1초 동안 블러 효과 적용)
				});
			},
	}
});
wisely
.to('.wisely-area .group-x',{
	xPercent:-100,
	x:function() {
		return window.outerWidth;
	},
})
ScrollTrigger.create({
	trigger: ".sc-worker", 
	start: "top top", 
	end: "bottom bottom", 
	markers:false,
	onEnter: function() {
		$('#header').addClass('dark'); 
	},
	onLeaveBack: function() {
		$('#header').removeClass('dark'); 
	}
});

ScrollTrigger.create({
	trigger: `[data-theme="dark"]`, 
	start: "top 50%", 
	end: "bottom 50%", 
	toggleClass:{
		targets:"body",
		className:"dark"
	},
	onEnter: function() {
    $('#header').removeClass('dark'); // 뷰포트에 들어올 때 dark 클래스 제거
  },
  onLeave: function() {
    $('#header').addClass('dark'); // 뷰포트에서 벗어날 때 dark 클래스 추가
  },
  onEnterBack: function() {
    $('#header').removeClass('dark'); // 스크롤을 위로 올려서 다시 뷰포트에 들어올 때 dark 클래스 제거
  },
  onLeaveBack: function() {
    $('#header').addClass('dark'); // 스크롤을 아래로 내려서 벗어날 때 dark 클래스 추가
  },
});

//prove
$('.group-prove').each(function(i,el){
	const prove = gsap.timeline({
		scrollTrigger: {
				trigger: el,
				start: "top 75%",
				end: "100% 97%",
				scrub: 0,
				markers: false,
		}
	});

	prove
	.from($(el).find('.headline span'),{x:0})//// headline span의 x 위치를 0으로
	.from($(el),{'--x':100},'<')// 요소의 '--x' CSS 변수를 100으로
})

//footer
ScrollTrigger.create({
	trigger:'#footer',
	start:'90% bottom',//[트리거 기준 시작]  [윈도우 기준&화면 기준]
	end:'bottom bottom',//[트리거 기준 끝] [윈도우 기준&화면 기준]
	markers:false,
	onEnter:function(){
		$('.sc-banner').removeClass('on');
	},
	onLeaveBack:function(){
		$('.sc-banner').addClass('on');
	}
})

ScrollTrigger.create({
  trigger: ".sc-ground",
  start: "top top",
  end: "bottom bottom",
  endTrigger: "#footer",
  markers: false,
  onEnter: function () {
		$(".btn-top").addClass("bottom");
  },
  onLeaveBack: function () {
    $(".btn-top").removeClass("bottom");
  },
});

ScrollTrigger.create({
	trigger: ".sc-visual",
	start: "top top",
	end: () => $(".wisely-area").offset().top + "px",
	markers: false,
	onUpdate: function (e) {
		direction = e.direction; 
		if (direction == 1) {
			$(".btn-top").removeClass("on");
		} else {
			$(".btn-top").addClass("on");
		}
	},
	onLeaveBack: function () {
		// alert('')
		$(".btn-top").removeClass("on");
	},
});