export const ENV = {
  SERVER_HOST: process.env.NEXT_PUBLIC_SERVER_HOST,
  API_URL: process.env.NEXT_PUBLIC_SERVER_HOST + "/api",
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/local/register",
      LOGIN: "auth/local",
    },
    USERS_ME: "users/me",
    USERS: "users",
    PLATFORM: "platforms",
    ADDRESS: "addresses",
    GAME: "games",
    WISHLIST: "wishlists",
    PAYMENY_ORDER: "payment-order",
    ORDER: "orders",
  },
  TOKEN: "token",
  CART: "cart",
  STRIPE_TOKEN: process.env.NEXT_PUBLIC_STRIPE_API,
};
