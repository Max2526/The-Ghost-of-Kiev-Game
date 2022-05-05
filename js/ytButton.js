let ytButton = (function () {
	function ytButton (overStyle, contentLayerData, scale) {
		let s = this;
		LExtends(s, LSprite, []);

		let btnNormalBmpd = dataList["button_sheet"].clone();
		btnNormalBmpd.setProperties(0, 0, btnNormalBmpd.width, btnNormalBmpd.height / 3   );
		let btnOverBmpd = dataList["button_sheet"].clone();
		btnOverBmpd.setProperties(0, btnOverBmpd.height / 3 * overStyle, btnOverBmpd.width, btnOverBmpd.height / 3);

		let btnNormalBmp = new LBitmap(btnNormalBmpd);
		btnNormalBmp.scaleX = scale[0] || 1;
		btnNormalBmp.scaleY = scale[1] || 1;
		let btnOverBmp = new LBitmap(btnOverBmpd);
		btnOverBmp.scaleX = scale[0] || 1;
		btnOverBmp.scaleY = scale[1] || 1;

		let contentLayer = contentLayerData[0].clone();
		if (contentLayerData[1] == "center"){
			contentLayer.x = (btnNormalBmp.getWidth() - contentLayer.getWidth()) / 2;
		}		
		if (contentLayerData[2] == "middle"){
			contentLayer.y = (btnNormalBmp.getHeight() - contentLayer.getHeight()) / 2;
		}

		let btnNormalLayer = new LSprite();
		btnNormalLayer.addChild(btnNormalBmp.clone());
		btnContentLayer = contentLayer.clone();
		btnNormalLayer.addChild(contentLayer.clone());

		let btnOverLayer = new LSprite();
		btnOverLayer.addChild(btnOverBmp.clone());
		btnOverLayer.addChild(contentLayer.clone());

		let btn = new LButton(btnNormalLayer, btnOverLayer);
		s.addChild(btn);
	}

	return ytButton;
})();