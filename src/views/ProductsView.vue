<template>
    <div class="products-view-container">
        <v-data-iterator :items="this.products" :items-per-page="itemsPerPage">
            <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
                <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
                    <div class="text-truncate">
                        PRODOTTI
                    </div>

                    <div class="d-flex align-center">
                        <v-btn class="me-8" variant="text" @click="onClickSeeAll">
                            <span class="text-decoration-underline text-none">See all</span>
                        </v-btn>

                        <div class="d-inline-flex">
                            <v-btn :disabled="page === 1" icon="mdi-arrow-left" size="small" variant="tonal" class="me-2"
                                @click="prevPage"></v-btn>

                            <v-btn :disabled="page === pageCount" icon="mdi-arrow-right" size="small" variant="tonal"
                                @click="nextPage"></v-btn>
                        </div>
                    </div>
                </h1>
            </template>

            <template v-slot:default="{ items }">
                <v-row>
                    <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
                        <v-sheet border>
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
                                :src="item.raw.thumbnail" cover height="150"></v-img>

                            <v-list-item :title="item.raw.title" lines="two" density="comfortable"
                                :subtitle="item.raw.description">
                                <template v-slot:title>
                                    <strong class="text-h6">
                                        {{ item.raw.title }}
                                    </strong>
                                </template>
                            </v-list-item>

                            <v-table density="compact" class="text-caption">
                                <tbody>
                                    <tr align="right">
                                        <th></th>

                                        <td></td>
                                    </tr>

                                    <tr align="right">
                                        <th>CATEGORY</th>

                                        <td>
                                            <v-chip>
                                                {{ item.raw.category }}
                                            </v-chip>
                                        </td>
                                    </tr>


                                    <tr align="right">
                                        <th>RATING</th>

                                        <td>
                                            <v-rating hover :length="5" :size="20" :model-value="item.raw.rating"
                                                active-color="primary" readonly half-increments />
                                        </td>
                                    </tr>

                                    <tr align="right">
                                        <th>STOCK</th>

                                        <td>

                                            <v-chip :color="item.raw.stock ? 'green' : 'red'"
                                                :text="item.raw.stock ? item.raw.stock + ' - In stock' : item.raw.stock + ' - Out of stock'"
                                                class="text-uppercase" label size="small"></v-chip>

                                        </td>
                                    </tr>

                                    <tr align="right">
                                        <th>Price:</th>

                                        <td>
                                            ${{ item.raw.price }}</td>
                                    </tr>
                                </tbody>
                            </v-table>

                            <v-btn @click="openModal(item.raw.images)">
                                VISUALIZZA LE IMMAGINI
                            </v-btn>
                        </v-sheet>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>
    </div>

    <ProductModal :dialogValue="showModal" :productImages="currentProductImages" @input="showModal = false" />
</template>
  
<script>
import ProductModal from './ProductModal.vue';
import prodotti from '../prodotti.js';
console.log(prodotti)

export default {
    components: {
        ProductModal,
    },
    data() {
        return {
            itemsPerPage: 4,
            products: [],
            showModal: false,
            currentProductImages: [],
        };
    },
    methods: {
        onClickSeeAll() {
            this.itemsPerPage = this.itemsPerPage === 4 ? this.products.length : 4
        },
        openModal(images) {
            this.currentProductImages = images;
            this.showModal = true;
        },
    },
    mounted() {
        this.products = prodotti
        console.log('Prodotti caricati', this.products);
    },
};
</script>
  
<style>
.products-view-container {
    text-align: center;
    margin: 70px auto;
    width: 75%;
}

.products-view-container .v-table__wrapper {
    overflow: hidden !important;
}
</style>
  