interface CountryInfo {
  flag: string;
  country: string;
}

// Ordered longest-prefix first to avoid false matches (e.g. +1868 before +1)
const COUNTRY_CODE_MAP: Array<{ prefix: string } & CountryInfo> = [
  // 4-digit prefixes
  { prefix: "+1868", flag: "🇹🇹", country: "Trinidad & Tobago" },
  { prefix: "+1876", flag: "🇯🇲", country: "Jamaica" },
  { prefix: "+1242", flag: "🇧🇸", country: "Bahamas" },
  { prefix: "+1246", flag: "🇧🇧", country: "Barbados" },
  { prefix: "+1264", flag: "🇦🇮", country: "Anguilla" },
  { prefix: "+1268", flag: "🇦🇬", country: "Antigua & Barbuda" },
  { prefix: "+1284", flag: "🇻🇬", country: "British Virgin Islands" },
  { prefix: "+1340", flag: "🇻🇮", country: "US Virgin Islands" },
  { prefix: "+1345", flag: "🇰🇾", country: "Cayman Islands" },
  { prefix: "+1441", flag: "🇧🇲", country: "Bermuda" },
  { prefix: "+1473", flag: "🇬🇩", country: "Grenada" },
  { prefix: "+1649", flag: "🇹🇨", country: "Turks & Caicos" },
  { prefix: "+1664", flag: "🇲🇸", country: "Montserrat" },
  { prefix: "+1670", flag: "🇲🇵", country: "Northern Mariana Islands" },
  { prefix: "+1671", flag: "🇬🇺", country: "Guam" },
  { prefix: "+1758", flag: "🇱🇨", country: "Saint Lucia" },
  { prefix: "+1767", flag: "🇩🇲", country: "Dominica" },
  { prefix: "+1784", flag: "🇻🇨", country: "Saint Vincent" },
  { prefix: "+1809", flag: "🇩🇴", country: "Dominican Republic" },
  { prefix: "+1829", flag: "🇩🇴", country: "Dominican Republic" },
  { prefix: "+1849", flag: "🇩🇴", country: "Dominican Republic" },
  { prefix: "+1868", flag: "🇹🇹", country: "Trinidad & Tobago" },
  { prefix: "+1869", flag: "🇰🇳", country: "Saint Kitts & Nevis" },
  { prefix: "+1876", flag: "🇯🇲", country: "Jamaica" },
  // 3-digit prefixes
  { prefix: "+852", flag: "🇭🇰", country: "Hong Kong" },
  { prefix: "+853", flag: "🇲🇴", country: "Macau" },
  { prefix: "+855", flag: "🇰🇭", country: "Cambodia" },
  { prefix: "+856", flag: "🇱🇦", country: "Laos" },
  { prefix: "+880", flag: "🇧🇩", country: "Bangladesh" },
  { prefix: "+886", flag: "🇹🇼", country: "Taiwan" },
  { prefix: "+960", flag: "🇲🇻", country: "Maldives" },
  { prefix: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { prefix: "+968", flag: "🇴🇲", country: "Oman" },
  { prefix: "+971", flag: "🇦🇪", country: "UAE" },
  { prefix: "+972", flag: "🇮🇱", country: "Israel" },
  { prefix: "+974", flag: "🇶🇦", country: "Qatar" },
  { prefix: "+977", flag: "🇳🇵", country: "Nepal" },
  { prefix: "+992", flag: "🇹🇯", country: "Tajikistan" },
  { prefix: "+994", flag: "🇦🇿", country: "Azerbaijan" },
  { prefix: "+995", flag: "🇬🇪", country: "Georgia" },
  { prefix: "+998", flag: "🇺🇿", country: "Uzbekistan" },
  // 2-digit prefixes
  { prefix: "+91", flag: "🇮🇳", country: "India" },
  { prefix: "+92", flag: "🇵🇰", country: "Pakistan" },
  { prefix: "+93", flag: "🇦🇫", country: "Afghanistan" },
  { prefix: "+94", flag: "🇱🇰", country: "Sri Lanka" },
  { prefix: "+95", flag: "🇲🇲", country: "Myanmar" },
  { prefix: "+98", flag: "🇮🇷", country: "Iran" },
  { prefix: "+20", flag: "🇪🇬", country: "Egypt" },
  { prefix: "+27", flag: "🇿🇦", country: "South Africa" },
  { prefix: "+30", flag: "🇬🇷", country: "Greece" },
  { prefix: "+31", flag: "🇳🇱", country: "Netherlands" },
  { prefix: "+32", flag: "🇧🇪", country: "Belgium" },
  { prefix: "+33", flag: "🇫🇷", country: "France" },
  { prefix: "+34", flag: "🇪🇸", country: "Spain" },
  { prefix: "+36", flag: "🇭🇺", country: "Hungary" },
  { prefix: "+39", flag: "🇮🇹", country: "Italy" },
  { prefix: "+40", flag: "🇷🇴", country: "Romania" },
  { prefix: "+41", flag: "🇨🇭", country: "Switzerland" },
  { prefix: "+43", flag: "🇦🇹", country: "Austria" },
  { prefix: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { prefix: "+45", flag: "🇩🇰", country: "Denmark" },
  { prefix: "+46", flag: "🇸🇪", country: "Sweden" },
  { prefix: "+47", flag: "🇳🇴", country: "Norway" },
  { prefix: "+48", flag: "🇵🇱", country: "Poland" },
  { prefix: "+49", flag: "🇩🇪", country: "Germany" },
  { prefix: "+51", flag: "🇵🇪", country: "Peru" },
  { prefix: "+52", flag: "🇲🇽", country: "Mexico" },
  { prefix: "+53", flag: "🇨🇺", country: "Cuba" },
  { prefix: "+54", flag: "🇦🇷", country: "Argentina" },
  { prefix: "+55", flag: "🇧🇷", country: "Brazil" },
  { prefix: "+56", flag: "🇨🇱", country: "Chile" },
  { prefix: "+57", flag: "🇨🇴", country: "Colombia" },
  { prefix: "+58", flag: "🇻🇪", country: "Venezuela" },
  { prefix: "+60", flag: "🇲🇾", country: "Malaysia" },
  { prefix: "+61", flag: "🇦🇺", country: "Australia" },
  { prefix: "+62", flag: "🇮🇩", country: "Indonesia" },
  { prefix: "+63", flag: "🇵🇭", country: "Philippines" },
  { prefix: "+64", flag: "🇳🇿", country: "New Zealand" },
  { prefix: "+65", flag: "🇸🇬", country: "Singapore" },
  { prefix: "+66", flag: "🇹🇭", country: "Thailand" },
  { prefix: "+7",  flag: "🇷🇺", country: "Russia" },
  { prefix: "+81", flag: "🇯🇵", country: "Japan" },
  { prefix: "+82", flag: "🇰🇷", country: "South Korea" },
  { prefix: "+84", flag: "🇻🇳", country: "Vietnam" },
  { prefix: "+86", flag: "🇨🇳", country: "China" },
  // 1-digit prefix last
  { prefix: "+1",  flag: "🇺🇸", country: "USA / Canada" },
];

/**
 * Given a phone number string (e.g. "+919876543210"), returns the country info
 * or null if no match found.
 */
export function getPhoneCountry(phone: string): CountryInfo | null {
  if (!phone || !phone.startsWith("+")) return null;
  for (const entry of COUNTRY_CODE_MAP) {
    if (phone.startsWith(entry.prefix)) {
      return { flag: entry.flag, country: entry.country };
    }
  }
  return null;
}

/**
 * Returns true if the phone number looks like an OTP short code
 * (fewer than 7 digits total, not counting the leading +).
 */
export function isShortCode(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length < 7;
}
