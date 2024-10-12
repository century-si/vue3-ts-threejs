<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, ref } from 'vue'

let refContent = ref<HTMLElement | null>(null)
onMounted(() => {
  console.log(refContent, 'refContent')
  if (!refContent.value) return
  console.log('a')

  const clientWidth = refContent.value.clientWidth
  const clientHeight = refContent.value.clientHeight
  console.log(clientWidth, clientHeight)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(clientWidth, clientHeight)
  refContent.value?.appendChild(renderer.domElement)
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  camera.position.z = 5
  const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <div ref="refContent" class="w-full h-full"></div>
</template>

<style scoped lang="scss"></style>
