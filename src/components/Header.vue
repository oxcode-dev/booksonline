<template>
   <section class="jumbotron text-center text-white">
        <div class="container">
            <h1 class="jumbotron-heading" style="visibility: hidden">BooksOnline</h1>
            <p class="lead text-muted" style="visibility: hidden">Online Books Directory</p>

            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="input-group">
                        <input placeholder="The Richest Man in Babylon" type="text" class="form-control" v-model="search" @keyup="getData">
                        <!-- <div class="prepend">
                            <button class="btn btn-primary" @click.prevent="getData">Search</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { o_O, urlString } from './../Helpers/Index.js';
import QueryServices from './../Services/QueryServices.js';

export default {
    data(){
        return {
            search: ''
        }
    },

    methods:{
        async getData(){
            if(this.search){
                let search = urlString(this.search)
                let [err, data] = await o_O(QueryServices.getData(search));
                // this.books = data.items;
                this.$emit('search', data.items)
            }
        }
    }
}
</script>

<style>
.jumbotron{
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://www.bestsevenreviews.com/wp-content/uploads/2019/01/google_play_books_review.jpg')
}
</style>
