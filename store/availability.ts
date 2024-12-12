export const availability = defineStore("availabilityData", {
  state: () => ({
    availability: {
      bookings: [],
    },
    disabledDates: [] as Date[],
  }),
  getters: {
    occupiedDates: (state) => {
      const dates: Date[] = [];
      state.availability.bookings.forEach(({ arrival, departure }) => {
        const start = new Date(arrival);
        const end = new Date(departure);
        for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
          dates.push(new Date(d));
        }
      });
      return dates;
    },
  },
  actions: {
    async fetchApartment(url: string) {
      const { data } = await useFetch(url);
      this.availability = data.value;
    },
  },
});
