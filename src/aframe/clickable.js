AFRAME.registerComponent("clickable", {
	schema: {
		color: { type: "color", default: "black" },
	},

	init: function () {
		this.currentCursor = null;
		this.onEnter = this.onEnter.bind(this);
		this.onLeave = this.onLeave.bind(this);
		this.el.addEventListener("mouseenter", this.onEnter);
		this.el.addEventListener("mouseleave", this.onLeave);
	},

	onEnter: function (evt) {
		this.currentCursor = evt.detail.cursorEl;
		if (this.currentCursor.getAttribute("raycaster").showLine) {
			this.savedColor = this.currentCursor.getAttribute("raycaster").lineColor;
			this.currentCursor.setAttribute("raycaster", "lineColor", this.data.color);
		} else {
			this.savedColor = this.currentCursor.getAttribute("material").color;
			this.currentCursor.setAttribute("material", "color", this.data.color);
		}
	},

	onLeave: function (evt) {
		this.currentCursor = evt.detail.cursorEl;
		if (this.currentCursor.getAttribute("raycaster").showLine) {
			this.currentCursor.setAttribute("raycaster", "lineColor", this.savedColor);
		} else {
			this.currentCursor.setAttribute("material", "color", this.savedColor);
		}
	},

	remove: function () {
		if (this.currentCursor.getAttribute("raycaster").showLine) {
			this.currentCursor.setAttribute("raycaster", "lineColor", this.savedColor);
		} else {
			this.currentCursor.setAttribute("material", "color", this.savedColor);
		}
		this.el.removeEventListener("mouseenter", this.onEnter);
		this.el.removeEventListener("mouseleave", this.onLeave);
	},
});
