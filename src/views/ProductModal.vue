<template>
    <v-dialog v-model="dialog" max-width="600" @click:outside="closeModal">
        <v-btn icon @click="closeModal">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-carousel hide-delimiters>
            <v-carousel-item v-for="(image, index) in productImages" :key="index">
                <v-img :src="image" aspect-ratio="2"></v-img>
            </v-carousel-item>
        </v-carousel>
    </v-dialog>
</template>
  
<script>
export default {
    props: {
        dialogValue: Boolean,
        productImages: Array,
    },
    data() {
        return {
            dialog: false,
        };
    },
    watch: {
        dialogValue(newVal) {
            this.dialog = newVal;
        },
    },
    methods: {
        closeModal() {
            // Emetti l'evento 'input' con il valore 'false' quando il modal viene chiuso
            this.$emit('input', false);
        },
    },
};
</script>
  