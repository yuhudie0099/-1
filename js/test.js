var screenAnimateElements = {
	'.screen-1': [
		'.screen-1_heading',
		'.screen-1_phone',
		'.screen-1_shadow',
	],
	'.screen-2': [
		'.screen-2_heading',
		'.screen-2_phone',
		'.screen-2_subheading',
		'.screen-2_point',
		'.screen-2_point_i_1',
		'.screen-2_point_i_2',
		'.screen-2_point_i_3',
	],
	'.screen-3': [
		'.screen-3_heading',
		'.screen-3_phone',
		'.screen-3_subheading',
		'.screen-3_features',
	],
	'.screen-4': [
		'.screen-4_heading',
		'.screen-4_subheading',
		'.screen-4_type_item_i_1',
		'.screen-4_type_item_i_2',
		'.screen-4_type_item_i_3',
		'.screen-4_type_item_i_4',
	],
		'.screen-5': [
		'.screen-5_heading',
		'.screen-5_subheading',
	],
}

function setScreenAnimate(screenCls) {
	var screen = document.querySelector(screenCls); //获取当屏的元素
	var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
	var isSetAnimateClass = false; //是否初始化子元素的样式
	var isAnimateDone = false; //当前屏幕下所有子元素状态是done么？
	screen.onclick = function() {
		//初始化样式 增加init
		if(isSetAnimateClass === false) {
			for(var i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class", baseCls + " " + animateElements[i].substr(1) + "_animate_init");
			}
			isSetAnimateClass = true;
			return;
		}
		//切换所有animateElements的init->done
		if(isAnimateDone === false) {
			for(var i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class", baseCls.replace("animate_init", "animate_done"));
			}
			isAnimateDone = true;
			console.log(isAnimateDone);
			return;
		}

		//切换所有animateElements的done->init
		if(isAnimateDone === true) {
			for(var i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class", baseCls.replace("animate_done", "animate_init"));
			}
			isAnimateDone = false;
			console.log(isAnimateDone);
			return;
		}

	}
}
for(k in screenAnimateElements) {
	setScreenAnimate(k);
}