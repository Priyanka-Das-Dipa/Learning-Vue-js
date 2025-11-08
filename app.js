console.log("hello vue!!");
const app = Vue.createApp({
  // template: `<h1>Hi I am from vue template</h1>`,
  // dynamic data using data function
  data() {
    return {
      title: "Hello from Vue Data",
      author: "Priyanka Das ",
      age: 15,
      designation: "MERN Stack Developer",
    };
  },
  methods: {
    changeTitle() {
      console.log("You just click me ");
      this.title = "Title changed from Vue Method";
    },
  },
});
app.mount("#app");
