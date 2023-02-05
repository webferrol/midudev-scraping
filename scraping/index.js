import * as cheerio from 'cheerio'

const data = await fetch('https://resultados.as.com/resultados/futbol/primera/clasificacion/?omnil=mpal')
const html = await data.text()

const $ = cheerio.load(html)

const teamBoard = []

$('.tabla-datos tbody tr').each((index, el) => {
  const team = $(el).find('.nombre-equipo').text()
  const points = $(el).find('.destacado').text()
  teamBoard.push({ team, points })
})

console.log(teamBoard)
