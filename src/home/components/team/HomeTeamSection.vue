<script setup lang="ts">
import { TEAM_DATA } from "../../config/home-team.config"

const { t } = useI18n()

</script>

<template>
  <section id="team" class="bg-black bg-opacity-10 py-14">
    <div class="container">
      <HomeSectionHeading class="text-center mb-14">
        {{t('home.team.title')}}
      </HomeSectionHeading>
      <section class="max-w-4xl mx-auto">
        <ul class="flex flex-wrap justify-center -mx-20px">
          <li class="w-1/5 min-w-44 px-20px" v-for="team in TEAM_DATA" :key="team.name">
            <HomeTeamTile :team="team" />
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
