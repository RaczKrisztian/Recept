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
      <span class="difficulty" :class="getDifficultyClass">{{ difficulty }}</span>
      <button class="btn btn-primary mt-3 w-100" @click="showDetails">Részletek</button>
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
    description: String,
  },
  computed: {
    getDifficultyClass() {
      if (this.difficulty === "Könnyű") return "text-success";
      if (this.difficulty === "Közepes") return "text-warning";
      if (this.difficulty === "Nehéz") return "text-danger";
      return "";
    },
  },
  methods: {
    showDetails() {
      this.$emit("details", {
        name: this.name,
        prepTime: this.prepTime,
        difficulty: this.difficulty,
        image: this.image,
        description: this.description,
      });
    },
  },
};
</script>

<style scoped>
.recipe-card {
  max-width: 350px;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.recipe-card img {
  max-height: 180px;
  object-fit: cover;
}
.recipe-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.difficulty {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
