<template>

  <div class="create-new">
    <h1>Create New Event</h1>
    <hr>
    <div class="container">

        <div class="row">
            <div class="form-container">
                <form id="contact-form" class="form" action="#" onsubmit="event.preventDefault()" role="form">
                    <h2>Details</h2>
                    <table class="event-form-table">
                        <tr>
                            <td>Venue</td>
                            <td>
                                <input v-model="venue" type="text" class="form-control" id="name" name="name" placeholder="Venue" tabindex="1" required>
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input v-model="city" type="text" class="form-control" id="city" name="city" placeholder="City" tabindex="2" required>
                            </td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>
                                <input v-model="date" type="date" class="form-control" id="date" name="date" placeholder="Date" tabindex="3">
                            </td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>
                                <input v-model="time" type="text" class="form-control" id="time" name="time" placeholder="Time" tabindex="4">
                            </td>
                        </tr>
                        <tr>
                            <td>Image</td>
                            <td>
                                <input v-model="image" type="text" class="form-control" id="image" name="image" placeholder="Image" tabindex="5">
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <textarea v-model="description" rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Description..." tabindex="6" required></textarea>
                            </td>
                        </tr>
                    </table>
                    <hr>

                    <h2>Tickets</h2>
                    <table class="ticket-table">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available</th>
                        </tr>
                        <tr v-for="ticket in tickets">
                            <td><input type="text" v-model="ticket.name"></td>
                            <td><input type="number" step="0.01" v-model="ticket.price"></td>
                            <td><input type="number" step="0.01" v-model="ticket.available"></td>
                        </tr>
                    </table>
                    <button class="grey" type="button" v-on:click="addTicket">Add Ticket Type</button>
                    <hr>

                    <div class="text-center">
                        <button class="grey" type="submit" v-on:click="createEvent">Create</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  </div>

</template>

<script>

  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'

  export default {
    name: 'NewEvent',
    data: () => ({
      venue: '',
      city: '',
      date: '',
      time: '',
      image: '',
      description: '',
      tickets: []
    }),
    mounted() {
      console.log("mounted new event component")
    },
    computed : {
    ...mapGetters(['getUsername', 'getEvents']),
      //Other computed properties
    },
    methods: {
        ...mapMutations([
            'createEvent'
        ]),
        makeid() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
        },
        addTicket() {
            console.log("add ticket");
            this.tickets.push({
                name: "new ticket",
                price: 20,
                available: 100,
                tid: "ticket" + this.makeid()
            })
        },
        createEvent() {
            console.log("create event function triggered", this.venue, this.city, this.date, this.time, this.image, this.description); 
            this.$store.commit('createEvent', {
                venue: this.venue,
                city: this.city,
                date: this.date,
                time: this.time,
                image: this.image,
                description: this.description,
                tickets: this.tickets
            });
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.create-new {
    text-align: center;
    input {
        display: inline-block;
    }
    .event-form-table,
    .ticket-table {
        margin: auto;
        tr {
            td,
            th {
                text-align: left;
                padding: 4px 20px;
                input,
                textarea {
                    width: 100%;
                }
            }
            
        }
    }
}

</style>
