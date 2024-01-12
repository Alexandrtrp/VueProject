<template>
  <v-row>
    <v-col>
      <div class="text-h5 text-sm-h3 mb-8">My personal Cost</div>
      <v-dialog v-model="dialog">
        <template #activator="{on}">
          <v-btn color="teal" dark v-on="on">
            ADD NEW COST <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      <v-card>
        <add-payment-form @addNewPayment="dialog = !dialog"/>
      </v-card>
      </v-dialog>
      <payments-display :items="currentElements" />
    </v-col>
    <v-col>
      CHART
    </v-col>
  </v-row>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm
},

data() {
  return {
    dialog: false,
    page: 1,
    n: 10
  }
},

  computed: {
    ...mapGetters({
      getSumValue: 'getFullPaymentValue',
      paymentsList: 'getPaymentsList'
    }),

    currentElements() {
      return this.$store.getters.getPaymentsList.slice(
        this.n * (this.page - 1), 
        this.n * (this.page-1) + this.n)
    }
  },

  methods: {
    ...mapMutations({
      setData: 'setPaymentsListData',
      addData: 'addDataToPaymentsList'
    }),
    ...mapActions(['fetchData']),

    onChangePage(p) {
      this.page = p
      this.fetchData(p)
    },

    openAddPaymentForm() {
      this.$modal.show('AddPaymentForm',{
        title: "Add new cost"
      })
    }
  },

  created() {
    this.fetchData(1);
  },

  mounted() {
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page)
    }
  }
}

</script>

<style></style>