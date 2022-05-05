let ytResultBox = (function () {
	function ytResultBox (point) {
		let s = this;
		LExtends(s, LSprite, []);

		let backgroundBmp = new LBitmap(dataList["default_menu_background"]);
		backgroundBmp.scaleX = backgroundBmp.scaleY = 0.5;
		s.addChild(backgroundBmp);

		s.filters = [new LDropShadowFilter()];

		s.txtTemplate = new LTextField();
		s.txtTemplate.color = "white";
		s.txtTemplate.weight = "bold";

		s.txtLayer = new LSprite();
		s.addChild(s.txtLayer);

		s.btnLayer = new LSprite();
		s.addChild(s.btnLayer);

		s.addResult(point);
		s.addBtns();
	}

	ytResultBox.prototype.addResult = function (point) {
		let s = this;

		s.txtLayer.y = 50;

		let titleTxt = s.txtTemplate.clone();
		titleTxt.text = "Final Distance";
		titleTxt.size = 20;
		titleTxt.x = (s.getWidth() - titleTxt.getWidth()) / 2;
		s.txtLayer.addChild(titleTxt);
		
		let pointTxt = s.txtTemplate.clone();
		pointTxt.size = 30;
		pointTxt.text = point + " m";
		pointTxt.x = (s.getWidth() - pointTxt.getWidth()) / 2;
		pointTxt.y = titleTxt.getHeight() + 20;
		s.txtLayer.addChild(pointTxt);
	};

	ytResultBox.EVENT_CLICK_BUTTON = "event_click_button";

	ytResultBox.prototype.addBtns = function () {
		let s = this;

		s.btnLayer.y = s.txtLayer.y + s.txtLayer.getHeight() + 50;

		let btnTxtList = [
			"Replay",
			"Back to Menu",
			"Back to Option"
		];

		for (let k = 0, btnY = 0; k < btnTxtList.length; k++) {
			let btnTxt = s.txtTemplate.clone();
			btnTxt.size = 13;
			btnTxt.text = btnTxtList[k];
			let btn = new ytButton(1, [btnTxt, "center", "middle"], [0.5, 0.5]);
			btn.index = k;
			btn.x = (s.getWidth() - btn.getWidth()) * 0.5;
			btn.y = btnY;
			s.btnLayer.addChild(btn);

			btn.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
				let eve = new LEvent(ytResultBox.EVENT_CLICK_BUTTON);
				eve.msg = e.currentTarget.index;

				s.dispatchEvent(eve);
			});

			btnY += btn.getHeight() + 20;
		}
	};

	return ytResultBox;
})();