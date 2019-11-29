<template>
    <div>
        <Header @search="searchItems($event)" />
        <ListItems :books="books" />
    </div>
</template>

<script>
import QueryServices from './Services/QueryServices.js'
import { o_O, urlString } from './Helpers/Index.js'
import Header from './components/Header'
import ListItems from './components/ListItems'
export default {
    components:{ListItems, Header},
    data(){
        return{
            books: []
        }
    },

    methods:{
        async getData(){
            let search = urlString('The Richest Man in Babylon')
            let [err, data] = await o_O(QueryServices.getData(search));
            this.books = data.items;
            console.log(data.items)
        },

        searchItems(books){
            this.books = books;
        }
    },

    beforeMount() {
        this.getData();
    }
}
</script>

<style>

</style>
