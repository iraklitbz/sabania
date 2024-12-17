import type { ApartmentSabania, ComponentDiscountDiscountSabania } from "~/types/sabania-types";
import type { Range } from "~/types/locale-types";
import { apiCall } from "~/composables/apiCall";
import { calculatePrice } from "~/utils/calculatePrice";
import {
  apartmentsByLocaleQuery,
  apartmentQuery,
  apartmentsQuery,
} from "~/graphql/queries/apartments.query.gql";
export const apartments = defineStore("apartmentsData", {
  state: () => ({
    apartments: [] as ApartmentSabania[],
    apartment: {} as ApartmentSabania,
    currentSlug: "" as string,
    travelers: 1 as number,
    occupiedDates: [] as Range[],
    selectedRange: "" as string,
    checkinDate: "" as string,
    checkoutDate: "" as string,
    checkIfDataRangeIsEmpty: false,
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: [
      "apartment",
      "selectedRange",
      "checkinDate",
      "checkoutDate",
      "travelers",
      "totalPrice",
      "calculateTotalPrice",
      "calculateNights"
    ],
  },
  getters: {
    calculateNights (state) {
        const arrivalDate = new Date(state.checkinDate);
        const departureDate = new Date(state.checkoutDate);
        const timeDifference = departureDate.getTime() - arrivalDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24)
        return daysDifference > 0 ? Math.ceil(daysDifference) : 0
    },
    getTotalPrice (state) {
        return calculatePrice(
            state.apartment.price.price,
            state.apartment.price.travelers,
            state.apartment.price.maxTravelers,
            state.apartment.price.increasePrice,
            apartments().travelers
        );
    },
    calculateTotalPrice(state: any) {
      return state.calculateNights * state.getTotalPrice;
    },
    getDisabledDates(state) {
      const disabledDates: string[] = []
      state.occupiedDates.forEach((range:Range) => {
        const from = new Date(range.arrival);
        const to = new Date(range.departure);

        for (
          let date = new Date(from);
          date <= to;
          date.setDate(date.getDate() + 1)
        ) {
          disabledDates.push(new Date(date).toISOString().split("T")[0]);
        }
      });
      return disabledDates;
    },
    getIfDataRangeIsEmpty(state) {
      return !(state.checkinDate && state.checkoutDate);
    },
    getAppliedDiscount(state) {
      const nights = this.calculateNights;
      const discounts = state.apartment.discount;
      let discount = 0;

      for (const d of discounts as ComponentDiscountDiscountSabania[]) {
        if (d.days != null && d.percentageDiscount != null && nights >= d.days) {
          discount = d.percentageDiscount;
        }
      }

      return discount;
    },
    getTotalPriceWithDiscount(): number {
      const discount = (this.calculateTotalPrice * this.getAppliedDiscount) / 100
      return this.calculateTotalPrice - discount
    },
  },
  actions: {
    async fetchApartmentsByLocal(slug: string) {
      const variables = {
        filters: {
          location: {
            slug: {
              eq: slug,
            },
          },
        },
      };
      const data = await apiCall(apartmentsByLocaleQuery, "data", variables)
      if (data) {
        this.apartments = data.apartments.sort((a:ApartmentSabania, b: ApartmentSabania) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0;
        });
      }
    },
    async fetchApartments() {
      this.apartments = [];
      const data = await apiCall(apartmentsQuery, "data", {});
      if (data) {
        this.apartments = data.apartments;
      }
    },
    async fetchApartment(slug: string) {
      if (this.currentSlug === slug && Object.keys(this.apartment).length > 0) {
        return;
      }
      this.currentSlug = slug;
      this.clearDatesCalendar();
      const variables = {
        filters: {
          slug: {
            eq: slug,
          },
        },
      };
      const data = await apiCall(apartmentQuery, "data", variables);
      if (data) {
        this.apartment = data.apartments[0];
      }
    },
    async fetchApartmentSmoobu(id: string) {
      this.occupiedDates = [];
      const { data } = await useFetch<{ bookings: Range[] }>(`/api/availability/${id}`);
      if (data.value) {
        this.occupiedDates = data.value.bookings.map((booking: Range) => ({
          arrival: booking.arrival,
          departure: booking.departure,
          apartment: booking.apartment,
        }));
      }
    },
    updateDatesCalendar(newRange: string[]) {
      this.checkIfDataRangeIsEmpty = false;
      if (newRange.length === 2) {
        this.checkinDate = newRange[0].toString();
        this.checkoutDate = newRange[1].toString();
      } else {
        this.checkinDate = "";
        this.checkoutDate = "";
      }
    },
    clearDatesCalendar() {
      this.apartment = {} as ApartmentSabania;
      this.selectedRange = "";
      this.checkinDate = "";
      this.occupiedDates = [];
      this.checkoutDate = "";
      this.travelers = 1;
      this.checkIfDataRangeIsEmpty = false;

    },
    setCheckDataRangeIsEmpty() {
      this.checkIfDataRangeIsEmpty = true;
    }
  },
});
