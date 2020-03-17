<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        予定を登録
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="value"
            :weekdays="weekday"
            :type="type"
            :events="events"
            :event-overlap-mode="mode"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            @change="getEvents"
          ></v-calendar>
        </v-sheet>
      </blockquote>
    </v-flex>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/inspire">
        使ってみる
      </v-btn>
    </v-card-actions>
  </v-layout>
</template>
