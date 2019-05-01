
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { id: 1, name: 'WEB17' },
        { id: 2, name: 'WEB18' },
        { id: 3, name: 'WEB19' }
      ]);
    });
};
