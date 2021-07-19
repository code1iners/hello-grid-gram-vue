<template>
  <div id="modal-backdrop" @click="handleClick">
    <transition name="image" appear>
      <img :src="require(`@/assets/photos/${imageUrl}`)" :alt="imageUrl" />
    </transition>
  </div>
</template>

<script>
export default {
  props: ["imageUrl"],
  setup(props, context) {
    const handleClick = () => {
      console.log("clicked");
      context.emit("close", null);
    };
    return {
      handleClick,
    };
  },
};
</script>

<style>
#modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

#modal-backdrop img {
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  position: relative;
}

/* transition classes */
.image-enter-from {
  bottom: -200%;
}
.image-enter-to {
  bottom: 0;
}
.image-enter-active {
  transition: all 0.5s ease-in-out;
}
</style>
