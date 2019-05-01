const router = require('express').Router()
const knex = require('knex')
const config = require('../../knexfile')

const db = knex(config.development)('students')

router.get('/', async (req, res) => {
    try {
        const get = await db.select('*').from('students')
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const get = await db
            .select(
                'students.id as id',
                'students.name as name',
                'cohorts.name as cohort'
            )
            .where({ 'students.id': id })
            .innerJoin('cohorts', 'students.cohort_id', 'cohorts.id')
            .first()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router
