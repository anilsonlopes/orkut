<template>
  <div class="bg-white rounded-3xl border px-5 py-8">
    <div class="border-b pb-5 mb-10">
      <div
        class="mx-auto w-28 h-28 rounded-full ring-2 ring-blue-400 ring-offset-3 ring-offset-white bg-blue-700"
      ></div>
      <div class="mt-5 flex justify-center items-center space-x-2">
        <div>
          <div
            class="flex justify-center items-center w-5 h-5 rounded-full bg-pink-600 text-white"
          >
            <svg width="1em" height="1em" viewBox="0 0 15 15">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m11.39 5.312l-4.318 5.399L3.68 7.884l.64-.768l2.608 2.173l3.682-4.601l.78.624Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div class="font-bold text-gray-900">Jane Doe</div>
      </div>
      <div class="text-gray-500 text-center text-xs">
        <div>feminino, solteiro</div>
        <div>Santana de Parnaíba - Brasil</div>
      </div>
    </div>

    <ul class="space-y-2">
      <li>
        <nuxt-link to="/" class="block">
          <div class="flex justify-between items-center rounded-lg">
            <div class="flex items-center space-x-2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
                class="text-gray-400"
              >
                <path
                  fill="currentColor"
                  d="M7.5 0a3.499 3.499 0 1 0 0 6.996A3.499 3.499 0 1 0 7.5 0Zm-2 8.994a3.5 3.5 0 0 0-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 0 0-3.5-3.5h-4Z"
                ></path>
              </svg>
              <div>Amigos</div>
            </div>
            <div class="rounded-lg bg-pink-600 text-white text-xs p-1">114</div>
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="block">
          <div class="flex justify-between items-center rounded-lg">
            <div class="flex items-center space-x-2">
              <svg width="1em" height="1em" viewBox="0 0 15 15" class="text-gray-400">
                <path
                  fill="currentColor"
                  d="M4.036 1a4.036 4.036 0 0 0-2.854 6.89l5.964 5.964a.5.5 0 0 0 .708 0l5.964-5.965a4.036 4.036 0 0 0-5.707-5.707l-.611.61l-.61-.61A4.036 4.036 0 0 0 4.035 1Z"
                ></path>
              </svg>
              <div>Depoimentos</div>
            </div>
            <div class="rounded-lg bg-pink-600 text-white text-xs p-1">2</div>
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="block">
          <div class="flex justify-between items-center rounded-lg">
            <div class="flex items-center space-x-2">
              <svg width="1em" height="1em" viewBox="0 0 15 15" class="text-gray-400">
                <path
                  fill="currentColor"
                  d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27L7.825.12Z"
                ></path>
              </svg>
              <div>Início</div>
            </div>
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="block">
          <div class="flex justify-between items-center rounded-lg">
            <div class="flex items-center space-x-2">
              <svg width="1em" height="1em" viewBox="0 0 15 15" class="text-gray-400">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293v6.999l-2.5-2.504l-2.959 2.957L4.5 5.7L1 10.075V1.5ZM11 6h-1V5h1v1Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M1 11.675V13.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5v-1.793l-2.5-2.504l-3.041 3.039L4.5 7.3L1 11.675Z"
                ></path>
              </svg>
              <div>Galeria</div>
            </div>
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="block">
          <div class="flex justify-between items-center rounded-lg">
            <div class="flex items-center space-x-2">
              <svg width="1em" height="1em" viewBox="0 0 15 15" class="text-gray-400">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M0 5.5A3.5 3.5 0 0 1 3.5 2h8A3.5 3.5 0 0 1 15 5.5v4.528a2.972 2.972 0 0 1-5.63 1.329L9.19 11H5.809l-.179.357A2.972 2.972 0 0 1 0 10.027V5.5ZM4 8V7H3V6h1V5h1v1h1v1H5v1H4Zm6 0H9V7h1v1Zm1-2h1V5h-1v1Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>Jogos</div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
