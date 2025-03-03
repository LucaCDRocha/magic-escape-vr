AFRAME.registerComponent("look-at-horizon", {
	schema: {
		target: { type: "selector", default: "[camera]" },
		enabled: { type: "boolean", default: true },
	},
	init: function () {
		this.targetWorldPos = new THREE.Vector3();
		this.myWorldPos = new THREE.Vector3();
		this.originalRotation = [this.el.object3D.rotation.x, this.el.object3D.rotation.y, this.el.object3D.rotation.z];
	},
	update: function () {
		if (this.data.enabled) return;
		this.el.object3D.rotation.x = this.originalRotation[0];
		this.el.object3D.rotation.y = this.originalRotation[1];
		this.el.object3D.rotation.z = this.originalRotation[2];
	},
	tick: function () {
		if (!this.data.enabled) return;
		if (!this.data.target) return;
		this.data.target.object3D.getWorldPosition(this.targetWorldPos);
		this.el.object3D.getWorldPosition(this.myWorldPos);

		// Calculate the direction vector on the XZ plane
		const direction = new THREE.Vector3(
			this.targetWorldPos.x - this.myWorldPos.x,
			0,
			this.targetWorldPos.z - this.myWorldPos.z
		).normalize();

		// Calculate the rotation around the Y-axis
		const angle = Math.atan2(direction.x, direction.z);

		// Set the rotation around the Y-axis
		this.el.object3D.rotation.y = angle;
	},
});
