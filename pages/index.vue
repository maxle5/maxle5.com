<template>
  <div
    class="px-4 mb-8 container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <div
      v-for="blogPost in blogPosts"
      :key="blogPost.id"
      class="bg-white mt-4 lg:mt-8"
    >
      <prismic-image :field="blogPost.thumbnail" />
      <div class="p-1">
        <NuxtLink
          :to="blogPost.link"
          class="text-lg font-medium mb-2 block"
          v-html="$prismic.asText(blogPost.title)"
        ></NuxtLink>
        <p class="mb-0">{{ $prismic.asText(blogPost.summary) }}</p>
      </div>
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
  computed: {},
  async mounted() {
    const query = this.$prismic.predicates.at('document.type', 'blog-post')
    const records = (await this.$prismic.api.query(query)).results

    this.blogPosts = records.map((record) => ({
      id: record.data.uid,
      title: record.data.blog_title,
      summary: record.data.blog_summary,
      thumbnail: record.data.blog_thumbnail,
      link: `/${record.uid}`,
    }))
  },
}
</script>
