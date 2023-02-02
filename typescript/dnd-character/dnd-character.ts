
export class DnDCharacter {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  hitpoints: number

  public static generateAbilityScore(): number {
    let res = 0;
    let rolls: number[] = []
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1)
    }
    rolls = rolls.sort().slice(1)
    for (let i = 0; i < rolls.length; i++) {
      res += rolls[i]
    }
    return res
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
}