<template>
  <div class="bg-white rounded-3xl border py-8">
    <div class="flex items-center justify-between px-7 mb-5">
      <div class="font-medium">Amigos</div>
      <nuxt-link to="/user/amigos" class="text-pink-600 text-xs font-medium">
        Ver todos (51)
      </nuxt-link>
    </div>
    <div class="grid grid-cols-3 gap-x-2 gap-y-4 px-2">
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Danilo</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Jessica</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Batista</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Sam</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Henrique Silva</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Mário</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Beto</div>
      </nuxt-link>
      <nuxt-link to="/username" class="space-y-2 transition rounded-lg hover:bg-gray-100 p-3">
        <div class="w-13 h-13 rounded-full bg-gray-200 mx-auto"></div>
        <div class="w-13 mx-auto text-xs font-medium text-gray-900 text-center truncate">Lobão</div>
      </nuxt-link>
      <div class="space-y-2 p-3">
        <div class="w-13 h-13 rounded-full text-center mx-auto">
          <span class="font-bold">...</span>
        </div>
      </div>
    </div>
  </div>
</template>