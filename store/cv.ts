import { defineStore } from "pinia";

interface CvPayloadInterface {
  name: string;
  email: string;
  skills: string;
}

export const useCvStore = defineStore("cv", {
  state: () => ({
    cv: {
      name: "",
      email: "",
      skills: "",
    },
  }),
  actions: {
    updateCv({ name, email, skills }: CvPayloadInterface) {
      this.cv.name = name;
      this.cv.email = email;
      this.cv.skills = skills;
    },
  },
});
