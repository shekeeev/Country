
export type NameModules = {
    common: string
    official: string
}
export type FlagModules = {
    png: string
}
export type Translation = {
    rus: {
        common: string
        official: string
    }
}
export type CountriesModules = NameModules & FlagModules & Translation & {
    region: string
    name: NameModules
    flags: FlagModules
    translations: Translation
    capital: string
    continents: string
    fifa: string
    languages: {
        eng: string
    }
}
