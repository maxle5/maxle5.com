<template>
  <div class="px-4 mb-8">
    <div
      v-for="blogPost in blogPosts"
      :key="blogPost.id"
      class="max-w-3xl bg-white rounded-lg mx-auto mt-8 p-8"
    >
      <h1
        class="text-2xl font-medium mb-2"
        v-html="$prismic.asText(blogPost.title)"
      ></h1>
      <prismic-rich-text :field="blogPost.content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [],
    }
  },
  async mounted() {
    const query = this.$prismic.predicates.at('document.type', 'blog-post')
    const records = (await this.$prismic.api.query(query)).results

    this.blogPosts = records.map((record) => ({
      id: record.data.uid,
      title: record.data.blog_title,
      content: record.data.blog_content,
    }))
  },
}
</script>

<style></style>
