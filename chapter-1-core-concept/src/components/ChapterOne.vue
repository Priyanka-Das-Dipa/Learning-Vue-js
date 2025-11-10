<template>
  <section>
    <h2>Reactivity</h2>
    <button @click="count++">Count: {{ count }}</button>
    <p>User: <input v-model="user.name" placeholder="Type name" /> — {{ user.name }}</p>
    <p>Double count: {{ double }}</p>

    <hr />
    <h2>Template Syntax & Directives</h2>
    <p v-if="isLogged">Welcome, {{ user.name || 'Guest' }}!</p>
    <p v-else>Please log in.</p>
    <button @click="isLogged = !isLogged">Toggle Login</button>

    <ul>
      <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>

    <img :src="imageUrl" alt="demo" style="max-width:100px" />

    <div v-html="rawHtml"></div>
    <p v-text="plainText"></p>

    <hr />
    <h2>Event Handling</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="form.text" placeholder="Type something" />
      <button type="submit">Submit</button>
    </form>

    <button @click.once="alertOnce">Click Once</button>

    <hr />
    <h2>Class & Style Bindings</h2>
    <div :class="{ active: isActive }" :style="{ color: textColor }">
      Dynamic class and style example
    </div>
    <button @click="isActive = !isActive">Toggle Class</button>
    <button @click="toggleColor">Toggle Color</button>
  </section>
</template>


// setup script block for Vue 3 Composition API
<script setup>
import { ref, reactive, computed, watch } from 'vue'
import imageSrc from '../assets/image.png'


const count = ref(0)
const user = reactive({ name: '' })
const double = computed(() => count.value * 2)


watch(count, (newVal) => console.log('Count changed:', newVal))

const isLogged = ref(false)
const items = ref([
  { id: 1, text: 'Learn ref/reactive' },
  { id: 2, text: 'Explore directives' },
  { id: 3, text: 'Practice events' }
])
const imageUrl = ref(imageSrc)
const rawHtml = ref('<strong>Rendered with v-html</strong>')
const plainText = ref('Rendered with v-text')

const form = reactive({ text: '' })
function onSubmit() {
  alert(`Form submitted: ${form.text}`)
}

function alertOnce() {
  alert('This runs only once')
}

const isActive = ref(false)
const textColor = ref('tomato')
function toggleColor() {
  textColor.value = textColor.value === 'tomato' ? 'rebeccapurple' : 'tomato'
}
</script>

// when using scoped styles, they only apply to this component
<style scoped>
.active {
  background: #eef2ff;
  font-weight: bold;
  padding: 6px;
  border-radius: 4px;
}
</style>
