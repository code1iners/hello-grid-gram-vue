<template>
  <div id="App">
    <MainTitle />
    <ImageGrid @selected="updateSelectedImageUrl" />
    <Modal
      v-if="selectedImageUrl"
      :imageUrl="selectedImageUrl"
      @close="updateSelectedImageUrl"
    />
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import Modal from "@/components/Modal.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "App",
  components: { MainTitle, ImageGrid, Modal },
  setup() {
    const selectedImageUrl = ref(null);
    const updateSelectedImageUrl = (url) => {
      selectedImageUrl.value = url;
      console.log(selectedImageUrl.value);
    };

    return {
      selectedImageUrl,
      updateSelectedImageUrl,
    };
  },
};
</script>

<style></style>
