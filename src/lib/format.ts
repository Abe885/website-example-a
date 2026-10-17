import { business } from '../data/business';

/** "07:00" -> "7:00 am", "18:30" -> "6:30 pm" */
export function formatTime(time: string): string {
  const [hourText, minutes] = time.split(':');
  const hour = Number(hourText);
  const period = hour < 12 ? 'am' : 'pm';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${minutes} ${period}`;
}

/** 4.5 -> "$4.50", 0 -> "Free" */
export function formatPrice(price: number): string {
  if (price === 0) return 'Free';
  return `$${price.toFixed(2)}`;
}

/** One line of the address, e.g. "418 Linden Street, Portland, OR 97214" */
export function fullAddress(): string {
  const { street, city, region, postalCode } = business.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}

/** Link that opens Google Maps searching for the café's address. */
export function mapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name}, ${fullAddress()}`,
  )}`;
}
