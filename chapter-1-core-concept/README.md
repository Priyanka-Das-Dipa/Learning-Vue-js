# 🌿 vue-chapter-1 — Chapter One: Core Concepts (Reactivity, Templates, Directives, Events)

This repository is a **Chapter One** starter for learning Vue 3 **core concepts (ref, reactive, computed, watch, template syntax, directives, event modifiers, and class/style bindings)**. It's designed to be easy to read, run locally with Vite, and share on GitHub as a learning artifact.

---
## 🧭 What you'll find in this chapter

- README.md (this file)

- package.json — Vite + Vue 3 minimal setup **(dev only, no build tools beyond Vite)**

- index.html — app root

- src/main.js — app bootstrap

- src/App.vue — top-level shell

- src/components/ChapterOne.vue — the learning playground with short examples and one-line snippets


### ⚙️ Reactivity System
Vue’s reactivity system automatically tracks changes in data and updates the DOM.

```js
const count = ref(0)
const user = reactive({ name: 'Priyanka' })
const double = computed(() => count.value * 2)
watch(count, (newVal) => console.log('count changed:', newVal))
```
---
## 🚀 Setup & Run
Each chapter folder is a standalone Vite project.  
To run any chapter:

```bash
npm install
npm run dev
``` 