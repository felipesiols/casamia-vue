<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Camera',
	components: {
		RouterLink
	},
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isRearCamera: true,

    }
  },
  created() {
  },
  methods: {
    startVideo() {
      if (this.isRearCamera === true) {
        this.createRearCamera()
      } else {
        this.createFrontCamera()
      }
    },
    createFrontCamera() {
      const constraints = (window.constraints = {
        audio: false,
        video: true
      })
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.$refs.camera.srcObject = stream
        })
        .catch(error => {
          console.log(error, 'front camera failed')
        })
    },
    createRearCamera() {
      const constraints = (window.constraints = {
        audio: false,
        video: { facingMode: { exact: "environment" } }
      })
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.$refs.camera.srcObject = stream
        })
        .catch(() => {
          this.isRearCamera = false
          this.createFrontCamera()
        })
    },
    createCameraElement () {
      const constraints = (window.constraints = {
        audio: false,
        video: { facingMode: { exact: "environment" } }
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.$refs.camera.srcObject = stream
        })
        .catch(() => {
          this.isRearCamera = false
          const constraints = (window.constraints = {
            audio: false,
            video: true
          })
          navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
              this.$refs.camera.srcObject = stream
            })
            .catch(error => {
              console.log(error, 'both cameras failed')
            })
        })
    },
    stopCameraStream () {
      const tracks = this.$refs.camera.srcObject.getTracks()
      tracks.forEach(track => { track.stop() })
      console.log('CameraClosed')
    },
    toggleCamera () {
      if (this.isCameraOpen) {
        this.isCameraOpen = false
        this.isPhotoTaken = false
        this.stopCameraStream()
        console.log('closed');
      } else {
        this.isCameraOpen = true
        this.createCameraElement()
        console.log('open');
      }
    },
    takePhoto () {
      this.isPhotoTaken = !this.isPhotoTaken

      const context = this.$refs.canvas.getContext('2d')
      const photoFromVideo = this.$refs.camera

      context.drawImage(photoFromVideo, 0, 0, 450, 337)
    },
    downloadImage() {
    const download = document.getElementById("downloadPhoto");
    const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    download.setAttribute("href", canvas);
    }
  }
}
</script>

<template>
  <div class="camera">
    <div class="wrapper px-3 py-3">
      <!--
      <button @click="this.$parent.showCamera = false" class="button-close">x</button>
      -->
       <button class="btn btn-warning border w-100 btn-lg py-5" @click="toggleCamera()" v-if="!isCameraOpen">
        <i class="ph ph-camera d-block fs-25"></i>
        <span>Encender Cámara</span>
      </button>
      <div v-else>
        <div class="button-group">
          <button class="btn btn-dark border w-100 btn-sm py-2" @click="toggleCamera()">
            <span>Apagar Cámara</span>
          </button>
        </div>
      </div>
      <RouterLink to="/completado">
        <div class="video-container">
          <video v-show="isCameraOpen" class="camera-video" ref="camera" width="100%" height="auto" autoplay playsinline ></video>
          <canvas id="photoTaken" v-show="isPhotoTaken" class="canvas-photo" ref="canvas" width="100%" height="auto"></canvas>
        </div>
      </RouterLink>
      <!--
       <button class="btn btn-warning border w-100 btn-lg py-1" @click="takePhoto" v-if="!isPhotoTaken && isCameraOpen">
        <i class="ph ph-camera"></i>
      </button>
      <button v-show="isPhotoTaken && isCameraOpen" class="camera-download">
        <a id="downloadPhoto" download="VueRocksPhoto.jpg" class="button" role="button" @click="downloadImage">
          Download
        </a>
      </button>
      -->
    </div>
  </div>
</template>

<style>
.camera {
  width: 100%;
  height: auto;
}

.wrapper {
  width: 100%;
  height: auto;
}

.button-close {
  width: 25px;
  height: 30px;
}

</style>
