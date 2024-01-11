import { ref, reactive } from 'vue';

const useDate = () => {
  const date = ref(new
 
Date());
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getDay = () => {
    return new Date(date.value).getDay();
  };

  const getMonth = () => {
    return monthNames[new Date(date.value).getMonth()];
  };

  const addDay = () => {
    date.value = new Date(date.value.setDate(date.value.getDate() + 1));

    const newDate = new Date(date.value);
    if (newDate.getDate() === 1) {
      date.value = new Date(newDate.setMonth(newDate.getMonth() + 1));
      if (newDate.getMonth() === 0) {
        date.value = new Date(newDate.setFullYear(newDate.getFullYear() + 1));
      }
    }
  };

  const addMonth = (numberOfMonths) => {
    date.value = new Date(date.value.setMonth(date.value.getMonth() + numberOfMonths));

    const newDate = new Date(date.value);
    if (newDate.getMonth() < 0) {
      date.value = new Date(newDate.setFullYear(newDate.getFullYear() - 1));
    } else if (newDate.getMonth() > 11) {
      date.value = new Date(newDate.setFullYear(newDate.getFullYear() + 1));
    }
  };

  return reactive({
    date,
    getDay,
    getMonth,
    addDay,
    addMonth,
  });
};

export default useDate;