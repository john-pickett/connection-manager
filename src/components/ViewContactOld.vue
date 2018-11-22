<template>
    <v-flex xs12 md8>
        <h2>View Contact</h2>
        <v-card>
            <v-card-text>
                <!-- Name: {{currentContact.firstName}} -->
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left contact-name">{{currentContact.firstName}} {{currentContact.lastName}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Email:</span> {{currentContact.email}}</p>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Phone: </span>{{currentContact.phone}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Address: </span>{{currentContact.address1}} 
                                {{currentContact.address2}} <br />{{currentContact.city}}, 
                                {{currentContact.state}} {{currentContact.zip}} </p>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Spouse:</span> {{currentContact.spouseName}}</p>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Children: </span>{{currentContact.children}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Birthday: </span>{{currentContact.birthday}}</p>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Spouse Birthday: </span>{{currentContact.spouseBirthday}}</p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-text>
                <v-container>
                    <v-layout row>
                        <h2 class="text-xs-center">Sales Information</h2>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 class="pa-1">
                            <p class="text-xs-left"><span class="category">Status: </span>{{currentContact.customerStatus}}</p>
                            <p class="text-xs-left"><span class="category">Purchase History: </span>{{currentContact.purchaseHistory}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <h2 class="text-xs-center">Relationship</h2>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md12 class="pa-1">
                            <p class="text-xs-left"><span class="category">How We Met: </span>{{currentContact.howWeMet}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Notes: </span>{{currentContact.notes}}</p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data: () => ({
        dummyContact: {
            "id": "2",
            "firstName": "Eliza",
            "lastName": "Jane",
            "email": "janet.smith@gmail.com",
            "phone": "636-123-5678",
            "address1": "123 Main St",
            "address2": "",
            "city": "Creve Coeur",
            "state": "MO",
            "zip": "63146",
            "spouseName": "Jim",
            "children": "Stanley, 12",
            "birthday": "01/01/1970",
            "spouseBirthday": "01/02/1970",
            "howWeMet": "Notes on how we met here...",
            "notes": "Notes on other things here...",
            "customerStatus": "Acquaintance",
            "purchaseHistory": "A brief summary of purchases made, products and dates"
        }
    }),
    computed: {
        allContacts () {
            return this.$store.state.contacts;
        },
        currentContact () {
            return this.allContacts.filter(item => item._id == this.$route.params.id)[0];
        }
    },
    created () {
        // console.log('route' + this.$route.params.id)

    }
}
</script>

<style lang="scss" scoped>
p {
    font-size: 18px;
}

.contact-name {
    font-size: 28px;
}

.category {
    font-weight: bold;
}

</style>