// /scripts/blog-reader.js

import process from 'node:process'
import fs from 'node:fs/promises'

import fetch from 'got'
import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'

/**
 * Checks for the existence of a file.
 *
 * @param file {string} - The file name.
 *
 * @returns {boolean} - Whether or not the file exists.
 */
const fileExists = async (file) => {
  return fs
    .access(file)
    .then(() => true)
    .catch(() => false)
}

/**
 * Fetches the HTML of a blog from its `blogger` URL.
 *
 * @param url {string} - The URL.
 * @param folder {string} - The folder to store the output in.
 *
 * @returns {string} - The text content on the page.
 */
const parseBlog = async (url, file) => {
  const html = await fetch(url).text()

  const doc = new JSDOM(html, { url })
  const reader = new Readability(doc.window.document)
  const article = reader.parse()

  const plainHtml = article.content
  const plainText = article.textContent

  await fs.writeFile(`blogs/pajrblog___${file}.txt`, plainText)
  await fs.writeFile(`blogs/pajrblog___${file}.htm`, plainHtml)
}

/**
 * The script will be called in GitHub actions as follows:
 *
 * ```
 * > node scripts/blog-reader.js "<input url>"
 * ```
 *
 * Call the `parseBlog` function for that URL, only if it has not been
 * processed already.
 */
const args = process.argv.slice(2)

const urlToParse = args[0]
if (!urlToParse) {
  console.error('Please pass a blog URL as the first parameter to this script.')
  process.exit(1)
}

const fileName = urlToParse.replace(/https?:\/\//, '').replace(/\//g, '__')
const txtExists = await fileExists(`blogs/pajrblog___${fileName}.txt`)
const htmExists = await fileExists(`blogs/pajrblog___${fileName}.htm`)
if (txtExists && htmExists) {
  console.error(
    `This URL has already been parsed, and its ouput is stored at 'blogs/pajrblog___${fileName}.txt & .htm'.`
  )
  process.exit(0)
}

await parseBlog(urlToParse, fileName)
