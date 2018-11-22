<template>
    <v-layout row>
        <v-flex md4 class="pa-1">
            <!-- CONTACT INFO CARD -->
            <v-card>
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left contact-name">{{currentContact.firstName}} {{currentContact.lastName}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Email:</span> {{currentContact.email}}</p>
                            <p class="text-xs-left"><span class="category">Phone: </span>{{currentContact.phone}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Address: </span>{{currentContact.address1}} 
                                {{currentContact.address2}} <br />{{currentContact.city}}
                                {{currentContact.state}} {{currentContact.zip}} </p>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Spouse:</span> {{currentContact.spouseName}}</p>
                            <p class="text-xs-left"><span class="category">Children: </span>{{currentContact.children}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Birthday: </span>{{currentContact.birthday}}</p>
                            <p class="text-xs-left"><span class="category">Spouse Birthday: </span>{{currentContact.spouseBirthday}}</p>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex md4 class="pa-1">
            <!-- SALES INFO CARD -->
            <v-card>
                <v-card-text>
                    <v-layout row>
                        <div class="filler"></div>
                    </v-layout>
                    <v-layout row>
                        <h2 class="text-xs-center">Sales Information</h2>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Status: </span>{{currentContact.customerStatus}}</p>
                            <p class="text-xs-left"><span class="category">Purchase History: </span>{{currentContact.purchaseHistory}}</p>
                        </v-flex>
                    </v-layout>
                    
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex md4 class="pa-1">
            <!-- RELATIONSHIP CARD -->
            <v-card>
                <v-card-text>
                    <v-layout row>
                        <div class="filler"></div>
                    </v-layout>
                    <v-layout row>
                        <h2 class="text-xs-center">Relationship</h2>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">How We Met: </span>{{currentContact.howWeMet}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="pa-1">
                            <p class="text-xs-left"><span class="category">Notes: </span>{{currentContact.notes}}</p>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
        
    }),
    computed: {
        allContacts () {
            return this.$store.state.contacts;
        },
        currentContact () {
            return this.allContacts.filter(item => item._id == this.$route.params.id)[0];
        },

    },
    created () {
        // console.log('route' + this.$route.params.id);

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

.filler {
    height: 70px;
}

</style>