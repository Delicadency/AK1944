export const Routes = {
  HOME: "/",
  GALLERY: "/galeria",
  PARTNERS: "/partnerzy",
  CONTACT: "/kontakt",
  GRAVES_INVENTORY: "/inwentarz-grobow",
  BIOGRAMS: "/biogramy",
  ABOUT: "/zwiazek/o-nas",
  BOARD: "/zwiazek/zarzad",
  UNION_HISTORY: "/zwiazek/historia-zwiazku",
  CALENDAR: "/zwiazek/kalendarz",
  ONGOING_PROJECTS: "/zwiazek/projekty",
  MEMORIALS: "/zwiazek/miejsca-pamieci",
  HISTORY: "/historia",
  REGIMENT: "/historia/strzelcy",
  DEBICA_DISTRICT: "/historia/obwod-debica",
  OPERATION: "/historia/akcja-burza",
  LITERATURE: "/historia/literatura",
  PARTISAN_TRAIL: "/szlak-partyzancki",
  ORIGIN: "/szlak-partyzancki/geneza",
  RAIDS: "/szlak-partyzancki/rajdy",
  SUPPORT: "/wesprzyj",
  SUPPORT_DONATION: "/wesprzyj#donation-section",
  POLICY: "/polityka-prywatnosci",
  REGULATIONS: "/regulamin",
  VOLUNTEERS: "/wolontariusze",
  ARCHIVE: "/archiwum",
} as const;

export type RouteKeys = keyof typeof Routes;
export type RouteValues = (typeof Routes)[RouteKeys];
