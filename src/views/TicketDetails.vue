<template>
  <div class="card border-dark mb-3 d-block mx-auto" style="max-width: 18rem">
    <div class="card-header">
      {{ event.title }}
    </div>
    <div class="card-body text-dark">
      <h5 class="card-title">{{ event.date }} - {{ event.time }}</h5>
      <p class="card-text">{{ event.description }}</p>
      <p class="alert-danger">Location: {{ event.location }}</p>
    </div>
  </div>
</template>
<script>
import TicketService from "@/Services/TicketService";
export default {
  data() {
    return {
      event: null,
    };
  },
  created() {
    TicketService.getEvents(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
