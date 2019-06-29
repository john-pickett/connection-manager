<template>
    <v-flex xs12 md8>
        <h2>Edit Contact</h2>
        <div v-if="contact">
            <v-card>
            <v-card-text>
                <v-container>
                    <v-layout row>
                        <h4>Name</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="First Name" v-model="contact.firstName"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Last Name" v-model="contact.lastName"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h4>Contact Info</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Email" v-model="contact.email"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Phone" v-model="contact.phone"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h4>Address</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Address 1" v-model="contact.address1"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Address 2" v-model="contact.address2"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="City" v-model="contact.city"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 class="pa-1">
                            <v-text-field label="State" v-model="contact.state"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 class="pa-1">
                            <v-text-field label="Zip" v-model="contact.zip" mask="#####"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex md6>
                            <h4 class="text-xs-left">Family</h4>
                        </v-flex>
                        <v-flex md6>
                            <h4 class="text-xs-left">Purchase History</h4>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Spouse Name" v-model="contact.spouseName"></v-text-field>
                            <v-textarea label="Children"  v-model="contact.children"></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <!-- <v-menu full-width>
                                <v-text-field label="Status" slot="activator" :value="chosenStatus"
                                 ></v-text-field>
                                <v-list v-model="contact.customerStatus">
                                    <v-list-tile v-for="(item, index) in contactStatus" :key="index" 
                                    :id="item" @click="menuClicker($event, item)">
                                        <v-list-tile-title>{{ item }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu> -->
                            <v-textarea label="Purchase History" v-model="contact.purchaseHistory"></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h4>Other Information</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Birthday" placeholder="MM/DD/YYYY" 
                                v-model="contact.birthday" mask="##/##/####"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Spouse Birthday" placeholder="MM/DD/YYYY" 
                                v-model="contact.spouseBirthday" mask="##/##/####"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h4>How We Met</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <v-textarea label="How We Met" v-model="contact.howWeMet"></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h4>Notes</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md12 class="pa-1">
                            <v-textarea label="Notes" v-model="contact.notes"></v-textarea>
                        </v-flex>
                    </v-layout> 
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                    <!-- <v-btn color="error" @click="cancel">Cancel</v-btn> -->
                    <v-btn color="success" @click="updateContact">Update Contact</v-btn>
            </v-card-actions>
        </v-card>
        </div>
        
        <v-snackbar v-model="snackbar" :bottom=true>
            Contact saved!
            <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-flex>
</template>

<script>
export default {
    data: () => ({
        snackbar: false
    }),
    methods: {
        updateContact() {
            // const id = this.$route.params.id;
            // console.log('updating ' + id);
            // console.log(JSON.stringify(this.contact));
            
            this.$store.dispatch('UPDATE_CONTACT', this.contact).then(() => {
                this.snackbar = true;
                this.$store.dispatch('LOAD_CONTACT_DATA');
            })
        },
        cancel() {
            // edits made in UI are auto added to contact in store
            // they appear to have been saved, but disappear on refresh
            // this.$router.push({ path: '/contacts' }); 
        }
    },
    computed: {
        allContacts () {
            return this.$store.state.contacts;
        },
        contact () {
            return this.allContacts.filter(item => item._id == this.$route.params.id)[0];
        },

    }
}
</script>

<style lang="sass">

</style>