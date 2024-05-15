<template>
    <div class="rounded-md p-3">
        <div class="flex gap-x-5">
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="type"
                track-by="name"
                label="name"
                :show-labels="false"
                :options="$store.state.filterOptions.product_type"
                @select="selectType"
                @remove="removeType"
            >
                <template #option="props">
                    <div class="flex justify-between">
                        <span> {{ props.option.name }}</span>
                        <span> {{ props.option.count }}</span>
                    </div></template
                >
            </MultiSelect>
            <MultiSelect
                placeholder="Select grade"
                searchable
                v-model="grade"
                track-by="name"
                label="name"
                :show-labels="false"
                :options="$store.state.filterOptions.grade"
                @select="selectGrade"
                @remove="removeGrade"
            >
                <template #option="props">
                    <div class="flex justify-between">
                        <span> {{ props.option.name }}</span>
                        <span> {{ props.option.count }}</span>
                    </div></template
                >
            </MultiSelect>
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="size"
                track-by="name"
                label="name"
                :show-labels="false"
                :options="$store.state.filterOptions.size"
                @select="selectSize"
                @remove="removeSize"
            >
                <template #option="props">
                    <div class="flex justify-between">
                        <span> {{ props.option.name }}</span>
                        <span> {{ props.option.count }}</span>
                    </div></template
                ></MultiSelect
            >
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="connection"
                track-by="name"
                label="name"
                :show-labels="false"
                :options="$store.state.filterOptions.connection"
                @select="selectConnection"
                @remove="removeConnection"
            >
                <template #option="props">
                    <div class="flex justify-between">
                        <span> {{ props.option.name }}</span>
                        <span> {{ props.option.count }}</span>
                    </div></template
                ></MultiSelect
            >
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
            const filterValue = { filter: "product_type", value: value.name };
            const selected = this.filterList.find(
                (filter) => filter.filter === "product_type"
            );

            const filterData = {
                type: [filterValue],
                filterList: this.filterList,
            };

            if (!selected) {
                this.filterList.push(filterValue);
                this.$emit("select", filterData);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "product_type"
            );
            this.filterList.push(filterValue);

            this.$emit("select", {
                ...filterData,
                filterList: this.filterList,
            });
        },
        removeType(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "product_type"
            );
            const filterData = {
                type: this.filterList,
                filterList: this.filterList,
            };
            this.$emit("change", filterData);
        },
        selectGrade(value) {
            const filterValue = { filter: "grade", value: value.name };
            const selected = this.filterList.find(
                (filter) => filter.filter === "grade"
            );
            const filterData = {
                type: [filterValue],
                filterList: this.filterList,
            };

            if (!selected) {
                this.filterList.push(filterValue);
                this.$emit("select", filterData);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "grade"
            );
            this.filterList.push(filterValue);

            this.$emit("select", {
                ...filterData,
                filterList: this.filterList,
            });
        },
        removeGrade(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "grade"
            );
            const filterData = {
                type: this.filterList,
                filterList: this.filterList,
            };
            this.$emit("change", filterData);
        },
        selectSize(value) {
            const filterValue = { filter: "size", value: value.name };
            const selected = this.filterList.find(
                (filter) => filter.filter === "size"
            );
            const filterData = {
                type: [filterValue],
                filterList: this.filterList,
            };

            if (!selected) {
                this.filterList.push(filterValue);
                this.$emit("select", filterData);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "size"
            );
            this.filterList.push(filterValue);

            this.$emit("select", {
                ...filterData,
                filterList: this.filterList,
            });
        },
        removeSize(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "size"
            );
            const filterData = {
                type: this.filterList,
                filterList: this.filterList,
            };
            this.$emit("change", filterData);
        },
        selectConnection(value) {
            const filterValue = { filter: "connection", value: value.name };
            const selected = this.filterList.find(
                (filter) => filter.filter === "connection"
            );
            const filterData = {
                type: [filterValue],
                filterList: this.filterList,
            };

            if (!selected) {
                this.filterList.push(filterValue);
                this.$emit("select", filterData);
                return;
            }
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "connection"
            );
            this.filterList.push(filterValue);

            this.$emit("select", {
                ...filterData,
                filterList: this.filterList,
            });
        },
        removeConnection(value) {
            this.filterList = this.filterList.filter(
                (filter) => filter.filter !== "connection"
            );
            const filterData = {
                type: this.filterList,
                filterList: this.filterList,
            };
            this.$emit("change", filterData);
        },
        search() {
            const filterList = [];
            this.$emit("search", this.filterList);
        },
    },
};
</script>
