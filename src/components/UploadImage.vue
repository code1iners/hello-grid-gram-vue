<template>
  <div id="upload-image">
    <form>
      <label>
        <input type="file" @change="handleChange" />
        <span>Upload image</span>
      </label>
      <div class="output">
        <div class="error" v-if="fileError">{{ fileError }}</div>
        <div v-if="file">{{ file.name }}</div>
        <ProgressBar v-if="file" :file="file" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "UploadImage",
  components: { ProgressBar },
  setup() {
    const store = useStore();
    const file = ref(null);
    const fileError = ref(null);

    const handleChange = (e) => {
      const types = ["image/jpeg", "image/png"];
      let selected = e.target.files[0];

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        store.commit("addPhoto", selected);
        fileError.value = null;
      } else {
        fileError.value = "Please select an image file (PNG or JPG).";
        file.value = null;
      }
    };

    return {
      handleChange,
      file,
      fileError,
    };
  },
};
</script>

<style>
#upload-image {
  text-align: center;
  margin: 50px auto;
}

#upload-image input {
  height: 9;
  width: 0;
  opacity: 0;
}
#upload-image label {
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 15px 30px;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}
#upload-image label:hover {
  background-color: var(--primary);
  color: white;
}
#upload-image .output {
  margin-top: 30px;
}
</style>
