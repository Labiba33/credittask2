<template>
    <main>
      <section id="cart-contents">
        <h2>Your Shopping Cart</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name">
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p class="price">$ {{ item.price }}</p>
              <p class="quantity">Quantity: {{ item.quantity }}</p>
              <button @click="removeFromCart(item.id)">Remove</button>
            </div>
          </li>
        </ul>
        <p v-if="cartItems.length === 0">Your cart is empty.</p>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Sample cart data (you can replace this with your actual cart data)
  const cartItems = ref([
    { id: 1, name: 'Red pants', price: 20, image: 'images/blue tops.jpg', quantity: 2 },
    { id: 2, name: 'Blue tops', price: 20, image: 'images/red pants.jpg', quantity: 1 },
  ]);
  
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    // Implement your cart removal logic here
    const index = cartItems.value.findIndex(item => item.id === productId);
    if (index !== -1) {
      cartItems.value.splice(index, 1);
    }
  };
  </script>
  
  <style scoped>
  /* Component-specific styles */
  #cart-contents {
    margin: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    padding: 1rem;
  }
  
  .cart-item img {
    max-width: 100px;
    max-height: 100px;
    margin-right: 1rem;
  }
  
  .item-details {
    flex-grow: 1;
  }
  
  .price {
    font-weight: bold;
  }
  
  button {
    background-color: #d9534f;
    color: #fff;
    border: none;
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c9302c;
  }
  
  /* Hide empty cart message when items are in the cart */
  p {
    display: none;
  }
  
  /* Show empty cart message when cart is empty */
  p:empty {
    display: block;
    font-weight: bold;
    color: #888;
  }
  </style>