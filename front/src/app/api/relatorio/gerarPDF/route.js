import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')
  const user = jwt.verify(token, process.env.NEXT_PUBLIC_TOKENSECRET)

  const coordinator = 'ETEC'
  const classId = 1

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto(
    `http://localhost:3000/coordenador-${coordinator}/turma/${classId}/relatorio`,
    { waitUntil: 'networkidle0' },
  )

  await page.waitForSelector('#login-form')
  await page.type('#email', 'rogerio.costa3@etec.sp.gov.br')
  await page.type('#password', '987654')
  await page.click('#submit-button')

  await page.waitForNavigation()
  await page.goto(
    `http://localhost:3000/coordenador-${coordinator}/turma/${classId}/relatorio`,
    { waitUntil: 'networkidle0' },
  )

  const pdf = await page.pdf({
    printBackground: true,
    format: 'A4',
    margin: {
      top: '20px',
      bottom: '40px',
      left: '20px',
      right: '20px',
    },
  })

  await browser.close()

  const response = new NextResponse(pdf)
  response.headers.set('content-type', 'application/pdf')
  return response
}
