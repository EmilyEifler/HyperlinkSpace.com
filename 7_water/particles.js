	var particleCount = 500,
		    particles = new THREE.Geometry(),
		    pMaterial = new THREE.PointCloudMaterial({
		      color: 0xFFFFFF,
		      size: .7,
			  map: THREE.ImageUtils.loadTexture(
			    "images/raindrop.png"),
			  blending: THREE.AdditiveBlending,
			  transparent: true
			    });

		for (var p = 0; p < particleCount; p++) {
		  var pX = (Math.random() * 28) - 14,
		      pY = (Math.random() * 40) - 20,
		      pZ = (Math.random() * 28) - 14,
		      particle = (
		        new THREE.Vector3(pX, pY, pZ)
		      );
			particle.velocity = new THREE.Vector3(
			  Math.random(),
			  (-Math.random() - .01) * 6,
			  Math.random());
		  particles.vertices.push(particle);
		}

		var particleSystem = new THREE.PointCloud(
		    particles,
		    pMaterial);

		particleSystem.sortParticles = true;

