export interface IRotatingGlobe {
  country: ICountry
  land: ILand
  borders: IBorders
  sphere: ISphere
  arc: IArc
}

export interface ICountry {
  fillStyle: string
}

export interface ILand {
  fillStyle: string
}

export interface IBorders {
  strokeStyle: string
  lineWidth: number
}

export interface ISphere {
  strokeStyle: string
  lineWidth: number
  fillStyle: string
}

export interface IArc {
  strokeStyle: string
  lineWidth: number
}
