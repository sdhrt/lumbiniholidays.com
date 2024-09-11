import { Data } from "@/app/components/TourTemplate";

export const chitang_tour_data: Data = {
  title: "Chitlang Tour",
  price: 40,
  days: 2,
  description: `
Chitlang is the newari village located in the Makawanpur district. Chitlang serves to be the most prefered destination for hiking from Kathmandu. It is the home of more than 100 species of bird and goat cheese is the most popular of the village.  `,
  itinerary: [
    {
      "1":
        "Drive to Chitlang, pickup from collection point, 3-hour journey from Kathmandu, arrival and accommodation in tent or room, welcome snacks, campfire, music, and dinner at the resort.",
    },
    {
      "2":
        "Explore Chitlang, early morning wakeup, breakfast at resort, village sightseeing, lunch at resort, checkout, drive to Malekhu, boating, return to Kathmandu, drop at the original pickup location.",
    },
  ],
  service: {
    includes: [
      "Ground Transportation",
      "1 Breakfast, 1 Lunch, 1 Snack, and 1 Dinner",
      "Accommodation",
      "Campfire",
    ],
    excludes: [
      "Beverages (Beer, mineral water, etc.)",
      "Personal expenses",
      "BBQ facilities",
    ],
  },
};
