<template>
    <v-layout row>
        <v-flex xs3>
            <v-text-field label="Search" box v-model="nameFilter"></v-text-field>
            <v-flex xs12 v-for="contact of filteredContacts" :key="contact._id" py-2>
                <v-card :id=contact._id>
                    <v-card-title class="headline" @click="selectFocusContact($event)">
                        {{contact.firstName}} {{contact.lastName}}
                    </v-card-title>
                    <v-card-text>
                        <p>Email: {{contact.email}}</p>
                        <p>Phone: {{contact.phone}}</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-flex>
        <v-flex xs9 class="details spread">
            <detail-view v-if="viewContact"></detail-view>
            <edit-contact v-if="editContact"></edit-contact>
        </v-flex>
    </v-layout>
</template>

<script>
import DetailView from './DetailView';
import EditContact from './EditContact';
/* eslint-disable */

export default {
    components: {
        DetailView,
        EditContact
    },
    data: () => ({
        nameFilter: ''
    }),
    methods: {
        selectFocusContact (event) {
            this.$store.state.viewContact = true;
            const id = event.path[1].id;
            this.$router.push({ path: `/list/${id}`});
        },
        alphabetize (a, b) {
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
                return -1;
            }
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
                return 1;
            }
            return 0;
        }
    },
    computed: {
        allContacts () {
            return this.$store.state.contacts.sort(this.alphabetize);
        },
        filteredContacts() {
            return this.allContacts.filter(item => item.firstName.toLowerCase().indexOf(this.nameFilter) > -1 || 
                    item.lastName.toLowerCase().indexOf(this.nameFilter) > -1);
        },
        viewContact () {
            return this.$store.state.viewContact;
        },
        editContact () {
            return this.$store.state.editContact;
        }
    }
}
</script>

<style lang="sass">
    .details
        position: fixed;
        left: 28%;
    
    .spread
        height: 100%;
        width: 95%;
    
    .sales-headline
        margin-top: 30px;
    
    p
        font-size: 18px;
    
</style>
