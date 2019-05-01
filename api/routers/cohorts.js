const router = require('express').Router()
const knex = require('knex')
const config = require('../../knexfile')

const db = knex(config.development)

router.get('/', async (req, res) => {
    try {
        const get = await db('cohorts')
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const { body } = req
    if (body.name) {
        try {
            const post = await db('cohorts').insert(body)
            const get = await db('cohorts').where({ id: id })
            res.status(200).json(get)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.send('You must include a name field in your request. Please try again.')
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const get = await db('cohorts')
            .where({ id: id })
            .first()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    if (body.name) {
        try {
            const put = await db('cohorts')
                .where({ id: id })
                .update(body)
            res.status(200).json(get)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(400).send('Must include a name field.')
    }
})

router.get('/:id/students', async (req, res) => {
    const { id } = req.params
    try {
        const get = await db('students').where({ cohort_id: id })
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const del = await db('cohorts').where({ id: id }).del()
        const get = await db('cohorts')
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router
