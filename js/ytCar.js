let ytCar = (function () {
	function ytCar (carBmpd, data, positionIndex) {
		let s = this;
		LExtends(s, LSprite, []);

		s.roadPositionList = [110, 230];

		s.changeDirTween = null;
		s.dir = positionIndex;

		s.speed = 1;

		let cBmpd = carBmpd.clone();
		cBmpd.setProperties(data.x, data.y, data.width, data.height);
		let carBmp = new LBitmap(cBmpd);
		s.addChild(carBmp);

		s.x = s.roadPositionList[positionIndex];
	}

	ytCar.prototype.moveTo = function (index, speed) {
		let s = this, toX = s.roadPositionList[index];

		if (toX == s.x || index == s.dir) {
			return;
		}

		s.dir = index;

		if (s.changeDirTween) {
			LTweenLite.remove(s.changeDirTween);
		}

		s.changeDirTween = LTweenLite.to(s, (speed || 0.2), {
			x : toX,
			onComplete : function (o) {
				o.x = toX;

				s.changeDirTween = null;
			}
		});
	};

	ytCar.prototype.destroy = function () {
		let s = this;

		if (s.changeDirTween) {
			LTweenLite.remove(s.changeDirTween);
		}

		s.remove();
	};

	return ytCar;
})();