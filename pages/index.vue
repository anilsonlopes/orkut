<template>
  <div class="bg-gray-100 min-h-screen">
    <OrNavbar />
    <div class="container mx-auto px-5 pb-10 grid grid-cols-4 gap-6">
      <div>
        <OrProfile />
      </div>
      <div class="col-span-2">
        <OrBio />
      </div>
      <div class="space-y-4">
        <OrFriends />
        <OrCommunities />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
