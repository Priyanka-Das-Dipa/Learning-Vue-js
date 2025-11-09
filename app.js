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
      console.log(e, "You just clicked me!!");
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});
app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      books: [
        { title: "Book One", author: "Author One", img: "assests/1.png" },
        { title: "Book Two", author: "Author Two", img: "assests/2.png" },
        { title: "Book Three", author: "Author Three", img: "assests/3.png" },
        { title: "Book Four", author: "Author Four", img: "assests/1.png" },
      ],
    };
  },
});
app2.mount("#app2");
