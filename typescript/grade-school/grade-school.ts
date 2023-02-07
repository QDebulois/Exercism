type Roster = Record<string, string[]>

export class GradeSchool {
  private _roster: Roster = {}

  roster(): Record<string, string[]> {
    return JSON.parse(JSON.stringify(this._roster))
  }

  add(name: string, grade: number): void {
    for (let students of Object.values(this._roster)) {
      if (students.includes(name)) {
        students.splice(students.indexOf(name, 0), 1)
        break
      }
    }

    if (Object.keys(this._roster).includes(grade.toString())) {
      this._roster[grade].push(name)
      this._roster[grade] = this._roster[grade].sort()
    } else {
      this._roster[grade] = [name]
    }
  }

  grade(grade: number): string[] {
    if (Object.keys(this._roster).includes(grade.toString())) {
      return JSON.parse(JSON.stringify(this._roster[grade]))
    } else {
      return JSON.parse(JSON.stringify([]))
    }
  }
}
