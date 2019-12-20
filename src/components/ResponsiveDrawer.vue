<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app width="300" mobile-break-point="md">
      <div class="pl-7 pr-7 d-flex  align-content-space-between flex-wrap fill-height">
        <v-container>
          <v-row>
            <v-col :cols="12" align="center">
              <img src="../assets/workfinder.png" alt="company_icon" witdh="150" height="150" />
            </v-col>
            <v-divider class="mx-4"></v-divider>
            <v-col :cols="12">
              <v-list dense v-for="(menu, i) in menus" :key="i" max-height="40">
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon>{{ menu.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-light">{{
                      menu.title
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row align="center" justify="center">
            <v-col :cols="6"
              ><v-card height="60" class="d-flex justify-center" color="#F9FAFA"
                ><v-icon>mdi-bookmark</v-icon></v-card
              >
            </v-col>
            <v-col :cols="6"
              ><v-card height="60" class="d-flex justify-center" color="#F9FAFA"
                ><v-icon>mdi-settings</v-icon></v-card
              >
            </v-col>
            <v-col :cols="12">
              <v-card color="#F9FAFA">
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <img src="../assets/someone.jpg" alt="drawer"
                  /></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Matt Frost</v-list-item-title>
                    <v-list-item-subtitle>Designer</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-navigation-drawer>
    <div class="hidden-sm-and-up">
      <v-app-bar app color="indigo" dark>
        <v-avatar @click.stop="drawer = !drawer" size="40">
          <img src="../assets/workfinder.png" alt="drawer" />
        </v-avatar>
        <v-toolbar-title>Work Finder</v-toolbar-title>
      </v-app-bar>
    </div>

    <v-content class="d-flex align-start pt-sm-0 ma-3">
      <v-col class="text-center">
        <JobBanner />
        <JobTable class="mt-4" />
      </v-col>
    </v-content>
  </v-app>
</template>
<style scoped>
.subtitle-2 {
  font-size: 5em;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import JobBanner from './JobBanner.vue';
import JobTable from './JobTable.vue';

@Component({
  components: {
    JobBanner,
    JobTable,
  },
})
export default class ResponsiveDrawer extends Vue {
  @Prop({
    default: [
      { title: 'Home', icon: 'mdi-home' },
      { title: 'Search Jobs', icon: 'mdi-magnify' },
      { title: 'Favourite Companies' },
      { title: 'By Your Specialty' },
      { title: 'High Salaries' },
      { title: 'Top Companies', icon: 'mdi-briefcase' },
      { title: 'Post Job', icon: 'mdi-plus' },
      { title: 'Report Us', icon: 'mdi-alert-octagon' },
    ],
  })
  private menus!: any[];

  @Prop()
  private drawer!: any;
}
</script>
