<template>
  <router-link :to="{ name: 'TicketDetails', params: { id: event.id } }"
    >
    <div class="card border-dark mb-3 d-block mx-auto" style="maxwidth: 18rem">
      <div class="card-header">{{ event.title }}</div>
      <div class="card-body text-dark">
        <h5 class="card-title">{{ event.date }} - {{ event.time }}</h5>
        <p class="card-text">{{ event.description }}</p>
        <p class="alert-danger">Locatie: {{ event.location }}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Ticket",
  props: {
    event: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
