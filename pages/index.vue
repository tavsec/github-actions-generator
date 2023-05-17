<template>
  <section>
    <div class="bg-white">

      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-2xl py-16 sm:py-16 lg:py-16">

          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">GitHub Actions Generator</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">Select technology, testing suite and deployment, and the system will generate GitHub Actions file with instructions 🚀</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Developed for <a target="_blank" href="https://dev.to/devteam/announcing-the-github-dev-2023-hackathon-4ocn" class="font-bold">GitHub + Dev hackathon</a> by <a target="_blank" href="https://www.timotejavsec.com" class="font-bold">Timotej Avsec</a></p>

          </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-2xl py-16 sm:py-16 lg:py-16">

      <form action="" class="shadow-md relative p-3 bg-opacity-10 bg-black rounded-md">
        <label for="technology" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technology</label>
        <select v-model="technology" id="technology" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>

        <label for="buildProcessor" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Build processor</label>
        <select :disabled="!technology" v-model="buildProcessor" id="buildProcessor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option v-for="processor in availableBuildProcessors" :key="processor.id" :value="processor.id">{{processor.name}}</option>
        </select>

        <div class="flex items-center mb-4 mt-4">
          <input id="include-tests" type="checkbox" v-model="includeTesting" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="include-tests" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add tests</label>
        </div>

        <div v-if="includeTesting">
          <label for="testingSuite" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Testing suite</label>
          <select :disabled="!buildProcessor" v-model="testingSuite" id="testingSuite" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="suite in availableTestingSuite" :key="suite.id" :value="suite.id">{{suite.name}}</option>
          </select>
        </div>

        <label for="deployment" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Deployment destination</label>
        <select :disabled="!buildProcessor" v-model="deployment" id="deployment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option v-for="depl in availableDeploymentMethods" :key="depl.id" :value="depl.id">{{depl.name}}</option>
        </select>

        <div class="w-full flex items-center">
        <button type="button" class="text-center mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-full">
          Get my config 🚀
        </button>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      technology: "react",
      buildProcessor: "",
      testingSuite: "",
      includeTesting: false,
      deployment: ""
    }
  },
  watch:{
    buildProcessor(){
      this.testingSuite = ""
      this.deployment = ""
    },
    technology(){
      this.buildProcessor = ""
      this.testingSuite = ""
      this.deployment = ""
    }
  },
  computed:{
    availableBuildProcessors(){
      switch (this.technology) {
        case "react": return [
          {
            id: "npm",
            name: "NPM"
          }, {
            id: "yarn",
            name: "Yarn"
          }, {
            id: "docker",
            name: "Docker"
          }
        ]
        case "vue": return [
          {
            id: "npm",
            name: "NPM"
          }, {
            id: "yarn",
            name: "Yarn"
          }, {
            id: "docker",
            name: "Docker"
          }
        ]
        case "angular": return [
          {
            id: "npm",
            name: "NPM"
          }, {
            id: "yarn",
            name: "Yarn"
          }, {
            id: "docker",
            name: "Docker"
          }
        ]
      }
    },
    availableTestingSuite(){
      switch (this.technology) {
        case "react": return [
          {
            id: "jest",
            name: "Jest"
          }, {
            id: "cypress",
            name: "Cypress"
          }
        ]
        case "vue": return [
          {
            id: "jest",
            name: "Jest"
          }, {
            id: "cypress",
            name: "Cypress"
          }
        ]
        case "angular": return [
          {
            id: "jest",
            name: "Jest"
          }, {
            id: "cypress",
            name: "Cypress"
          }
        ]
      }
    },
    availableDeploymentMethods(){
      switch (this.technology) {
        case "react": return [
          {
            id: "s3",
            name: "AWS S3"
          }, {
            id: "github",
            name: "GitHub Pages"
          }, {
            id: "heroku",
            name: "Heroku"
          }, {
            id: "netlify",
            name: "Netlify"
          }
        ]
        case "vue": return [
          {
            id: "s3",
            name: "AWS S3"
          }, {
            id: "github",
            name: "GitHub Pages"
          }, {
            id: "heroku",
            name: "Heroku"
          }, {
            id: "netlify",
            name: "Netlify"
          }
        ]
        case "angular": return [
          {
            id: "s3",
            name: "AWS S3"
          }, {
            id: "github",
            name: "GitHub Pages"
          }, {
            id: "heroku",
            name: "Heroku"
          }, {
            id: "netlify",
            name: "Netlify"
          }
        ]
      }
    }
  }
}
</script>
