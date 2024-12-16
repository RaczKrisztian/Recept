<template>
  <div>
    <NavBar @openModal="openAddRecipeModal" />
    <div class="container mt-4">
      <!-- Keresés és szűrés mezők -->
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
          <select class="form-select" v-model="selectedDifficulty">
            <option value="">Minden nehézség</option>
            <option value="Könnyű">Könnyű</option>
            <option value="Közepes">Közepes</option>
            <option value="Nehéz">Nehéz</option>
          </select>
        </div>
        <div class="col-md-4">
          <select class="form-select" v-model="selectedSort">
            <option value="">Elkészítési idő szerint</option>
            <option value="asc">Rövidebb idő</option>
            <option value="desc">Hosszabb idő</option>
          </select>
        </div>
      </div>

      <!-- Nincs találat üzenet -->
      <div v-if="filteredRecipes.length === 0" class="text-center mt-4">
        <h5 class="text-muted">Nincs találat</h5>
      </div>

      <!-- Receptkártyák -->
      <div class="row" v-else>
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
            :description="recipe.description"
            @details="openDetailsModal"
          />
        </div>
      </div>
    </div>

    <!-- Modal: Új recept hozzáadása -->
    <div
      class="modal fade"
      id="addRecipeModal"
      tabindex="-1"
      aria-labelledby="addRecipeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addRecipeModalLabel">Új recept hozzáadása</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <AddRecipeForm :onAddRecipe="addRecipe" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Részletek megjelenítése -->
    <div
      class="modal fade"
      id="detailsModal"
      tabindex="-1"
      aria-labelledby="detailsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailsModalLabel">{{ selectedRecipe.name }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              :src="selectedRecipe.image"
              alt="Recept kép"
              class="img-fluid mb-3"
            />
            <p><strong>Elkészítési idő:</strong> {{ selectedRecipe.prepTime }}</p>
            <p><strong>Nehézség:</strong> {{ selectedRecipe.difficulty }}</p>
            <p>{{ selectedRecipe.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import RecipeCard from "./components/RecipeCard.vue";
import AddRecipeForm from "./components/AddRecipeForm.vue";
import { recipes } from "./dummy.js";

export default {
  name: "App",
  components: {
    NavBar,
    RecipeCard,
    AddRecipeForm,
  },
  data() {
    return {
      recipes,
      searchTerm: "",
      selectedDifficulty: "",
      selectedSort: "",
      selectedRecipe: {},
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

          return this.selectedSort === "asc" ? timeA - timeB : timeB - timeA;
        });
      }

      return filtered;
    },
  },
  methods: {
    openAddRecipeModal() {
      const modal = new bootstrap.Modal(document.getElementById("addRecipeModal"));
      modal.show();
    },
    addRecipe(newRecipe) {
      this.recipes.push(newRecipe);
      this.closeModal("addRecipeModal");
    },
    openDetailsModal(recipe) {
      this.selectedRecipe = recipe;
      const modal = new bootstrap.Modal(document.getElementById("detailsModal"));
      modal.show();
    },
    closeModal(modalId) {
      const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
      modal.hide();
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
.text-muted {
  color: #6c757d;
}
</style>
