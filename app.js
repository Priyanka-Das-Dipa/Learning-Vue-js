console.log("hello vue!!");
const app = Vue.createApp({
  // template: `<h1>Hi I am from vue template</h1>`,
  // dynamic data using data function
  data() {
    return {
      showDetails: true,
      title: "Hello from Vue Data",
      author: "Priyanka Das ",
      age: 15,
      designation: "MERN Stack Developer",
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      //   console.log("You just click me ");
      //   this.title = "Title changed from Vue Method";
      this.title = title;
    },
    toggleShowBooks() {
      this.showDetails = !this.showDetails;
    },
    handleEvent(e) {
      console.log(e,"You just clicked me!!");
    },
    handleMouseMove(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
    }
  },
});
app.mount("#app");
