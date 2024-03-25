<template>
  <div id="cesiumContainer"></div>
</template>

<script setup lang="ts">
import * as Cesium from "cesium";
import { onMounted } from "vue";
//必须在挂载后引入cesium地图组件
onMounted(() => {
  
  const viewer = new Cesium.Viewer("cesiumContainer", {
    baseLayerPicker: false,
    // imageryProvider: new Cesium.SingleTileImageryProvider({
    //     url: earth
    // }),
    geocoder: false,
    infoBox: false,
    timeline: false,
    animation: false,
    shouldAnimate: true,
    navigationHelpButton: false,
    skyAtmosphere: false,
    fullscreenButton: false,
});
viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
  url: '//wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&{p}'
}));
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.1;
viewer.scene.globe.enableLighting = true;
viewer.scene.globe.showGroundAtmosphere = false;
viewer.cesiumWidget.useBrowserRecommendedResolution = true;
});
</script>

<style lang="scss" scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>