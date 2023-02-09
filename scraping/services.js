import * as cheerio from 'cheerio'
/**
 * Cargamos un objeto CheerioApi a partir de una URL
 * @param {string} url Dirección de una página
 * @returns {Object} CheerioApi
 */
const scrape = async url => {
  const data = await fetch(url)
  const html = await data.text()
  return cheerio.load(html)
}

export default scrape
