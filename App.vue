<template>
  <div>
    <h1>---HELLO FROM KARAN---</h1>
    <!-- Text Interpolation -->
    <p>{{ message }}</p>
    <!-- Raw HTML [v-html] -->
    <p v-html="rawHTML"></p>
    <!-- Attribute Bindings [v-bind:id] -->
    <div :id="dynamicId">Dynamic-ID</div>
    <!-- Computed Property -->
    <p>Computed Property: {{ computedValue }}</p>
    <!-- Event Handling: Listening to Events [v-on:click] -->
    <button @click="sayHello">Say Hello</button>
    <!-- Form Input Bindings -->
    <input v-model="inputValue" placeholder="Type something" />
    <p>Input Value: {{ inputValue }}</p>
    <!-- Class and Style Bindings -->
    <div :class="classObject" :style="styleObject">Styled Div</div>
    <!-- List Rendering -->
    <ul>
      <!-- v-for with an Array -->
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      <!-- v-for with v-if -->
      <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    // Data
    const rawHTML = ref('<em>Raw HTML</em>');
    const dynamicId = ref('I DONT HAVE A ID');
    const inputValue = ref('');
    const message = 'Hello, Vue!';
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    const users = [
      { id: 1, name: 'User 1', active: true },
      { id: 2, name: 'User 2', active: false },
    ];

    // Use useRoute to get the current route object
    const route = useRoute();

    // Methods
    const sayHello = () => {
      alert('Hello! THERE ;)');
    };

    // Computed Properties
    const computedValue = computed(() => {
      return 'Computed Value';
    });

    // Watchers
    const watchedValue = ref('');
    watch(watchedValue, (newValue, oldValue) => {
      console.log(`Watched value changed from ${oldValue} to ${newValue}`);
    });

    // Router
    const router = useRouter();

    // Handle router links
    const goToHome = () => {
      router.push({ path: '/' });
    };
    const goToAbout = () => {
      router.push({ path: '/about' });
    };

    // Computed property for filtering users
    const filteredUsers = computed(() => {
      return users.filter(user => user.active);
    });

    // Class and Style Bindings
    const classObject = computed(() => {
      return {
        active: true,
        'text-success': computedValue.value === 'Computed Value',
      };
    });

    const styleObject = computed(() => {
      return {
        fontSize: '20px',
        color: 'blue',
      };
    });

    return {
      message,
      rawHTML,
      dynamicId,
      inputValue,
      items,
      users,
      computedValue,
      sayHello,
      watchedValue,
      classObject,
      styleObject,
      goToHome,
      goToAbout,
      route,
      filteredUsers,
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}

p {
  color: red;
  font-family: courier;
  font-size: 160%;
  border: 2px solid powderblue;
  padding: 30px;
}

/* Add styling for the "Say Hello" button */
button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

/* Add styling for the styled div */
div.active {
  font-size: 20px;
  color: blue;
  background-color: yellow;
}
</style>

