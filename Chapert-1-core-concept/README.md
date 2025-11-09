# 🌿 Chapter 1 — Vue Core Concepts

Welcome to **Chapter 1** of my Vue learning journey!  
In this chapter, I explored the **core building blocks of Vue 3**, such as reactivity, directives, event handling, and bindings.

---

## 📘 What I Learned

### ⚙️ Reactivity System
Vue’s reactivity system automatically tracks changes in data and updates the DOM.

```js
const count = ref(0)
const user = reactive({ name: 'Priyanka' })
const double = computed(() => count.value * 2)
watch(count, (newVal) => console.log('count changed:', newVal))
