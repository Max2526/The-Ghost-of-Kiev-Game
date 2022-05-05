let ytBackground = (function () {
	function ytBackground (bitmapData) {
		let s = this;
		LExtends(s, LSprite, []);

		s.speed = 0;

		s.placeBmp = new LBitmap(bitmapData);
		s.placeBmp.scaleX = LGlobal.width / s.placeBmp.getWidth();
		s.placeBmp.scaleY = s.placeBmp.scaleX;

		s.addInitBackground();
	}

	ytBackground.prototype.addInitBackground = function () {
		let s = this;

		while (s.getHeight() < LGlobal.height) {
			let bg = s.placeBmp.clone();
			bg.y = s.getHeight();
			s.addChild(bg);
		}
	};

	ytBackground.prototype.loop = function () {
		let s = this, rml = new Array();

		if (s.startY() >= 0) {
			let bg = s.placeBmp.clone();
			bg.y = s.startY() - bg.getHeight();
			s.addChild(bg);
		}

		for (let i = 0, l = s.numChildren; i < l; i++) {
			let o = s.getChildAt(i);
			
			if (o) {
				o.y += s.speed;

				if (o.y > LGlobal.height) {
					rml.push(o);
				}
			}
		}

		for (let k = 0, l = rml.length; k < l; k++) {
			rml[k].remove();
		}
	};

	return ytBackground;
})();