export class Matrix {
  private _rows: number[][] = []
  private _columns: number[][] = []

  constructor(matrix: string) {
    const txtRow = matrix.split("\n")
    for (let i = 0; i < txtRow.length; i++ ) {
      this._rows.push(txtRow[i].split(" ").map((x) => { return Number(x) }))
      for (let j = 0; j < this._rows[i].length; j++ ) {
        if (this._columns.length < this._rows[i].length) {
          this._columns.push([this._rows[i][j]])
        } else {
          this._columns[j].push(this._rows[i][j])
        }
      }
    }
  }

  get rows(): number[][] {
    return this._rows
  }

  get columns(): number[][] {
    return this._columns
  }
}
