import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  import.meta.env.VITE_SHOPTACLE_PUBLIC_KEY,
  true
);
