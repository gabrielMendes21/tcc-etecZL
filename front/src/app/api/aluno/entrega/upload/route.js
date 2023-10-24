// import multer from 'multer'
import { NextResponse } from 'next/server'
import { join } from 'path'
import { Storage } from '@google-cloud/storage'
import crypto from 'crypto'
import { writeFile } from 'fs/promises'

// const upload = multer({
//   dest: resolve(
//     __dirname,
//     '..',
//     '..',
//     '..',
//     '..',
//     '..',
//     '..',
//     'tmp',
//     'uploads',
//   ),
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(
//         null,
//         resolve(
//           __dirname,
//           '..',
//           '..',
//           '..',
//           '..',
//           '..',
//           '..',
//           'tmp',
//           'uploads',
//         ),
//       )
//     },
//     filename: (req, file, cb) => {
//       crypto.randomBytes(16, (err, hash) => {
//         if (err) cb(err)

//         const fileName = `${hash.toString('hex')}-${file.originalname}`

//         cb(null, fileName)
//       })
//     },
//   }),
//   limits: {
//     fileSize: 3 * 1024 * 1024,
//   },
//   fileFilter: (req, file, cb) => {
//     const allowedMimes = [
//       'image/jpeg',
//       'image/pjpeg',
//       'image/png',
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//       'application/pdf',
//     ]

//     if (allowedMimes.includes(file.mimetype)) {
//       cb(null, true)
//     } else {
//       cb(new Error('Invalide file type'))
//     }
//   },
// })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

const storage = new Storage({
  keyFilename: join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'fluid-axis-402017-05332102ad29.json',
  ),
  projectId: 'fluid-axis-402017',
})

const bucket = storage.bucket('easy-hours')

export async function POST(req) {
  try {
    const data = await req.formData()

    const file = data.get('file')

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filePrefix = crypto.randomBytes(16)
    const filename = `${filePrefix.toString('hex')}-${file.name}`

    // const blob = bucket.file(filename)
    // const blobStream = blob.createWriteStream()
    // blobStream.on('finish', () => {
    //   return NextResponse.json('Arquivo enviado', { status: 200 })
    // })
    // blobStream.end(buffer)

    const path = join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'public',
      filename,
    )
    await writeFile(path, buffer)

    return NextResponse.json(filename)
  } catch (err) {
    console.log(err)
    return NextResponse.json('Falha ao carregar o arquivo', { status: 500 })
  }
}
