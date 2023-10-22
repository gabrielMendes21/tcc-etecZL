import multer from 'multer'
import { NextResponse } from 'next/server'
import { join, resolve } from 'path'
import crypto from 'crypto'
import { writeFile } from 'fs/promises'
const upload = multer({
  dest: resolve(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'tmp',
    'uploads',
  ),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          '..',
          '..',
          'tmp',
          'uploads',
        ),
      )
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const fileName = `${hash.toString('hex')}-${file.originalname}`

        cb(null, fileName)
      })
    },
  }),
  limits: {
    fileSize: 3 * 1024 + 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf',
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalide file type'))
    }
  },
})

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

export async function POST(req) {
  try {
    const data = await req.formData()
    const file = data.get('file')

    if (!file) {
      return NextResponse.json('Erro')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filePath = join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file.name,
    )
    await writeFile(filePath, buffer)

    console.log('Arquivo salvo em ' + filePath)

    return NextResponse.json('Sucesso')
  } catch (error) {
    console.error('Erro no upload:', error)
    return NextResponse.json('Erro no upload')
  }
  //   const data = await req.json()
  //   return NextResponse.json(data)
  //   try {
  //     upload.single('file')(req, (error) => {
  //       if (error) {
  //         throw error
  //       }
  //       console.log(req.file)
  //       return NextResponse.json(
  //         {
  //           message: 'Arquivo enviado com sucesso!',
  //         },
  //         { status: 200 },
  //       )
  //     })
  //   } catch (error) {
  //     console.error('Erro no upload:', error)
  //     return NextResponse.json({ error: 'Erro no upload' }, { status: 500 })
  //   }
}
