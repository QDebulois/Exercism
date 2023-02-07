export class Clock {
  private time = 0

  constructor(hour: number, minute?: number) {
    this.time += hour * 60
    if (minute) { this.time += minute }
    this.rollOver()
  }

  private rollOver(): void {
    let isNegatifTime: Boolean = false
    if (this.time < 0) { this.time = Math.abs(this.time); isNegatifTime = true }
    if (this.time >= 24 * 60) { this.time = this.time % (24 * 60) }
    if (isNegatifTime) {this.time = 24 * 60 - this.time}
  }

  public toString(): string {
    const hours: string = Math.floor(this.time / 60).toString().padStart(2, "0")
    const minutes: string = (this.time % 60).toString().padStart(2, "0")
    return `${hours}:${minutes}`
  }

  public plus(minutes: number): Clock {
    this.time += minutes
    this.rollOver()
    return this
  }

  public minus(minutes: number): Clock {
    this.time -= minutes
    this.rollOver()
    return this
  }

  public equals(other: Clock): boolean {
    return other.toString() == this.toString()
  }
}