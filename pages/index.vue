<template>
  <section>
    <div class="bg-white">
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div class="mx-auto max-w-2xl">
          <div class="text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              GitHub Actions Generator
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Select technology, testing suite and deployment, and the system
              will generate GitHub Actions file with instructions 🚀
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Developed for
              <a
                target="_blank"
                href="https://dev.to/devteam/announcing-the-github-dev-2023-hackathon-4ocn"
                class="font-bold"
                >GitHub + Dev hackathon</a
              >
              by
              <a
                target="_blank"
                href="https://www.timotejavsec.com"
                class="font-bold"
                >Timotej Avsec</a
              >
            </p>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-2xl py-16 sm:py-16 lg:py-16">
      <form
        action=""
        class="shadow-md relative p-3 bg-opacity-10 bg-black rounded-md"
      >
        <label
          for="technology"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Technology</label
        >
        <select
          v-model="technology"
          id="technology"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="nuxt">Nuxt</option>
          <option value="angular">Angular</option>
        </select>

        <label
          for="buildProcessor"
          class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
          >Build processor</label
        >
        <select
          :disabled="!technology"
          v-model="buildProcessor"
          id="buildProcessor"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option
            v-for="processor in availableBuildProcessors"
            :key="processor.id"
            :value="processor.id"
          >
            {{ processor.name }}
          </option>
        </select>

        <div class="flex items-center mb-4 mt-4">
          <input
            id="include-tests"
            type="checkbox"
            v-model="includeTesting"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="include-tests"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Add tests</label
          >
        </div>

        <div v-if="includeTesting">
          <label
            for="testingSuite"
            class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >Testing suite</label
          >
          <select
            :disabled="!buildProcessor"
            v-model="testingSuite"
            id="testingSuite"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              v-for="suite in availableTestingSuite"
              :key="suite.id"
              :value="suite.id"
            >
              {{ suite.name }}
            </option>
          </select>
        </div>

        <label
          for="deployment"
          class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
          >Deployment destination</label
        >
        <select
          :disabled="!buildProcessor"
          v-model="deployment"
          id="deployment"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option
            v-for="depl in availableDeploymentMethods"
            :key="depl.id"
            :value="depl.id"
          >
            {{ depl.name }}
          </option>
        </select>

        <hr class="h-px my-8 bg-black border-0 dark:bg-black" />

        <button
          :disabled="!buildProcessor || !deployment"
          @click.prevent="showAdditionalSettings = !showAdditionalSettings"
          class="mt-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            {{ showAdditionalSettings ? 'Hide' : 'Show' }} additional settings
          </span>
        </button>

        <div v-show="showAdditionalSettings">
          <div>
            <div>
              <label
                for="mainbranch"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >Name of the main branch</label
              >
              <input
                type="text"
                id="mainbranch"
                v-model="generalAdditionalSettings.mainBranch"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="nodeVersion"
              class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
              >Node version</label
            >
            <input
              type="text"
              id="nodeVersion"
              v-model="generalAdditionalSettings.nodeVersion"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div v-if="this.includeTesting">
            <label
              for="testCommand"
              class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
              >Test command</label
            >
            <input
              type="text"
              id="testCommand"
              v-model="generalAdditionalSettings.testCommand"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div v-if="technology === 'react'" class="mt-2">
            <div class="mt-1">
              <label
                for="buildCommand"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >React build command</label
              >
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  {{ buildProcessor === 'npm' ? 'npm run' : buildProcessor }}
                </div>
                <input
                  type="text"
                  id="buildCommand"
                  v-model="reactAdditionalSettings.buildCommand"
                  :class="{
                    'pl-12': buildProcessor === 'yarn',
                    'pl-20': buildProcessor === 'npm',
                  }"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div v-if="technology === 'vue'" class="mt-2">
            <div class="mt-1">
              <label
                for="buildCommand"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >Vue build command</label
              >
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  {{ buildProcessor === 'npm' ? 'npm run' : buildProcessor }}
                </div>
                <input
                  type="text"
                  id="buildCommand"
                  v-model="vueAdditionalSettings.buildCommand"
                  :class="{
                    'pl-12': buildProcessor === 'yarn',
                    'pl-20': buildProcessor === 'npm',
                  }"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div v-if="technology === 'nuxt'" class="mt-2">
            <div class="mt-1">
              <label
                for="buildCommand"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >Nuxt build command</label
              >
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  {{ buildProcessor === 'npm' ? 'npm run' : buildProcessor }}
                </div>
                <input
                  type="text"
                  id="buildCommand"
                  v-model="nuxtAdditionalSettings.buildCommand"
                  :class="{
                    'pl-12': buildProcessor === 'yarn',
                    'pl-20': buildProcessor === 'npm',
                  }"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div v-if="technology === 'angular'" class="mt-2">
            <div class="mt-1">
              <label
                for="buildCommand"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >Angular build command</label
              >
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  {{ buildProcessor === 'npm' ? 'npm run' : buildProcessor }}
                </div>
                <input
                  type="text"
                  id="buildCommand"
                  v-model="angularAdditionalSettings.buildCommand"
                  :class="{
                    'pl-12': buildProcessor === 'yarn',
                    'pl-20': buildProcessor === 'npm',
                  }"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div v-if="deployment === 's3'" class="mt-2">
            <div class="mt-1">
              <label
                for="s3bucket"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >Name of the S3 Bucket</label
              >
              <input
                type="text"
                id="s3bucket"
                v-model="s3AdditionalSettings.bucket"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mt-1">
              <label
                for="awsregion"
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                >AWS Region</label
              >
              <input
                type="text"
                id="awsregion"
                v-model="s3AdditionalSettings.region"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <button
            @click="generateConfig"
            :disabled="!buildProcessor || !deployment"
            type="button"
            class="text-center mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-full"
          >
            Get my config 🚀
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { initFlowbite } from 'flowbite'
const Mustache = require('mustache')

export default {
  name: 'IndexPage',
  data() {
    return {
      technology: 'react',
      buildProcessor: '',
      testingSuite: '',
      includeTesting: false,
      deployment: '',
      showAdditionalSettings: false,
      generalAdditionalSettings: {
        mainBranch: 'main',
        nodeVersion: 14,
        testCommand: '',
      },
      reactAdditionalSettings: {
        buildCommand: 'build',
      },
      vueAdditionalSettings: {
        buildCommand: 'build',
      },
      nuxtAdditionalSettings: {
        buildCommand: 'build',
      },
      angularAdditionalSettings: {
        buildCommand: 'build',
      },
      s3AdditionalSettings: {
        region: 'eu-central-1',
        bucket: 'my-bucket',
      },
    }
  },
  mounted() {
    initFlowbite()
  },
  watch: {
    buildProcessor(val) {
      this.testingSuite = ''
      this.deployment = ''
      this.showAdditionalSettings = false

      if (this.technology === 'nuxt') {
        this.nuxtAdditionalSettings.buildCommand =
          'build && ' + (val === 'npm' ? 'npm run generate' : val + ' generate')
      }
    },
    technology() {
      this.buildProcessor = ''
      this.testingSuite = ''
      this.deployment = ''
      this.showAdditionalSettings = false
    },
    testingSuite(val) {
      if (val === 'jest')
        this.generalAdditionalSettings.testCommand = 'test:unit'
      else if (val === 'cypress')
        this.generalAdditionalSettings.testCommand = 'test:e2e'
    },
  },
  computed: {
    availableBuildProcessors() {
      switch (this.technology) {
        case 'react':
          return [
            {
              id: 'npm',
              name: 'NPM',
            },
            {
              id: 'yarn',
              name: 'Yarn',
            },
          ]
        case 'vue':
          return [
            {
              id: 'npm',
              name: 'NPM',
            },
            {
              id: 'yarn',
              name: 'Yarn',
            },
          ]
        case 'nuxt':
          return [
            {
              id: 'npm',
              name: 'NPM',
            },
            {
              id: 'yarn',
              name: 'Yarn',
            },
          ]
        case 'angular':
          return [
            {
              id: 'npm',
              name: 'NPM',
            },
            {
              id: 'yarn',
              name: 'Yarn',
            },
          ]
      }
    },
    availableTestingSuite() {
      switch (this.technology) {
        case 'react':
          return [
            {
              id: 'jest',
              name: 'Jest',
            },
            {
              id: 'cypress',
              name: 'Cypress',
            },
          ]
        case 'vue':
          return [
            {
              id: 'jest',
              name: 'Jest',
            },
            {
              id: 'cypress',
              name: 'Cypress',
            },
          ]
        case 'nuxt':
          return [
            {
              id: 'jest',
              name: 'Jest',
            },
            {
              id: 'cypress',
              name: 'Cypress',
            },
          ]
        case 'angular':
          return [
            {
              id: 'jest',
              name: 'Jest',
            },
            {
              id: 'cypress',
              name: 'Cypress',
            },
          ]
      }
    },
    availableDeploymentMethods() {
      switch (this.technology) {
        case 'react':
          return [
            {
              id: 's3',
              name: 'AWS S3',
            },
            {
              id: 'github',
              name: 'GitHub Pages',
            },
            {
              id: 'heroku',
              name: 'Heroku',
            },
            {
              id: 'netlify',
              name: 'Netlify',
            },
          ]
        case 'vue':
          return [
            {
              id: 's3',
              name: 'AWS S3',
            },
            {
              id: 'github',
              name: 'GitHub Pages',
            },
            {
              id: 'heroku',
              name: 'Heroku',
            },
            {
              id: 'netlify',
              name: 'Netlify',
            },
          ]
        case 'nuxt':
          return [
            {
              id: 's3',
              name: 'AWS S3',
            },
            {
              id: 'github',
              name: 'GitHub Pages',
            },
            {
              id: 'heroku',
              name: 'Heroku',
            },
            {
              id: 'netlify',
              name: 'Netlify',
            },
          ]
        case 'angular':
          return [
            {
              id: 's3',
              name: 'AWS S3',
            },
            {
              id: 'github',
              name: 'GitHub Pages',
            },
            {
              id: 'heroku',
              name: 'Heroku',
            },
            {
              id: 'netlify',
              name: 'Netlify',
            },
          ]
      }
    },
  },
  methods: {
    async generateConfig() {
      let deploySteps = ''
      if (this.deployment === 's3') {
        const file = await (await fetch('/templates/deploy/s3.tmpl')).text()
        deploySteps = Mustache.render(file, {
          awsRegion: this.s3AdditionalSettings.region,
          bucket: this.s3AdditionalSettings.bucket,
          outputDirectory:
            this.technology === 'react'
              ? 'build'
              : this.technology === 'vue'
              ? 'dist'
              : this.technology === 'nuxt'
              ? 'dist'
              : this.technology === 'angular'
              ? 'dist'
              : '',
        })
      } else if (this.deployment === 'github') {
        const file = await (await fetch('/templates/deploy/gh.tmpl')).text()
        deploySteps = Mustache.render(file, {
          mainBranch: this.generalAdditionalSettings.mainBranch,
          outputDirectory:
            this.technology === 'react'
              ? 'build'
              : this.technology === 'vue'
              ? 'dist'
              : this.technology === 'nuxt'
              ? 'dist'
              : this.technology === 'angular'
              ? 'dist'
              : '',
        })
      }

      fetch('/templates/main.tmpl')
        .then((response) => response.text())
        .then((template) => {
          const output = Mustache.render(template, {
            name: 'github actions for ' + this.technology,
            mainBranch: this.generalAdditionalSettings.mainBranch,
            nodeVersion: this.generalAdditionalSettings.nodeVersion,
            installCommand: this.buildProcessor + ' install',
            buildProcessor:
              this.buildProcessor === 'npm' ? 'npm run' : this.buildProcessor,
            buildCommand:
              this.technology === 'react'
                ? this.reactAdditionalSettings.buildCommand
                : this.technology === 'vue'
                ? this.vueAdditionalSettings.buildCommand
                : this.technology === 'nuxt'
                ? this.nuxtAdditionalSettings.buildCommand
                : this.technology === 'angular'
                ? this.angularAdditionalSettings.buildCommand
                : '',
            includeTesting: this.includeTesting,
            testCommand: this.generalAdditionalSettings.testCommand,
            deploySteps: deploySteps,
          })

          console.log(output)
        })
    },
  },
}
</script>