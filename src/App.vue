<template>
  <div>
    <NavBar />
    <div class="container mt-4">
     
      <div class="row mb-3">
        <div class="col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="Keress receptet..."
            v-model="searchTerm"
          />
        </div>
        <div class="col-md-4">
          <select
            class="form-select"
            v-model="selectedDifficulty"
          >
            <option value="">Minden nehézség</option>
            <option value="Könnyű">Könnyű</option>
            <option value="Közepes">Közepes</option>
            <option value="Nehéz">Nehéz</option>
          </select>
        </div>
        <div class="col-md-4">
          <select
            class="form-select"
            v-model="selectedSort"
          >
            <option value="">Elkészítési idő szerint</option>
            <option value="asc">Rövidebb idő</option>
            <option value="desc">Hosszabb idő</option>
          </select>
        </div>
      </div>
      
      <div class="row">
        
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-3"
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
        >
          <RecipeCard
            :name="recipe.name"
            :prepTime="recipe.prepTime"
            :difficulty="recipe.difficulty"
            :image="recipe.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import RecipeCard from "./components/RecipeCard.vue";
import { recipes } from "./dummy.js";

export default {
  name: "App",
  components: {
    NavBar,
    RecipeCard,
  },
  data() {
    return {
      searchTerm: "",
      selectedDifficulty: "",
      selectedSort: "",
      recipes,
    };
  },
  computed: {
    filteredRecipes() {
      let filtered = [...this.recipes];

      if (this.searchTerm) {
        filtered = filtered.filter(recipe =>
          recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      if (this.selectedDifficulty) {
        filtered = filtered.filter(
          recipe => recipe.difficulty === this.selectedDifficulty
        );
      }

      if (this.selectedSort) {
        filtered.sort((a, b) => {
          const timeA = parseInt(a.prepTime.split(" ")[0], 10);
          const timeB = parseInt(b.prepTime.split(" ")[0], 10);

          if (this.selectedSort === "asc") {
            return timeA - timeB;
          } else if (this.selectedSort === "desc") {
            return timeB - timeA;
          }
        });
      }

      return filtered;
    },
  },
};
</script>

<style>
.container {
  max-width: 1200px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.mb-3 {
  margin-bottom: 1rem;
}
</style>
