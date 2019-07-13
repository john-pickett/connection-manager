<template>
    <v-layout row>
        <v-flex xs3>
            <v-text-field label="Search" box></v-text-field>
            <v-flex xs12 v-for="contact of allContacts" :key="contact._id" py-2>
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
            <v-card class="spread">
                <v-layout v-if="focusContact">
                    <v-flex xs6 class="spread">
                        <v-card-text>
                            <p class="text-xs-left headline"  style="font-weight: bold">{{focusContact.firstName}} {{focusContact.lastName}}</p>
                            <p class="text-xs-left"><span class="category">Email:</span> {{focusContact.email}}</p>
                            <p class="text-xs-left"><span class="category">Phone:</span>{{focusContact.phone}}</p>
                            <p class="text-xs-left"><span class="category">Address: </span>{{focusContact.address1}} 
                                {{focusContact.address2}} <br />{{focusContact.city}}
                                {{focusContact.state}} {{focusContact.zip}}
                            </p>
                            <p class="text-xs-left"><span class="category">Spouse:</span> {{focusContact.spouseName}}</p>
                            <p class="text-xs-left"><span class="category">Children: </span>{{focusContact.children}}</p>
                            <p class="text-xs-left"><span class="category">Birthday: </span>{{focusContact.birthday}}</p>
                            <p class="text-xs-left"><span class="category">Spouse Birthday: </span>{{focusContact.spouseBirthday}}</p>
                        </v-card-text>
                    </v-flex>
                    <v-flex xs6 class="spread">
                        <h2 class="text-xs-center sales-headline">Sales Information</h2>
                        <p class="text-xs-left"><span class="category">Purchase History: </span>{{focusContact.purchaseHistory}}</p>
                        <h2 class="text-xs-center">Relationship</h2>
                        <p class="text-xs-left"><span class="category">How We Met: </span>{{focusContact.howWeMet}}</p>
                        <p class="text-xs-left"><span class="category">Notes: </span>{{focusContact.notes}}</p>
                    </v-flex>
                </v-layout>
            </v-card>
            
            <!-- <v-layout row>
                <v-flex xs6 class="spread">
                    
                    
                </v-flex>
                <v-flex xs6 class="spread">
                    
                    <v-card class="spread">
                        hi
                    </v-card>
                </v-flex>
            </v-layout> -->
        </v-flex>
    </v-layout>
</template>

<script>
/* eslint-disable */
export default {
    data: () => ({
        nums: [1,2,3,4,5,6,7,8,9,10],
        focusID: ''
    }),
    methods: {
        selectFocusContact (event) {
            console.log('selecting')
            // console.log(event.path[1].id)
            // console.log(event)
            this.focusID = event.path[1].id;
            console.log(this.focusID)
        }
    },
    computed: {
        allContacts () {
            return this.$store.state.contacts;
        },
        focusContact () {
            return this.allContacts.filter(item => item._id === this.focusID)[0]
        }
    },
    watch: {
        focusContact() {
            // console.log(this.focusContact)
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
