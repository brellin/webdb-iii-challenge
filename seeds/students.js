
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Will Umstead', cohort_id: 2 },
        { id: 2, name: 'Amanda Lane', cohort_id: 1 },
        { id: 3, name: 'Andrew Brush', cohort_id: 3 }
      ]);
    });
};
