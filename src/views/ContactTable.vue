<template>
    <div>
        <h2>Contacts</h2>
        <v-data-table :headers="headers" :items="allContacts" class="elevation-1" 
        :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination">
            <template slot="items" slot-scope="props">
                <tr @click="selectID($event, props.item)">
                    <td class="text-xs-center">{{ props.item.firstName }}</td>
                    <td class="text-xs-center">{{ props.item.lastName }}</td>
                    <td class="text-xs-center">{{ props.item.email }}</td>
                    <td class="text-xs-center">{{ props.item.phone }}</td>
                    <td class="text-xs-center">{{ props.item.customerStatus }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>


export default {
    data: () => ({
        headers: [
            { text: "First", value: "firstName", align: 'center'},
            { text: "Last", value: "lastName", align: 'center'},
            { text: "Email", value: "email", align: 'center'},
            { text: "Phone", value: "phone", align: 'center'},
            { text: "Status", value: "customerStatus", align: 'center'}
            ],
        rowsPerPageItems: [25, 50, 100],
        pagination: {
            rowsPerPage: 25
        },
    }),

    methods: {
        selectID (event, item) {
            // console.log(item._id);
            this.$router.push({ path: `/view/${item._id}` });
        }
    },
    computed: {
        allContacts () {
            return this.$store.state.contacts;
        }
    }
}
</script>

<style lang="sass">

</style>
