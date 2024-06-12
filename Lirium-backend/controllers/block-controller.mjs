
import { lirium, pubnubServer } from "../server.mjs"

export const mineBlock = (req, res, next) => {

    try {
        const data = req.body

        if (!data) {
            const err = new Error('Data is missing')
            err.statusCode = 400;
            throw err
        }
        const block = lirium.addBlock({ data: data })

        pubnubServer.broadcast()

        res.status(201).json({
            success: true,
            data: block
        })
    } catch (error) {
        next(error)
    }

}