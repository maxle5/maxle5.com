<template>
  <div class="px-4 mb-8">
    <div class="max-w-3xl bg-white rounded-lg mx-auto mt-4 p-4 lg:mt-8 lg:p-8">
      <div>
        <h1
          class="text-2xl font-medium mb-2"
          v-html="$prismic.asHtml(fields.title)"
        ></h1>
        <prismic-rich-text :field="fields.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {},
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const document = await this.$prismic.api.getSingle('about-me')
      this.fields = {
        title: document.data.about_me_title,
        content: document.data.about_me_content,
      }
    },
  },
}
</script>

<style></style>
