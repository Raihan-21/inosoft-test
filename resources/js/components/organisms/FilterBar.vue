<template>
    <div class="rounded-md p-3">
        <div class="flex gap-x-5">
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="type"
                @select="selectType"
                @remove="removeType"
                :options="['Casing', 'Sandscreen', 'Pup Joint']"
            ></MultiSelect>
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="grade"
                @select="selectGrade"
                @remove="removeGrade"
                :options="['Casing', 'Sandscreen', 'Pup Joint']"
            ></MultiSelect>
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="size"
                @select="selectSize"
                @remove="removeSize"
                :options="['Casing', 'Sandscreen', 'Pup Joint']"
            ></MultiSelect>
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="connection"
                @select="selectConnection"
                @remove="removeConnection"
                :options="['Conductor', 'Threaded & Coupled']"
            ></MultiSelect>
            <button
                class="bg-secondary font-bold text-white p-4 rounded-lg"
                @click="search"
            >
                Find
            </button>
        </div>
    </div>
</template>

<script>
import "vue-multiselect/dist/vue-multiselect.min.css";
import MultiSelect from "vue-multiselect";

export default {
    components: {
        MultiSelect,
    },
    data() {
        return {
            type: "",
            grade: "",
            size: "",
            connection: "",
            filterList: [],
        };
    },
    methods: {
        selectType(value) {
            const filterValue = { filter: "product_type", value };
            console.log(value);
            const selected = this.filterList.find(
                (filter) => filter.filter === "product_type"
            );
            if (!selected) {
                this.filterList.push(filterValue);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "product_type"
            );
            this.filterList.push(filterValue);
        },
        removeType(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "product_type"
            );
        },
        selectGrade(value) {
            const filterValue = { filter: "type", value };
            const selected = this.filterList.find(
                (filter) => filter.filter === "grade"
            );
            if (!selected) {
                this.filterList.push(filterValue);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "grade"
            );
            this.filterList.push(filterValue);
        },
        removeGrade(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "grade"
            );
        },
        selectSize(value) {
            const filterValue = { filter: "type", value };
            const selected = this.filterList.find(
                (filter) => filter.filter === "size"
            );
            if (!selected) {
                this.filterList.push(filterValue);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "size"
            );
            this.filterList.push(filterValue);
        },
        removeSize(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "size"
            );
        },
        selectConnection(value) {
            const filterValue = { filter: "connection", value };
            const selected = this.filterList.find(
                (filter) => filter.filter === "connection"
            );
            if (!selected) {
                this.filterList.push(filterValue);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "connection"
            );
            this.filterList.push(filterValue);
        },
        removeConnection(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "connection"
            );
        },
        search() {
            const filterList = [];
            this.$emit("search", this.filterList);
        },
    },
};
</script>
