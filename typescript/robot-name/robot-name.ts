export class Robot {
  static  usedNames: Set<string> = new Set()
  private _name: string

  constructor() {
    this._name = this.setUniqueName()
  }

  private generateName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let name = ""
    for (let i = 0; i < 2; i++) {
      name += letters[Math.floor(Math.random() * letters.length)]
    }
    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10)
    }
    return name
  }

  private setUniqueName(): string {
    let name = this.generateName()
    while (Robot.usedNames.has(name)) {
      name = this.generateName()
    }
    Robot.usedNames.add(name)
    return name
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    this._name = this.setUniqueName()
  }

  public static releaseNames(): void {
    Robot.usedNames.clear()
  }

}