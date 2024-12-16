<template>
  <form @submit.prevent="submitForm">
    <!-- Recept neve -->
    <div class="mb-3">
      <label for="name" class="form-label">Recept neve</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
      />
      <div v-if="errors.name" class="invalid-feedback">
        {{ errors.name }}
      </div>
    </div>

    <!-- Elkészítési idő -->
    <div class="mb-3">
      <label for="prepTime" class="form-label">Elkészítési idő (perc)</label>
      <input
        type="number"
        id="prepTime"
        v-model="form.prepTime"
        class="form-control"
        :class="{ 'is-invalid': errors.prepTime }"
      />
      <div v-if="errors.prepTime" class="invalid-feedback">
        {{ errors.prepTime }}
      </div>
    </div>

    <!-- Nehézségi szint -->
    <div class="mb-3">
      <label for="difficulty" class="form-label">Nehézségi szint</label>
      <select
        id="difficulty"
        v-model="form.difficulty"
        class="form-select"
        :class="{ 'is-invalid': errors.difficulty }"
      >
        <option value="">Válassz</option>
        <option value="Könnyű">Könnyű</option>
        <option value="Közepes">Közepes</option>
        <option value="Nehéz">Nehéz</option>
      </select>
      <div v-if="errors.difficulty" class="invalid-feedback">
        {{ errors.difficulty }}
      </div>
    </div>

    <!-- Kép URL -->
    <div class="mb-3">
      <label for="image" class="form-label">Kép URL</label>
      <input
        type="text"
        id="image"
        v-model="form.image"
        class="form-control"
        :class="{ 'is-invalid': errors.image }"
      />
      <div v-if="errors.image" class="invalid-feedback">
        {{ errors.image }}
      </div>
    </div>

    <!-- Leírás -->
    <div class="mb-3">
      <label for="description" class="form-label">Leírás</label>
      <textarea
        id="description"
        v-model="form.description"
        class="form-control"
        rows="3"
        :class="{ 'is-invalid': errors.description }"
      ></textarea>
      <div v-if="errors.description" class="invalid-feedback">
        {{ errors.description }}
      </div>
    </div>

    <!-- Hozzáadás gomb -->
    <button type="submit" class="btn btn-primary">Hozzáadás</button>
  </form>
</template>

<script>
export default {
  name: "AddRecipeForm",
  props: {
    onAddRecipe: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        prepTime: "",
        difficulty: "",
        image: "",
        description: "",
      },
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.form.name) this.errors.name = "A recept neve kötelező.";
      if (!this.form.prepTime || this.form.prepTime <= 0)
        this.errors.prepTime = "Érvényes elkészítési idő szükséges.";
      if (!this.form.difficulty)
        this.errors.difficulty = "Válaszd ki a nehézségi szintet.";
      if (!this.form.image) this.errors.image = "Adj meg egy érvényes kép URL-t.";
      if (!this.form.description)
        this.errors.description = "Adj meg egy leírást a recepthez.";
      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        const newRecipe = {
          id: Date.now(),
          name: this.form.name,
          prepTime: `${this.form.prepTime} perc`,
          difficulty: this.form.difficulty,
          image: this.form.image,
          description: this.form.description,
        };
        this.onAddRecipe(newRecipe);
        this.resetForm();
      }
    },
    resetForm() {
      this.form = {
        name: "",
        prepTime: "",
        difficulty: "",
        image: "",
        description: "",
      };
    },
  },
};
</script>
