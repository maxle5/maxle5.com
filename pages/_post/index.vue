<template>
  <div class="px-4 mb-8">
    <div class="max-w-3xl bg-white rounded-lg mx-auto mt-4 p-4 lg:mt-8 lg:p-8">
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
      blogPost: {},
    }
  },
  async mounted() {
    const record = await this.$prismic.api.getByUID(
      'blog-post',
      this.$route.params.post
    )

    // map to data object
    this.blogPost = {
      id: record.uid,
      title: record.data.blog_title,
      content: record.data.blog_content,
    }
  },
}
</script>
