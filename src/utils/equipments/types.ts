export type Equipment = 'hat' | 'accessory' | 'shield' | 'weapon' | 'grey'
export type NonEquipment = 'body' | 'empty'
export const Equipments: Equipment[] = [
  'hat',
  'accessory',
  'shield',
  'weapon',
  'grey',
]

export type TranslatedName = {
  fr: string;
  en: string;
};