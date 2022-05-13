<template>
  <div class="container mx-auto px-5 py-10 grid grid-cols-4 gap-6">
    <div class="flex items-center justify-center">
      <span class="text-5xl text-pink-600 font-brand">orkut</span>
    </div>
    <div class="col-span-2 flex items-center space-x-3">
      <div>
        <nuxt-link
          to="/"
          class="w-14 h-14 bg-white border rounded-full flex items-center justify-center"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
            class="text-gray-400"
          >
            <path
              fill="currentColor"
              d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27L7.825.12Z"
            ></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="w-full">
        <div class="flex items-center relative">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
            class="absolute left-5 text-gray-400 pointer-events-none"
          >
            <path
              fill="none"
              stroke="currentColor"
              d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Pesquisar no Orkut"
            class="w-full text-sm rounded-full border bg-white h-14 pl-12 outline-none transition focus:ring-2"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 justify-end">
      <div>
        <div class="w-10 h-10 rounded-full bg-blue-500"></div>
      </div>
      <div class="text-xs pr-8">
        <div class="font-medium text-gray-900">Anilson Lopes</div>
        <div class="text-gray-600">@anilsonlopes</div>
      </div>
      <svg width="1em" height="1em" viewBox="0 0 15 15" class="text-gray-600">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          d="m4.5 6.5l3 3l3-3"
        ></path>
      </svg>
    </div>
  </div>
</template>
