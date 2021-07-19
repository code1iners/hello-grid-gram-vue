<template>
  <div id="image-grid">
    <div
      v-for="photo in photos"
      :key="photo.id"
      @click="handleClick(photo.imageUrl)"
    >
      <img :src="require(`@/assets/photos/${photo.imageUrl}`)" alt="" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  name: "ImageGrid",
  setup(props, context) {
    const store = useStore();
    const photos = store.state.photos;
    const innerWidth = ref(null);

    const handleClick = (url) => {
      context.emit("selected", url);
    };

    return {
      photos,
      innerWidth,
      handleClick,
    };
  },
};
</script>

<style>
#image-grid {
  margin: 50px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

#image-grid img {
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

@media screen and (min-width: 620px) {
  #image-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}

@media screen and (min-width: 960px) {
  #image-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
}

@media screen and (min-width: 1200px) {
  #image-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  }
}
</style>
