import scrape from './services.js'
import { LEAGUE_FIELDS } from './types.js'

const $ = await scrape('https://resultados.as.com/resultados/futbol/primera/clasificacion/?omnil=mpal')

const teams = []
const trEL = $('.tabla-datos tbody tr')
trEL.each((key, element) => {
  const data = Object.entries(LEAGUE_FIELDS).map(([key, selector]) => {
    const value = $(element).find(selector).text()
    return value
  })
  teams.push(data)
})

console.log(teams)
