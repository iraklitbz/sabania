<script setup lang="ts">
    import { availability } from '~/store/availability'
    await availability().fetchApartment('/api/availability/1774595')
    const date = ref(new Date())

    const attrs = ref([
        {
        key: 'today',
        highlight: {
            color: 'green',
            fillMode: 'solid'
        },
        dates: new Date()
        }
    ])
</script>
<template>
    <main>
        <h2>
            Apartament name
        </h2>
        <div>
            <client-only>
                <h2>Calendar</h2>
                <h2>Date Picker</h2>
                <VDatePicker 
                    v-model.range.number="date" 
                    :attributes="attrs"
                    :disabled-dates="availability().occupiedDates"
                />
            </client-only>
        </div>
    </main>
</template>