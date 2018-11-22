<template>
    <v-flex xs12 md8>
        <h2>Add New Contact</h2>
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
                            <v-text-field label="Zip" v-model="contact.zip"></v-text-field>
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
                            <v-menu full-width>
                                <v-text-field label="Status" slot="activator" :value="chosenStatus"
                                 ></v-text-field>
                                <v-list v-model="contact.customerStatus">
                                    <v-list-tile v-for="(item, index) in contactStatus" :key="index" 
                                    :id="item" @click="menuClicker($event, item)">
                                        <v-list-tile-title>{{ item }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                            <v-textarea label="Purchase History" v-model="contact.purchaseHistory"></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h4>Other Information</h4>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Birthday" placeholder="MM/DD/YYYY" 
                                v-model="contact.birthday"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <v-text-field label="Spouse Birthday" placeholder="MM/DD/YYYY" 
                                v-model="contact.spouseBirthday"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
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
                    <v-btn color="error">Cancel</v-btn>
                    <v-btn color="success" :loading="isLoading" :disabled="isDisabled" 
                        @click="saveContact">Save Contact</v-btn>
            </v-card-actions>
        </v-card>
        <v-snackbar v-model="snackbar" :bottom=true>
            Contact saved!
            <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-flex>
</template>

<script>
export default {
    data: () => ({
        isLoading: false,
        isDisabled: false,
        snackbar: false,
        contactStatus: ['Acquaintance', 'Prospect', 'Client'],
        chosenStatus: '',
        contact: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            spouseName: '',
            children: '',
            customerStatus: '',
            purchaseHistory: '',
            birthday: '',
            spouseBirthday: '',
            howWeMet: '',
            notes: ''
        }
    }),
    methods: {
        menuClicker (e, item) {
            this.chosenStatus = item
            this.contact.customerStatus = item;
        },
        saveContact () {
            this.isLoading = true;
            this.isDisabled = true;
            this.$store.commit('CREATE_NEW_CONTACT', this.contact);
            this.$store.dispatch('SAVE_NEW_CONTACT').then(() => {
                console.log('contact saved');
                this.isLoading = false;
                this.isDisabled = false;
                this.clearForm();
                this.snackbar = true;
            });
        },
        clearForm () {
            Object.keys(this.contact).forEach((item) => {
                this.contact[item] = '';
            })
        }
    },
    created () {
        
    }
    
}
</script>

<style lang="sass">

</style>