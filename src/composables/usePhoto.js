import { ref } from "vue";

const BASE_URI = `${process.env.VUE_APP_BASE_URI}/photos`;
const error = ref(null);
const isPending = ref(false);

const getPhotos = async () => {
  isPending.value = true;
  return await fetch(BASE_URI, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      error.value = null;
      isPending.value = false;
      return res.json();
    })
    .catch((err) => {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    });
};

export { getPhotos };
