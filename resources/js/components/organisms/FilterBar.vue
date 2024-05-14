<template>
    <div class="rounded-md p-3">
        <div class="flex gap-x-5">
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="type"
                :options="['Casing', 'Sandscreen', 'Pup Joint']"
            ></MultiSelect>
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="grade"
                :options="['Casing', 'Sandscreen', 'Pup Joint']"
            ></MultiSelect>
            <MultiSelect
                placeholder="Select"
                searchable
                v-model="connection"
                :options="['Conductor', 'Threaded & Coupled']"
            ></MultiSelect>
            <button class="bg-secondary font-bold text-white p-4 rounded-lg">
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
            connection: "",
        };
    },
};
</script>
