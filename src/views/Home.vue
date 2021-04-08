<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Ticket v-for="event in events" :key="event.id" :event="event"></Ticket>
  </div>
</template>

<script>
// @ is an alias to /src

import Ticket from "@/components/Ticket.vue";
import TicketService from "@/Services/TicketService";

export default {
  data() {
    return {
      events: null,
    };
  },
  created() {
    TicketService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  name: "Home",
  components: {
    Ticket,
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
