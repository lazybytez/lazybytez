<template>
  <div class="github-projects">
    <h2>Our GitHub Projects:</h2>
    <div class="dynamic-grid3c">
      <article v-bind:key="project.id" v-for="project in ghprojects" class="grid-item3c" >
        <h2>{{ project.name }}</h2>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import GithubApiResponse from "../model/GithubApiResponse"

@Component({ name: "GithubProjects" })
export default class GithubProjects extends Vue {
  private ghprojects: GithubApiResponse[] = []

  public created(): void {
    const request = new XMLHttpRequest()
    const repoArray: GithubApiResponse[] = []
    request.open("GET", "https://api.github.com/orgs/lazybytez/repos", true)
    request.onload = () => {
      const data = JSON.parse(request.response)
      for (let i = 0; i < data.length; i++) {
        const element = data[i]
        repoArray[i] = {
          id: i,
          name: element.name,
          url: element.url
        }
      }
      this.ghprojects = repoArray
    }
    request.send()
  }
}
</script>

<style lang="less" scoped>
.github-projects {
  margin: 250px 0 0 0;
}
.dynamic-grid3c {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
  .grid-item3c {
    background-color: #1A2737;
    width: 360px;
    height: 360px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    h2 {
      margin: 0;
      padding: 166px 0 166px 0;
      text-transform: uppercase;
      letter-spacing: 0.3em;
    }
  }
}
</style>
