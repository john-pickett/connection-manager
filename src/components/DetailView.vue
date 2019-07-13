<template>
    <v-card class="spread">
        <v-img></v-img>
        <v-card-text>
            <v-layout v-if="focusContact">
                <v-flex xs6 class="spread">
                    <v-card-text>
                        <p class="text-xs-left headline" style="font-weight: bold">{{focusContact.firstName}} {{focusContact.lastName}}</p>
                        <p class="text-xs-left"><span class="category">Email: </span> {{focusContact.email}}</p>
                        <p class="text-xs-left"><span class="category">Phone: </span>{{focusContact.phone}}</p>
                        <p class="text-xs-left"><span class="category">Address: </span>{{focusContact.address1}} 
                            {{focusContact.address2}} <br />{{focusContact.city}}
                            {{focusContact.state}} {{focusContact.zip}}
                        </p>
                        <p class="text-xs-left"><span class="category">Spouse: </span> {{focusContact.spouseName}}</p>
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
        </v-card-text>
        <v-card-actions>
            <v-btn v-if="focusContact" color="warning" id="edit-btn" @click="editContact">Edit Contact</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({

    }),
    methods: {
        editContact() {
            // console.log('editing...');
            this.$store.state.editContact = true;
            this.$store.state.viewContact = false;
        }
    },
    computed: {
        allContacts () {
            return this.$store.state.contacts;
        },
        focusContact () {
            return this.allContacts.filter(item => item._id === this.$route.params.id)[0];
        }
    }
}
</script>

<style lang="sass">
    #edit-btn
        position: absolute;
        bottom: 20%;
        right: 5%;

</style>
