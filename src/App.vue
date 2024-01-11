<template>
    <div>
        <h1>Current Date: {{ date }}</h1>
        <p>Day of the week: {{ getDay() }}</p>
        <p>Month: {{ getMonth() }}</p>

        <button @click="addDay">Add Day</button>
        <button @click="addMonth(1)">Add Month</button>
    </div>
</template>

<script setup>
import useDate from './useDate'

const { date, getDay, getMonth, addDay, addMonth } = useDate();
</script>