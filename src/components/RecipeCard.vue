<template>
    <div class="card recipe-card">
      <img
        :src="image || 'https://via.placeholder.com/150'"
        class="card-img-top"
        alt="Recept kép"
      />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">Elkészítési idő: {{ prepTime }}</p>
        <span
          class="difficulty"
          :class="difficultyClass"
        >
          {{ difficulty }}
        </span>
        <button class="btn btn-primary mt-3" @click="showDetails">Részletek</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecipeCard",
    props: {
      name: String,
      prepTime: String,
      difficulty: String,
      image: String,
    },
    computed: {
      difficultyClass() {
        switch (this.difficulty) {
          case "Könnyű":
            return "text-success"; 
          case "Közepes":
            return "text-warning"; 
          case "Nehéz":
            return "text-danger"; 
          default:
            return "";
        }
      },
    },
    methods: {
      showDetails() {
        this.$emit("details", this.name);
      },
    },
  };
  </script>
  
  <style>
  .recipe-card {
    width: 100%;
    max-width: 350px; /* Növelt szélesség */
    height: 420px; /* Kissé magasabb kártyák */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }
  .recipe-card img {
    max-height: 180px; /* Növelt kép magasság */
    object-fit: cover;
  }
  .recipe-card .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .recipe-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
  .difficulty {
    font-weight: bold;
  }
  </style>
  