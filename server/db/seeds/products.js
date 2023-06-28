exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      id: 1,
      name: 'banana',
      price: 1,
      description: 'yellow',
      img_src: 'hi',
      calorie_count: 1,
      weight: 1,
      taste_profile: 'yum',
      origin: 'nz',
      random_fact: 'grow on trees',
    },
  ])
}
