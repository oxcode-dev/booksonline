<template>
    <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <div class="row">
            <div class="col-lg-12">
                <!-- <pre>{{ books[0]}}</pre> -->
                <div class="row row-xs mb-5">
                    <div class="col-sm-4 col-md-3 col-lg-4 col-xl-3 mt-4" v-for="(book, key) in books" :key="key">
                        <div class="card card-profile">
                            <img :src="book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : blank" class="card-img-top" alt="">
                            <div class="card-body text-center">
                                <div>
                                    <h5 class="text-truncate w-100">
                                        <a target="_blank" :href="book.volumeInfo.infoLink" :title="book.volumeInfo.title">{{ book.volumeInfo.title }}</a>
                                    </h5>
                                    <p>{{ book && book.volumeInfo && book.volumeInfo.authors && book.volumeInfo.authors.length !== 0 ? book.volumeInfo.authors[0] : '' }}</p>
                                    <a :href="book.volumeInfo.infoLink" target="_blank" :title="book.volumeInfo.title" class="btn btn-block btn-light">View Details</a>
                                </div>
                            </div>
                        </div><!-- card -->
                    </div><!-- col -->
                </div><!-- row -->

                <!-- <button class="btn btn-block btn-sm btn-white mt-4">Load more</button> -->
            </div><!-- col -->
        </div><!-- row -->
    </div>
</template>

<script>
export default {
    props: {
        books: {
            type: Array,
            required: true
        }
    },

    data(){
        return{
            blank: 'https://cdn1.vectorstock.com/i/1000x1000/94/50/blank-book-cover-vector-2729450.jpg'
        }
    }
}
</script>

<style scoped>
.card-img-top{
    object-fit: cover;
    width: 100%;
    height: 160px;
}
.card-body h5{
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 0;
    font-weight: bolder;
}
.card-body h5 a{
    color: #1b2e4b;
    text-decoration: none;
}
.card-body p{
    color: #8392a5;
    font-size: 12px;
}
</style>
