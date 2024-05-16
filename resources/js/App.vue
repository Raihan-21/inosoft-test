<template>
    <div>
        <Header />

        <div class="relative px-10">
            <div class="absolute top-[-40px] left-0 z-[2] w-full px-6">
                <FilterBar
                    @change="setFilterCount"
                    @search="setFilteredData"
                    class="w-full shadow-lg bg-white"
                />
            </div>

            <div class="pt-20 overflow-auto">
                <table class="w-full border-separate border-spacing-2">
                    <template v-if="isLoading"><div>Loading...</div></template>
                    <template v-else>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th class="min-w-[150px]">Code</th>
                                <th class="min-w-[100px]">Item ID</th>
                                <th>Quantity</th>
                                <th>Quantity Unit</th>
                                <th>Country Name</th>
                                <th class="min-w-[150px]">Item Code</th>
                                <th class="min-w-[200px]">Item Desc</th>
                                <th>Product Type</th>
                                <th class="min-w-[100px]">Grade</th>
                                <th>Connection</th>
                                <th class="min-w-[100px]">Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, i) in data" :key="i">
                                <td>{{ data.id }}</td>
                                <td>{{ data.code }}</td>
                                <td>{{ data.item_id }}</td>
                                <td>{{ data.qty }}</td>
                                <td>{{ data.qty_unit }}</td>
                                <td>{{ data.country_name }}</td>
                                <td>{{ data.item_code }}</td>
                                <td>{{ data.item_desc }}</td>
                                <td>{{ data.product_type }}</td>
                                <td>{{ data.grade }}</td>
                                <td>{{ data.connection }}</td>
                                <td>{{ data.size }}</td>
                            </tr>
                        </tbody></template
                    >
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axiosInstance from "./axios/index.js";
import Header from "./components/molecules/Header.vue";
import FilterBar from "./components/organisms/FilterBar.vue";

export default {
    components: {
        Header,
        FilterBar,
    },
    data() {
        return {
            isLoading: false,
            data: [],
        };
    },
    async mounted() {
        this.isLoading = true;
        try {
            const res = await axiosInstance.get("/api/data");
            this.$store.dispatch("setData", res.data);
            this.data = this.$store.state.data;
        } catch (error) {
            console.log(error.response.data);
        } finally {
            this.isLoading = false;
        }
    },
    methods: {
        async filter(filterPriority) {
            console.log(filterPriority);
            // this.isLoading = true;
            try {
                let filteredList = this.$store.state.data;
                filterPriority.forEach((filter) => {
                    const filtered = filteredList.filter((data) => {
                        return data[filter.filter] === filter.value;
                    });
                    filteredList = [...filtered];
                });
                console.log("FILTERED LIST", filteredList);
                return filteredList;
            } catch (error) {
            } finally {
                // this.isLoading = false;
            }
        },
        async setFilteredData(filterPriority) {
            this.isLoading = true;

            try {
                this.data = await this.filter(filterPriority);
            } catch (error) {
            } finally {
                this.isLoading = false;
            }
        },
        async setFilterCount(filterData) {
            let productList = [];
            // console.log("FILTER LIST", { filter: filterData.type });
            try {
                productList = await this.filter(filterData.type);
            } catch (error) {}
            this.$store.dispatch("setFilterOption", {
                type: filterData.type,
                products: productList,
            });
        },
    },
};
</script>

<style scoped>
td {
    padding: 1rem;
}
</style>
